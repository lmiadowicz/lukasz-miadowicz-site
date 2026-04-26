---
title: "AI Product Discovery: How to Test Hypotheses in Days, Not Sprints"
metaTitle: "AI Product Discovery: Test Hypotheses in Days"
slug: "ai-product-discovery-framework"
date: "2026-04-15"
updated: "2026-04-26"
author: "Łukasz Miądowicz"
excerpt: "Traditional product discovery takes weeks. With AI prototyping tools, you can test a hypothesis in 48 hours. Here's the framework I use to run rapid AI product discovery - from problem to working prototype to validated learning."
tags: ["Product Discovery", "AI Prototyping", "Hypothesis Testing", "Product Management", "LLM"]
category: "Product Strategy"
readTime: "9 min read"
image: "/images/posts/discovery_sprint.webp"
canonical: "https://miadowicz.com/blog/ai-product-discovery-framework"
faq:
  - question: "What is AI product discovery?"
    answer: "AI product discovery is the process of using AI tools to rapidly prototype, test, and validate product hypotheses - compressing traditional discovery timelines from weeks to days. Instead of writing specs and waiting for engineering, you build a working prototype yourself to test assumptions."
  - question: "How long should product discovery take?"
    answer: "With AI prototyping tools like Claude Code, a single hypothesis can be tested in 24-48 hours. A full discovery sprint covering 3-5 hypotheses should take 1-2 weeks, not months."
  - question: "What is the difference between product discovery and product delivery?"
    answer: "Product discovery answers 'should we build this?' Product delivery answers 'how do we build this well?' Discovery is about reducing risk through rapid learning. Delivery is about execution quality and scale."
  - question: "What tools do you use for AI product discovery?"
    answer: "The core stack is: Claude Code for building functional prototypes in Python or TypeScript, Streamlit for wrapping prototypes in a UI without frontend work, Langfuse for LLM observability, and Loom for async user testing. This stack lets you go from hypothesis to tested prototype in under 48 hours."
  - question: "How do you write a good product hypothesis?"
    answer: "A good product hypothesis follows this template: 'We believe that [target user] will [take action] because [reason], which will result in [measurable outcome]. We'll know we're right when [specific metric] changes by [amount] within [timeframe].' This forces clarity before you build anything and makes the hypothesis falsifiable."
  - question: "What should you do when a product hypothesis is invalidated?"
    answer: "When a hypothesis is invalidated, document exactly what you learned and why the assumption was wrong, then kill the project cleanly. The most important discipline is avoiding zombie projects - features that are 'kind of working' but not validated. They consume roadmap space and team energy without delivering value."
---

# AI Product Discovery: How to Test Hypotheses in Days, Not Sprints

**The short answer:** With AI prototyping tools, a single product hypothesis can go from idea to working prototype to validated learning in 48 hours — no engineering dependency at the discovery stage. Here's the four-step framework and the exact tool stack I use.

Traditional product discovery has a dirty secret: most of the time is wasted waiting.

Waiting for engineering to build a prototype. Waiting for design to create mockups. Waiting for stakeholder alignment on a spec that will change anyway. Then waiting for QA to test the thing that turns out to answer the wrong question.

AI changes this completely. With the right tools and framework, you can go from hypothesis to validated learning in 48 hours — without touching the engineering backlog.

I tested this at Qtravel.ai. The hypothesis: semantic search would let travel agents find relevant inventory faster than keyword search. Instead of writing a 10-page spec and waiting three sprints, I built a working semantic search prototype in an afternoon using Python and the OpenAI embeddings API. It was ugly. It worked. It proved the hypothesis — and the subsequent production build went from discovery to shipped in weeks, not months.

## The Old Way vs. The AI Way

| Stage | Traditional Discovery | AI-Powered Discovery |
|-------|----------------------|---------------------|
| Hypothesis to prototype | 2–4 weeks | 24–48 hours |
| User testing setup | 1 week | Same day |
| Iteration cycle | 1–2 sprints | Hours |
| Engineering dependency | High | None at discovery stage |
| Cost of being wrong | High | Near zero |
| Stakeholder alignment needed before building | Yes | No — test first, align on results |

The last row is underrated. In traditional discovery, you need buy-in before you can build. In AI-powered discovery, you test first and show stakeholders a working prototype. The conversation changes entirely when there's something to react to.

## The Framework: 4 Steps to AI-Powered Discovery

### Step 1: Write the Hypothesis as a Falsifiable Statement

Don't start with "let's add AI to our search." That's a solution looking for a problem.

Start with a falsifiable hypothesis:

> *"We believe that [target user] will [take action] because [reason], which will result in [measurable outcome]. We'll know we're right when [specific metric] changes by [amount] within [timeframe]."*

For the Qtravel.ai project, the hypothesis was: *"We believe travel agents will find relevant packages faster using semantic search because they describe client needs in natural language rather than structured fields, which will result in reduced proposal creation time. We'll know we're right when average proposal time drops below 30 minutes (from 4 hours) within 2 weeks of rollout."*

This format forces three things:
- **A specific user**, not "our users" in aggregate
- **A measurable outcome**, not a vague improvement
- **A falsifiable signal**, so you know when you're wrong

If you can't write this statement for your hypothesis, you're not ready to prototype. Keep clarifying until you can.

### Step 2: Build the Smallest Possible Prototype

With Claude Code, you can build a functional prototype of most AI features in a day. The key word is *functional* — not polished, not scalable, not production-ready. Just functional enough to test the core assumption.

**What counts as the smallest possible prototype:**
- A Python script that runs the AI logic against real data
- A Streamlit wrapper that gives testers a usable interface
- Real output for real inputs — not mocked responses

**What does not count:**
- A mockup in Figma (tests UI, not the AI behavior)
- A GPT wrapper with no real integration (tests the model, not the use case)
- A spec document (tests your writing, not the hypothesis)

The Qtravel.ai semantic search prototype was 80 lines of Python: load the inventory embeddings, take a natural language query, run cosine similarity, return the top 10 matches. I wrapped it in Streamlit in 20 more lines. Total build time: one afternoon.

The point isn't the sophistication of the prototype. The point is that it does the thing. If the thing doesn't work even in the prototype, the hypothesis is wrong.

### Step 3: Test with Real Users in Real Context

Don't test in a lab. Don't use a survey. Put the prototype in front of 5 real users doing their real job.

Watch what they do. Don't explain the feature. Don't help when they get stuck. Just observe and take notes.

**Why 5 users**: Usability research consistently shows that 5 users surface approximately 85% of usability issues. More users add marginal information but significant time. For discovery, you want speed.

**Why real context matters**: Users behave differently when they're doing a real task under real pressure than when they're "testing" in a structured session. At Qtravel.ai, I gave travel agents the prototype during their actual shift — not in a meeting room. The behavior I saw in those 2 hours would never have appeared in a controlled test.

**What to look for:**
- Do they reach for the feature when it's relevant, or do they ignore it?
- Where do they hesitate or express confusion?
- What do they say out loud without being asked?
- Does the output match what they actually need, or just what you imagined they needed?

You'll learn more in 2 hours of observation than in 2 weeks of analytics.

### Step 4: Kill or Scale — No Zombie Projects

After testing, you have one of three outcomes:

- **Validated**: The hypothesis was right. The prototype solved the problem for real users in real context. Write the spec, add to roadmap, allocate engineering. The discovery artifacts (prototype code, user observations) go into the technical brief.
- **Invalidated**: The hypothesis was wrong. Document exactly what you learned and why the assumption was off. Kill the project cleanly. The most important discipline here is the clean kill — no "let's refine it a bit more," no "maybe we need more users." If the hypothesis was wrong for 5 users doing real tasks, it was wrong.
- **Pivoted**: The hypothesis was wrong, but the testing revealed something better. A new problem emerged, or a different feature than the one you built turned out to be what users wanted. Restate the hypothesis and repeat from Step 1.

The most important discipline is killing zombie projects — features that are "kind of working" but not validated. They consume roadmap space and team energy without delivering value. They're harder to kill than failed projects because there's always a reason to try one more thing. The clean kill is a skill. Practice it.

## Why This Matters for AI Products Specifically

AI products have a unique discovery challenge: **the capability and the use case are often discovered simultaneously**.

You don't always know what an LLM can do until you try it on real data. And users don't always know what they want from AI until they see it working. This bidirectional uncertainty means that traditional discovery — where you define the solution space before building — often misses the most interesting opportunities.

Three AI-specific discovery principles I've learned:

**1. The demo effect is real and must be neutralized.** LLMs produce impressive output even when the underlying feature is useless. A beautiful AI summary that nobody reads is still a failed hypothesis. Design your testing specifically to distinguish "wow this is impressive" from "this changed how I do my job."

**2. Latency is often the real hypothesis.** Many AI features that look compelling in testing fail in production because users won't wait 8 seconds for a result they could get in 1 second a different way. Test with realistic latency from day one, even in the prototype.

**3. Error states are the real product.** AI makes confident mistakes. How the product handles those mistakes — how it presents uncertainty, how it enables correction — often matters more to adoption than the quality of the happy path. Test the error cases explicitly.

## A Discovery Sprint Template

For a full discovery sprint covering 3–5 hypotheses, I run a two-week sprint:

| Day | Activity |
|-----|----------|
| 1 | Hypothesis workshop: write and rank 5 falsifiable hypotheses |
| 2–3 | Build prototypes for top 2 hypotheses |
| 4–5 | User testing (5 users per hypothesis) |
| 6 | Synthesis: kill, validate, or pivot |
| 7–8 | Build prototypes for next 2 hypotheses (or iterate on pivots) |
| 9–10 | User testing + synthesis |
| 11 | Full sprint readout: decisions, kill log, validated hypotheses |
| 12 | Engineering briefing for validated hypotheses |

The kill log is not an afterthought. It's a first-class artifact. Every invalidated hypothesis gets documented with: the original hypothesis, what the prototype did, what users actually did, and the specific reason the hypothesis was wrong. Future teams benefit from knowing what didn't work and why.

## Anti-Patterns That Sink Discovery Sprints

**Building too much**: The prototype should be the minimum needed to test the assumption. If you're spending more than 2 days building, you've over-scoped. Cut scope, not corners.

**Testing with friendly users**: Friendly users tell you what you want to hear. Find the skeptics, the power users, the people who will use your product in the most demanding conditions. They surface the real failure modes.

**Conflating validation with enthusiasm**: A user saying "this is interesting!" is not validation. Validation is a user using it unprompted, or it changing a measurable behavior. Set your signal criteria before testing, not after.

**Skipping the hypothesis statement**: Teams that start with "let's see what users think of this" get mushy results. The hypothesis statement is what turns user feedback into a binary decision.

**Death by committee before prototype**: In traditional discovery, getting 6 people aligned on a spec before building takes weeks. In AI discovery, build the prototype first, then get 6 people aligned on what they just saw working. The conversation is 10× faster.

## Tools I Use for AI Product Discovery

- **Claude Code**: For building functional prototypes in Python or TypeScript. I can go from hypothesis to working prototype in hours, not days.
- **Streamlit**: For wrapping Python prototypes in a usable web UI without any frontend work. Non-engineers can use a Streamlit prototype.
- **Langfuse**: For LLM observability — seeing exactly what the model is doing at each step, what the inputs and outputs are, where it's making mistakes. Essential for AI features where the behavior is probabilistic.
- **Loom**: For async user testing. Share a prototype link, ask users to record themselves using it for 10 minutes. Scales to more users without scheduling overhead.
- **Linear** (or Notion): For the kill log and discovery documentation. Every hypothesis gets a card. Validated → moves to engineering backlog. Invalidated → moves to kill log with learnings documented.

## The Bottom Line

The best product leaders in the AI era aren't the ones who write the best specs. They're the ones who can test the most hypotheses per week.

Speed of learning is the new competitive advantage.

## Key Takeaways

1. **AI compresses discovery from weeks to 48 hours.** Hypothesis to working prototype in one day is the new baseline — not the exception.
2. **Write the hypothesis as a falsifiable statement before you build anything.** "We believe [user] will [action] because [reason], resulting in [outcome]. We'll know when [metric] changes by [amount] in [timeframe]."
3. **5 users in context beats 500 survey responses.** Observe real people doing their real job. Don't help. Just watch.
4. **Kill zombie projects ruthlessly.** A feature that's "kind of working" consumes more roadmap than a clean kill.
5. **The discovery stack is four tools:** Claude Code (prototype), Streamlit (UI), Langfuse (observability), Loom (async user testing).
6. **Engineering dependency is zero at discovery stage.** If you need engineering to test a hypothesis, the hypothesis is too big. Decompose it.
7. **Test latency and error states, not just the happy path.** Those are often where AI products live or die.

---

## Related Reading

- [The Agentic AI Product Playbook: Building 0-to-1 Products from First Principles](/blog/the-agentic-ai-playbook-building-0-to-1-products-from-first-principles) — what comes after discovery: a full 0-to-1 build framework with multi-agent architecture, circuit breakers, and documented ROI.
- [When Should You Use AI? A Decision Framework for AI PMs](/blog/when-should-you-use-ai-decision-framework-for-pms) — five questions to answer before you write your first discovery hypothesis.
- [Beyond User Stories: Why Agent Specs Are the Future of Software Development](/blog/beyond-user-stories-why-agent-specs-are-the-future-software-development) — once the hypothesis is validated, this is how to hand it to engineering in a format they can actually execute.

---

*Łukasz Miądowicz is an AI Product Leader who prototypes, tests, and ships AI products. He helps companies run faster discovery cycles using AI tools. [Work with Łukasz →](https://miadowicz.com/fractional)*
