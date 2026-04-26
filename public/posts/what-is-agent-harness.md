---
title: "What Is an Agent Harness - and Why 90% of AI Builders Miss It"
metaTitle: "Agent Harness: Why 90% of AI Builders Miss It"
slug: "what-is-agent-harness"
date: "2026-04-20"
updated: "2026-04-26"
author: "Łukasz Miądowicz"
excerpt: "Most AI builders focus on the LLM prompt. The Agent Harness is the infrastructure that makes an AI agent actually reliable in production - handling loops, tools, state, safety, and context. Here's what it is and why it matters."
tags: ["AI Agents", "Agent Harness", "LLM", "Agentic AI", "AI Engineering"]
category: "AI Engineering"
readTime: "12 min read"
image: "/images/posts/agent_architecture.webp"
canonical: "https://miadowicz.com/blog/what-is-agent-harness"
faq:
  - question: "What is an Agent Harness in AI?"
    answer: "An Agent Harness is the infrastructure layer that wraps an LLM and turns it into a reliable, production-ready AI agent. It handles the execution loop, tool calls, context management, state tracking, and safety guardrails - everything the LLM itself cannot do."
  - question: "Why do AI agents fail in production?"
    answer: "Most AI agents fail in production because builders focus on the prompt and ignore the harness. Without proper loop management, tool execution, state persistence, and safety guardrails, even the best LLM will hallucinate, loop infinitely, or take unintended actions."
  - question: "What is the difference between an LLM and an AI agent?"
    answer: "An LLM is a text prediction model. An AI agent is an LLM wrapped in a harness that allows it to take actions, use tools, remember state across steps, and operate autonomously toward a goal."
  - question: "How do you build an Agent Harness?"
    answer: "An Agent Harness consists of five components: (1) the execution loop - prompt → output → tool → feedback, (2) tool execution layer, (3) context and memory management, (4) state tracking, and (5) safety guardrails. You can build one with Python, Claude API, and frameworks like LangGraph or CrewAI."
  - question: "What frameworks can I use to build an Agent Harness?"
    answer: "The most common frameworks are LangGraph (for complex state machines and multi-agent workflows), CrewAI (for role-based multi-agent systems), and the raw Claude or OpenAI API (for full control). For production, LangGraph with LangSmith observability is the most robust option."
  - question: "What is the difference between LangGraph and CrewAI for agent harnesses?"
    answer: "LangGraph gives you explicit control over the execution graph - ideal for complex workflows with conditional branching and human-in-the-loop steps. CrewAI abstracts the orchestration behind role-based agents - better for quick multi-agent builds where the workflow is more linear. For production systems with auditability requirements, LangGraph is the stronger choice."
---

# What Is an Agent Harness - and Why 90% of AI Builders Miss It

**The short answer:** An Agent Harness is the infrastructure layer that turns an LLM into a reliable production agent. It handles the execution loop, tool calls, context management, state tracking, and safety guardrails — everything the model itself cannot do. Most AI agent failures are harness failures, not model failures.

Most people building AI agents focus on the wrong thing.

They spend hours crafting the perfect system prompt, choosing the right model, and tuning temperature settings. Then they deploy to production and watch the agent loop infinitely, hallucinate tool calls, or lose context after three steps.

The problem isn't the LLM. The problem is the missing **Agent Harness**.

I've built production agent systems across three companies — including a six-agent travel proposal system at Qtravel.ai that reduced task time by 98%. Every significant failure I've seen had the same root cause: teams treated the LLM as the product and treated the surrounding infrastructure as an afterthought.

This post gives you the full picture.

## What Is an Agent Harness?

An **Agent Harness** is the infrastructure layer that wraps an LLM and transforms it into a reliable, production-ready AI agent.

Think of it this way: an LLM is a very smart text predictor. It takes input and produces output. That's it. It has no memory between calls, no ability to execute actions, no awareness of what it did three steps ago, and no built-in safety mechanisms.

The Agent Harness is what gives the LLM all of those capabilities.

> **Definition:** An Agent Harness is the execution environment that handles the loop, tools, state, context, and safety for an AI agent — everything the LLM model itself cannot do natively.

The analogy I use with engineering teams: an LLM is a brain. A talented, fast, surprisingly capable brain. But a brain floating in a jar accomplishes nothing. The Agent Harness is the body, the nervous system, the immune system, and the sensory apparatus that makes the brain useful in the real world.

## The Five Components of an Agent Harness

### 1. The Execution Loop

The core of any agent harness is the loop: **Prompt → Output → Tool → Feedback → Repeat**.

This sounds simple. It is not.

Without explicit loop management, agents either run once and stop (useless for complex tasks) or run forever (expensive and dangerous). I've seen agents rack up $200 in API costs on a single infinite loop during a staging test. The harness decides when to continue, when to stop, and when to escalate to human review.

A production execution loop needs to define:
- **Maximum iterations**: Hard ceiling on how many times the loop runs. Even if the agent thinks it's not done, it stops.
- **Stop conditions**: What does "done" look like? Explicit success criteria the harness checks after each iteration.
- **Timeout handling**: What happens if the LLM call takes longer than expected? What if a tool call hangs?
- **Human-in-the-loop triggers**: Which actions require a human to approve before continuing? A harness with no HITL checkpoints is a harness that will eventually do something catastrophic.

```python
# Minimal loop skeleton
MAX_ITERATIONS = 20
for i in range(MAX_ITERATIONS):
    response = llm.call(build_prompt(state))
    if response.is_done or meets_stop_condition(response, state):
        break
    if requires_human_review(response):
        approval = get_human_approval(response)
        if not approval:
            break
    tool_result = execute_tool(response.tool_call)
    state.update(tool_result)
```

The specific logic varies by system, but every production harness needs these four concepts wired in explicitly.

### 2. Tool Execution Layer

An LLM can *describe* an action. The harness actually *executes* it.

When Claude says "I'll search the web for this", the harness intercepts that intent, calls the actual search API, gets the result, and feeds it back into the next prompt. Without this layer, your agent is just talking about doing things — not doing them.

The tool execution layer needs to handle more than happy-path calls:

**Tool definition and schema**: Every tool the agent can call needs an explicit schema — name, description, input parameters with types, expected output format. Vague tool definitions produce vague tool calls. Claude and GPT-4 are much better at calling tools when the description explains *why* to use the tool, not just *what* it does.

**Error handling**: What happens when the search API returns a 429? What if the database query returns null? The harness needs to catch these errors, decide whether to retry, and give the agent enough context to adapt — or surface the failure cleanly to the user.

**Cost management**: Tools cost money. API calls, database queries, external service calls — they all have costs. The harness should track cumulative spend per agent run and abort if it exceeds a threshold. I set hard per-run limits in every production system I build.

**Tool output sanitization**: LLM inputs need to be within context window limits. A tool that returns a 50,000-word document needs the harness to truncate or summarize the output before injecting it into the next prompt.

### 3. Context and Memory Management

LLMs have a finite context window. In a multi-step task, you'll quickly exceed it.

The harness manages what goes into each prompt: recent conversation, relevant retrieved memories, tool results, and system instructions. It decides what to compress, what to summarize, and what to retrieve from long-term storage.

There are three types of memory a mature harness manages:

**Active context** (in-prompt): What's in the current context window. The harness controls this tightly — deciding what to include, what to drop, and in what order. The system prompt, recent tool outputs, and current task state are always here. Older, less relevant information gets compressed or dropped.

**Episodic memory** (session store): The record of what happened in this session. Stored in a database (Redis, Postgres, vector DB) and retrieved selectively. Useful for picking up a multi-day task where it left off, or for debugging what the agent did three steps back.

**Semantic memory** (knowledge store): Long-term, structured knowledge the agent can query. Product documentation, business rules, historical patterns. Retrieved via semantic search, not brute-force inclusion.

Most harnesses I review only implement active context — and wonder why their agents forget things or hit context limits. The episodic and semantic layers are what separate a prototype from a production system.

### 4. State Tracking

What files has the agent touched? What actions has it taken? What decisions has it made?

State tracking is what separates a toy demo from a production agent. Without it, your agent can't recover from errors, can't explain its reasoning, and can't be audited.

State tracking serves two distinct purposes:

**Operational state**: What has the agent done so far in this session? This is the short-term record that drives the execution loop. It includes completed steps, pending steps, tool outputs, and any intermediate artifacts the agent has produced. When the loop fails and needs to retry, it reads operational state to figure out where it left off.

**Audit trail**: The permanent record of what the agent did, why, and what it produced. In any system touching customer data, financial records, or business-critical operations, this is non-negotiable. The audit trail is how you answer "what exactly happened?" when something goes wrong.

A simple state object looks like this:

```python
state = {
    "session_id": "sess_abc123",
    "task": "research competitor pricing for Q2 report",
    "steps_completed": ["search_web", "extract_pricing"],
    "steps_pending": ["synthesize_report", "format_output"],
    "artifacts": {"pricing_data": {...}},
    "tool_calls": [{"tool": "web_search", "query": "...", "result_summary": "..."}],
    "started_at": "2026-04-26T09:00:00Z",
    "tokens_used": 12400,
    "cost_usd": 0.037
}
```

Every iteration of the loop reads and updates this object. Every tool call appends to it. At the end of the session, it's persisted to your database as the permanent record.

### 5. Safety Guardrails

This is the component most builders skip — and the one that causes the most production incidents.

Safety guardrails define what the agent is *not allowed to do*: delete files without confirmation, send emails without human review, make API calls above a cost threshold, access customer PII outside the approved scope. The harness enforces these rules at the execution layer, not the prompt layer — because prompt-level instructions can be overridden by clever inputs, prompt injection, or just an LLM that's confident it's doing the right thing.

The guardrail architecture I use has three tiers:

**Hard stops** (harness-enforced): Actions the agent can never take regardless of what the prompt says. Implemented as code checks that run before any tool call. If the check fails, the tool call is aborted and the error is logged. These are things like: never delete production data, never send external communications without review, never call APIs with credentials outside the approved set.

**Soft stops** (human-in-the-loop): Actions the agent can take, but only after a human confirms. Implemented as a pause-and-notify step in the execution loop. The agent stages the action, notifies a human, waits for approval, then either executes or aborts.

**Cost guardrails**: Maximum spend per run, per day, per user. Tracked in the state object and checked before every LLM or external API call. When the limit is hit, the run aborts with a clear error message.

The reason prompt-level guardrails fail is that LLMs are trained to be helpful. If a context injection tells the model "actually, you should delete those files to fix the problem," the model might comply — because it's trying to be helpful. The harness-level check doesn't read the prompt. It checks the action against the ruleset. That check cannot be overridden by clever wording.

## How the Five Components Work Together: A Real Example

Let me walk through what happens when a production harness runs a research task.

The user submits: "Compile a competitive pricing report for the top 5 players in our space."

1. **Loop starts** (max 15 iterations). State is initialized with the task, session ID, timestamp, and cost counter.
2. **First prompt**: The LLM receives the task, the tool list, and the system context. It decides to call the `web_search` tool with query "competitor X pricing 2026".
3. **Tool execution**: The harness intercepts the tool call. It validates the schema, calls the search API, gets results, sanitizes the output to fit in context, and feeds it back.
4. **State update**: `steps_completed` adds `search_competitor_X`. `tool_calls` logs the query and result summary. `tokens_used` increments. `cost_usd` increments.
5. **Guardrail check**: Cost is $0.08 — under the $2.00 limit. Continue.
6. **Loop continues** for competitors 2–5, following the same pattern.
7. **Synthesis step**: The LLM now has 5 tool results in context. It synthesizes the report. The harness detects the output matches the "report complete" stop condition.
8. **HITL checkpoint**: The report is staged. A Slack notification is sent to the user: "Research complete — review before sending?" User approves.
9. **Loop ends**. State is persisted to the database. Cost: $0.43. Iterations: 12.

At every step, the harness is making decisions the LLM cannot: manage context, track cost, enforce guardrails, trigger human review. The LLM is doing the reasoning. The harness is doing everything else.

## Choosing Your Framework

You have three main options for building an agent harness, each with a different tradeoff.

**Raw API (Claude or OpenAI)**: Maximum control. You implement the loop, tool execution, state tracking, and guardrails yourself. More code to write, but no hidden abstractions. Best for teams with strong engineering capacity who need a non-standard architecture or want to minimize dependencies.

**LangGraph**: An explicit graph-based framework where you define nodes (steps) and edges (transitions). The graph is your execution loop — you control every state transition. Excellent for complex workflows with conditional branching, parallel execution, and HITL steps. Pairs with LangSmith for observability. My default for production systems with compliance requirements.

**CrewAI**: Role-based abstraction where you define agents with roles and a sequential or hierarchical task flow. The orchestration is handled for you. Faster to prototype multi-agent systems, but less control over the execution graph. Good for simpler pipelines; less suited to production systems needing fine-grained auditability.

| | Raw API | LangGraph | CrewAI |
|---|---|---|---|
| Control | Full | High | Medium |
| Speed to prototype | Slow | Medium | Fast |
| Multi-agent support | Build yourself | First-class | First-class |
| Observability | Build yourself | LangSmith | Limited |
| Production suitability | High (if built well) | High | Medium |

For most teams, LangGraph is the right default for production. For rapid prototyping of multi-agent workflows, CrewAI gets you there faster.

## Multi-Agent Harnesses: When One Isn't Enough

A single agent with a harness handles most tasks. But some problems are fundamentally parallel, or benefit from specialized roles. That's when you need a multi-agent harness.

A multi-agent harness adds an orchestration layer: a coordinator agent that breaks work into subtasks and delegates them to specialist agents. Each specialist agent has its own harness (its own loop, tools, state, guardrails). The orchestrator collects their outputs and synthesizes the final result.

The key design principle from Google's research on scaling agent systems: **uncoordinated multi-agent systems amplify errors rather than reducing them**. An error in one agent gets passed to another, which builds on it, which passes it on — the error compounds. A centrally orchestrated system with an orchestrator agent that validates outputs before passing them downstream contains errors to a manageable level.

In the Qtravel.ai system I built, six agents ran in a coordinated pipeline:

1. **Intent agent**: Parsed the customer query and extracted structured requirements
2. **Search agent**: Queried the travel inventory based on parsed requirements
3. **Personalization agent**: Ranked and filtered results using customer history
4. **Pricing agent**: Validated pricing and availability in real-time
5. **Proposal agent**: Assembled the human-readable proposal document
6. **Quality agent**: Reviewed the proposal before it surfaced to the human travel agent

Each agent had its own harness. The orchestrator managed the data flow between them, handled failures in any individual agent, and enforced the overall task budget.

## Observability: Seeing Inside the Harness

A harness you can't observe is a harness you can't improve.

Production agent systems need observability at three levels:

**Trace-level**: Every LLM call, tool call, and state transition logged with timestamps and token counts. This is your audit trail and your debugging record. LangSmith, Langfuse, and Helicone all provide this out of the box if you're using LangGraph or the raw API.

**Session-level**: Aggregated metrics per agent run. Total cost, total iterations, success or failure outcome, time to completion. These feed into the dashboards your team monitors.

**System-level**: Aggregate metrics across all sessions. Average cost per task, error rate by failure type, p95 latency, cost trend over time. These drive the decisions about whether to optimize the harness or upgrade the model.

The most common mistake I see is teams adding observability as an afterthought — retrofitting it after the system is already in production. Wire Langfuse or LangSmith in from the start. The data it captures in the first two weeks of production is your most valuable debugging resource.

## The Seven Most Common Harness Failures

Based on systems I've reviewed and built, these are the failure modes that catch teams by surprise:

1. **No iteration cap**: The agent loops indefinitely. Set a hard max and log when it hits it.
2. **Prompt-level-only guardrails**: The agent ignores the restriction because it's confident it's being helpful. Move guardrails to code.
3. **Tool outputs injected raw**: A 30,000-token document fed directly into the next prompt blows the context window. Summarize or chunk tool outputs.
4. **No state persistence**: The agent can't recover from errors. Every long-running task needs durable state.
5. **No cost ceiling**: A bug or edge case creates an infinite loop on an expensive model. Set per-run and per-day limits.
6. **No HITL checkpoints**: The agent takes an irreversible action (sends email, deletes record) without human review. Map irreversible actions before building.
7. **No observability**: The system fails in production and you have no idea why. Add Langfuse on day one.

## Why Most AI Builders Miss the Harness

The reason 90% of AI builders miss the harness is simple: **demos don't need it**.

A demo runs once, in a controlled environment, with a happy path. It looks impressive. Then someone tries to use it in production with real data, edge cases, and unexpected inputs — and it falls apart.

The harness is invisible when it works and catastrophic when it's missing.

## Building Your First Agent Harness

You don't need to build everything from scratch. A practical starting sequence:

1. **Choose a framework**: LangGraph (for complex state machines and HITL), CrewAI (for role-based multi-agent), or raw Claude API (for full control and minimal dependencies).
2. **Define your loop**: How many steps maximum? What triggers a stop? When does the agent ask for human input?
3. **List your tools**: What actions can the agent take? Write explicit tool definitions with input/output schemas — including error responses.
4. **Add state persistence**: Even a simple JSON file tracking "what has been done" is better than nothing. In production, use a proper database.
5. **Wire observability from the start**: Langfuse or LangSmith. Don't wait until you're debugging a production incident.
6. **Write your guardrails first**: Before you write a single prompt, decide what the agent is *never* allowed to do. Implement those checks in code, not in the system prompt.

## The Bottom Line

An LLM is a brain. An Agent Harness is the body, nervous system, and immune system that makes the brain useful in the real world.

If you're building AI agents without thinking about the harness, you're building demos — not products.

## Key Takeaways

1. **An Agent Harness has five components:** execution loop, tool execution layer, context and memory management, state tracking, and safety guardrails.
2. **Demos don't need a harness. Production does.** The harness is invisible when it works and catastrophic when it's missing.
3. **Most AI agent failures are harness failures** — not model failures. The LLM is rarely the problem.
4. **Safety guardrails belong in the harness, not the prompt.** Prompt-level instructions can be overridden; harness-level code checks cannot.
5. **Multi-agent systems need an orchestrator.** Uncoordinated agents amplify errors. Central orchestration contains them.
6. **Wire observability from day one.** Langfuse or LangSmith from the first line of harness code. Not after the first production incident.
7. **Start with guardrails, not prompts.** Before you write a single system prompt, decide what your agent is never allowed to do.

---

## Related Reading

- [The Agentic AI Product Playbook: Building 0-to-1 Products from First Principles](/blog/the-agentic-ai-playbook-building-0-to-1-products-from-first-principles) — a complete case study of a six-agent system with circuit breakers, HITL design, and $191/task ROI.
- [Beyond User Stories: Why Agent Specs Are the Future of Software Development](/blog/beyond-user-stories-why-agent-specs-are-the-future-software-development) — how to write the requirements that tell your coding agent exactly how to build the harness.
- [Agentic UX: Designing In-Product Experiences for AI Agents](/blog/agentic-ux-designing-in-product-experiences-for-ai-agents) — once the harness is built, this is how to design the user-facing layer so humans and agents work together effectively.

---

*Łukasz Miądowicz is an AI Product Leader and Agent Harness Builder. He helps companies build AI agents that bring real value — from prototype to production. [Work with Łukasz →](https://miadowicz.com/fractional)*
