---
title: "When Should You Use AI? A Decision Framework for AI PMs"
metaTitle: "When to Use AI: Decision Framework for AI PMs"
slug: "when-should-you-use-ai-decision-framework-for-pms"
date: "2026-03-13"
updated: "2026-03-13"
author: "Łukasz Miądowicz"
excerpt: "A practical decision framework for AI PMs on when to add AI to a product feature - 5 key questions, a visual decision tree, 5 anti-patterns, and real-world examples."
tags: ["AI", "AI Features", "AI Product Management", "AIPM", "Decision Framework", "Product Design", "Product Management", "Product Manager", "Product Strategy"]
category: "AI Product Management"
readTime: "8 min read"
image: "/images/posts/framework_overview.webp"
canonical: "https://miadowicz.com/blog/when-should-you-use-ai-decision-framework-for-pms"
faq:
  - question: "When should you add AI to a product feature?"
    answer: "Add AI when five conditions are met: (1) there's a real, documented user problem - not just stakeholder enthusiasm; (2) the task involves language, pattern recognition, or prediction at scale; (3) the cost of a wrong AI output is acceptable or HITL is in place; (4) you have the data and context the model needs; (5) the value justifies the added complexity. If any condition fails, hold off."
  - question: "What is an AI decision framework for product managers?"
    answer: "An AI decision framework is a structured set of questions that help product managers determine whether AI is the right solution for a given feature or workflow. A good framework prevents 'AI for AI's sake' decisions by forcing clarity on the user problem, the task characteristics, the risk profile, the data requirements, and the ROI threshold before any AI investment is made."
  - question: "What are the most common anti-patterns for AI feature development?"
    answer: "The 5 most common AI anti-patterns are: (1) The Magic Chatbot - wrapping an LLM in a chat UI and calling it a feature; (2) The Solution Looking for a Problem - adding AI because leadership asked, not because users need it; (3) The False Automation - automating a task that doesn't save meaningful time; (4) The Overconfident Oracle - deploying AI in high-stakes, irreversible decisions without HITL; (5) The Empty Stage - shipping an AI feature to a low-traffic or low-engagement part of the product."
  - question: "How do you decide if AI is worth the added complexity?"
    answer: "Calculate the value-to-complexity ratio before you build. AI adds cost (LLM inference, observability, evals, failure handling, retraining risk) and uncertainty (non-deterministic output, hallucinations, model drift). The value must be proportional - minimum 5–10x ROI over the naive solution, or a capability gap that makes the feature impossible without AI. If a dropdown, search filter, or rule-based system does 90% of the job at 10% of the cost, that's the right choice."
  - question: "When is a rule-based system better than AI?"
    answer: "Rule-based systems are better when: the logic is well-defined and stable, the output must be 100% consistent and explainable, the cost of an error is high and irreversible, the volume doesn't justify AI inference costs, or the problem space has fewer than a few hundred discrete cases. AI wins when the logic is fuzzy, the volume is high, the input is natural language, or personalization at scale is the goal."
  - question: "What does HITL mean in AI product decisions?"
    answer: "HITL - Human-in-the-Loop - is a design pattern where a human reviews or approves an AI output before a consequential action is taken. In the context of AI product decisions, HITL is the mechanism that makes high-stakes AI features viable: it preserves the automation value while preventing irreversible errors. If your AI feature fails the 'cost of wrong output' test, add a HITL checkpoint rather than blocking the feature entirely."
  - question: "How do you evaluate if an AI feature has enough data or context to work well?"
    answer: "Ask three questions: (1) Does the model have access to the specific knowledge this task requires - or will it hallucinate domain-specific facts? (2) Is there enough input signal in each user request for the model to produce a useful output, or is the request too ambiguous? (3) Can you provide the right context at inference time via RAG, system prompts, or user data? If the answer to all three is yes, the data readiness condition is met."
---

# When Should You Use AI? A Decision Framework for AI PMs

> **What you'll learn:** By the end of this post, you'll have a clear, repeatable framework for deciding when to add AI to a product feature - 5 diagnostic questions, a visual decision tree, 5 anti-patterns that kill AI projects, and real examples of when AI was the right and wrong call.

The most dangerous meeting in product is the one where someone says: "We should add AI to this."

Nobody disagrees. Everyone nods. The feature gets added to the roadmap.

Six months later, the AI feature has 3% adoption, the team is maintaining a system nobody trusts, and the PM is explaining to leadership why the investment didn't pay off.

The problem wasn't the AI. The problem was the question. **"How do we add AI?" is the wrong starting point.** The right question is: "Should we?"

## The 5-Question AI Decision Framework

Before adding AI to any feature, run it through these five questions. All five need a clear "yes" to proceed.

### Question 1: Is there a real, documented user problem?

Not a hunch. Not a stakeholder's intuition. Not a competitor's press release.

A real user problem means: you've observed users struggling with this specific thing, you can describe the friction in concrete terms, and you can measure the impact of fixing it.

If you can't state the user problem in one sentence with a measurable outcome, you're not ready to talk about AI yet.

**Diagnostic test:** Write the problem statement. If it contains the word "AI" anywhere, you've skipped the problem and jumped to the solution.

### Question 2: Does the task involve language, pattern recognition, or prediction at scale?

AI has a specific set of strengths. It excels at:

- Processing unstructured text (emails, documents, search queries, support tickets)
- Recognizing patterns across large, heterogeneous datasets
- Generating fluent, contextually appropriate content
- Personalizing outputs at a scale no rules engine can match
- Making predictions from noisy, high-dimensional input

If the task is well-defined, logic-based, and has fewer than a few hundred discrete cases, a rule-based system, a search index, or a well-designed algorithm will outperform AI in reliability, cost, and explainability.

**Diagnostic test:** Can you solve 90% of the problem with a well-designed dropdown, filter, or lookup table? If yes, start there.

### Question 3: Is the cost of a wrong AI output acceptable?

AI is non-deterministic. It will sometimes produce wrong, misleading, or harmful outputs. The question is not whether AI will ever be wrong - it will be. The question is: what happens when it is?

| Scenario | Error Cost | Decision |
|----------|------------|----------|
| Wrong content suggestion the user can ignore | Low | Proceed |
| Wrong recommendation the user acts on but can undo | Medium | Proceed with monitoring |
| Wrong output triggers an irreversible action | High | Add HITL first, then reassess |

If the cost of a wrong output is catastrophic and irreversible without a human checkpoint, you don't have an AI readiness problem - you have an architecture problem. Solve it with [HITL design](/glossary#hitl) before committing to AI.

### Question 4: Do you have the data and context the model needs?

An LLM will fill knowledge gaps with plausible-sounding fabrications. This is the hallucination problem - and it's not a bug you can patch with a better prompt. It's a fundamental property of how language models work.

For AI to produce reliable outputs, you need three things:

1. **Domain knowledge at inference time** - Can you inject the specific facts the model needs via RAG, a system prompt, or user context? Or will it be guessing from training data?
2. **Sufficient input signal** - Is each user request specific enough for the model to give a useful, non-generic response? A one-word search query often isn't.
3. **A constrained problem space** - Is the task bounded enough that the model's uncertainty doesn't produce dangerous output variance?

**Diagnostic test:** Manually prompt the model with 10 real user inputs from your product. If more than 2 produce outputs you wouldn't ship, you have a data readiness problem - not a model problem.

### Question 5: Does the value justify the added complexity?

AI is not free. It adds:

- **Inference cost** - LLM API calls at scale accumulate faster than engineering teams anticipate
- **Observability overhead** - evals, logging, and monitoring that traditional code doesn't require
- **Reliability risk** - non-deterministic output means QA is fundamentally different
- **Maintenance burden** - model updates, prompt drift, and capability changes require ongoing attention

The value must be proportional. A working rule: AI should deliver at least **5–10× ROI** over the simpler alternative, or enable a capability that is genuinely impossible without it.

**Diagnostic test:** What's the simplest possible solution to this problem? If AI delivers less than 5× the value at comparable cost, choose the simple solution.

---

## The Decision Tree

Run every proposed AI feature through this tree before it hits your roadmap.

```
Is there a documented user problem?
  └─ No  → Stop. Solve the discovery problem first.
  └─ Yes ↓

Does the task involve language, patterns, or prediction at scale?
  └─ No  → Consider rules, search, or simple logic instead.
  └─ Yes ↓

Is the cost of a wrong AI output acceptable?
  └─ High stakes, no HITL → Design the HITL layer first.
  └─ Acceptable ↓

Do you have the data and context the model needs?
  └─ No  → Build the RAG or context layer before the AI feature.
  └─ Yes ↓

Does the value (5–10× ROI) justify the added complexity?
  └─ No  → Choose the simpler solution.
  └─ Yes → ✅ Add AI.
```

If you reach ✅, you have a justified AI feature. If you stop anywhere along the tree, you have a clearer answer on what to fix first.

---

## The 5 Anti-Patterns: When Not to Use AI

These are the failure modes that appear most often across failed AI projects. Recognize them early.

### Anti-Pattern 1: The Magic Chatbot

**Symptom:** Wrapping an LLM in a chat interface and calling it an AI feature.

**Problem:** Chat is an interface pattern, not a product strategy. If the underlying task doesn't require natural language as input or output, a chat interface adds friction and reduces reliability compared to a well-designed form, filter, or action button.

**Fix:** Define the task first. Then choose the interface that minimizes user effort to accomplish it. Sometimes that's chat. More often, it isn't.

### Anti-Pattern 2: The Solution Looking for a Problem

**Symptom:** "Leadership wants us to add AI to [feature]. What problem can we solve with it?"

**Problem:** You've inverted the product process. The business outcome should drive the feature, not the technology. AI projects that start with the technology and work backward to the user problem consistently underdeliver - because the problem selection is already compromised by the answer.

**Fix:** Suspend the AI discussion entirely. Find the user problem first. Then evaluate AI as one of several possible solutions.

### Anti-Pattern 3: The False Automation

**Symptom:** The AI feature automates a task, but the time savings are negligible - or the overhead of reviewing AI outputs takes longer than doing the task manually.

**Problem:** Automation value is not guaranteed. If the task takes 2 minutes manually and the AI output requires 90 seconds of review before the user trusts it, the net saving is 30 seconds - and you've built a complex, expensive system to get there.

**Fix:** Calculate the time economics before you build. Measure the current task time. Estimate the required review time. Subtract. Check whether the saving justifies both the development cost and the ongoing maintenance.

### Anti-Pattern 4: The Overconfident Oracle

**Symptom:** Deploying AI in high-stakes, irreversible decisions without any human checkpoint - because the model "usually gets it right."

**Problem:** At some point, the AI will be wrong. In a low-stakes context, that's a minor annoyance. In a high-stakes context - sending a client email, triggering a payment, submitting a legal document - it's a liability event. A 0.1% failure rate that looks fine in demos becomes your worst production incident when volume is high enough.

**Fix:** Never deploy AI directly into irreversible consequential actions at launch. Start with a [HITL checkpoint](/glossary#hitl). Reduce human review only after evals demonstrate output quality at production scale.

### Anti-Pattern 5: The Empty Stage

**Symptom:** The AI feature is well-designed and works correctly - but it lives in a part of the product that nobody regularly uses.

**Problem:** Even a perfect AI feature delivers zero ROI if it's not embedded in the user's active workflow. Feature placement is a product decision as important as the feature itself.

**Fix:** Before building, confirm the deployment surface. Where does the user spend the most time in the product? How many daily or weekly active users touch that surface? The AI feature should go where users already are - not where it's easiest to add.

---

## Real-World Examples

### When AI was the right call

**Qtravel.ai travel proposals:** Travel agents were spending 4 hours per proposal researching flights, hotels, and logistics. All five conditions were met: a documented user problem (4 hours per task), the right task type (unstructured input, pattern matching, generation at scale), an acceptable error cost with HITL in place (human reviewed before sending), data available at inference time (supplier APIs, client history), and clear ROI ($191 net savings per task, 1.3-year payback). ✅

**ButterCMS AI writing assistance:** Content editors needed to produce more content in less time. The task was core language work - drafting, editing, rephrasing. Error cost was low (human always reviewed). Context was available (brand voice, existing content). Outcome: +40% conversion increase, -30% content creation time. ✅

### When AI was the wrong call

**AI search for a 50-item product catalog:** A B2B SaaS product added semantic search to a small, well-labeled catalog. A filter solved 95% of the same use cases with 100% reliability, zero inference cost, and full explainability. The AI version had higher latency and hallucinated product names in 8% of edge-case queries. Condition 2 failed - wrong task type for AI. ❌

**AI support chatbot without account data:** A customer support bot was deployed to handle incoming tickets, but it had no access to actual account data, order history, or case status - only the product FAQ. Users quickly learned that vague questions triggered escalation faster than specific ones. The bot reduced ticket volume by 4% while frustration scores increased by 18%. Conditions 3 and 4 both failed. ❌

---

## Making the Final Call

The framework is a filter, not a formula. Even when all five conditions are met, AI is still a probabilistic bet. The goal is to maximize your probability of building something that delivers real value - not to find a reason to add AI, and not to reflexively avoid it.

One last test before you commit: **write down what success looks like in 6 months.** Specific metric, specific amount, specific timeframe. If you can't write it in one sentence, the problem definition isn't clear enough to justify the investment yet.

## Key Takeaways

1. **"Should we use AI?" is more important than "how do we add AI?"** Start with the user problem, not the technology.
2. **Run the 5-question framework before any AI feature hits your roadmap.** All five must pass: real problem, right task type, acceptable error cost, sufficient data, and justified ROI.
3. **When the error cost is high, add HITL - don't block the feature.** HITL is the mechanism that makes high-stakes AI viable, not a sign of failure.
4. **Know the 5 anti-patterns by name.** Magic Chatbot, Solution Looking for a Problem, False Automation, Overconfident Oracle, Empty Stage. Most failed AI features trace back to one of them.
5. **The simplest solution that works is always the right solution.** AI is justified when it unlocks value that simpler approaches can't - not when it looks impressive in a demo.

---

*Łukasz Miądowicz is an AI Product Leader who builds and ships AI products. He helps companies decide where AI creates real value - and where it doesn't. [Work with Łukasz →](https://miadowicz.com/fractional)*
