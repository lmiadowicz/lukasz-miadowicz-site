---
title: "AI Product Discovery: How to Test Hypotheses in Days, Not Sprints"
metaTitle: "AI Product Discovery: Test Hypotheses in Days"
slug: "ai-product-discovery-framework"
date: "2026-04-15"
updated: "2026-04-15"
author: "Łukasz Miądowicz"
excerpt: "Traditional product discovery takes weeks. With AI prototyping tools, you can test a hypothesis in 48 hours. Here's the framework I use to run rapid AI product discovery - from problem to working prototype to validated learning."
tags: ["Product Discovery", "AI Prototyping", "Hypothesis Testing", "Product Management", "LLM"]
category: "Product Strategy"
readTime: "6 min read"
image: ""
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

> **What you'll learn:** By the end of this post, you'll have a concrete 4-step framework for running AI-powered product discovery that compresses hypothesis testing from weeks to 48 hours. You'll see exactly how to write a falsifiable hypothesis, build the smallest possible prototype using Claude Code, test it with real users, and make a clean kill-or-scale decision - with no engineering dependency at the discovery stage.

Traditional product discovery has a dirty secret: most of the time is wasted waiting.

Waiting for engineering to build a prototype. Waiting for design to create mockups. Waiting for stakeholder alignment on a spec that will change anyway.

AI changes this completely. With the right tools and framework, you can go from hypothesis to validated learning in 48 hours - without touching the engineering backlog.

## The Old Way vs. The AI Way

| Stage | Traditional Discovery | AI-Powered Discovery |
|-------|----------------------|---------------------|
| Hypothesis to prototype | 2–4 weeks | 24–48 hours |
| User testing setup | 1 week | Same day |
| Iteration cycle | 1–2 sprints | Hours |
| Engineering dependency | High | None for validation |
| Cost of being wrong | High | Near zero |

## The Framework: 4 Steps to AI-Powered Discovery

### Step 1: Write the Hypothesis as a Falsifiable Statement

Don't start with "let's add AI to our search." Start with:

> *"We believe that [target user] will [take action] because [reason], which will result in [measurable outcome]. We'll know we're right when [specific metric] changes by [amount] within [timeframe]."*

This forces clarity before you build anything.

### Step 2: Build the Smallest Possible Prototype

With Claude Code, you can build a functional prototype of most AI features in a day. The key word is *functional* - not polished, not scalable, not production-ready. Just functional enough to test the core assumption.

For the Qtravel.ai semantic search, I built the first prototype in an afternoon using Python and the OpenAI embeddings API. It was ugly. It worked. It proved the hypothesis.

### Step 3: Test with Real Users in Real Context

Don't test in a lab. Don't use a survey. Put the prototype in front of 5 real users doing their real job.

Watch what they do. Don't explain. Don't help. Just observe.

You'll learn more in 2 hours of observation than in 2 weeks of analytics.

### Step 4: Kill or Scale - No Zombie Projects

After testing, you have one of three outcomes:

- **Validated**: The hypothesis was right. Write the spec, add to roadmap, allocate engineering.
- **Invalidated**: The hypothesis was wrong. Document what you learned. Kill the project.
- **Pivoted**: The hypothesis was wrong, but you discovered something better. Restate the hypothesis and repeat.

The most important discipline is killing zombie projects - features that are "kind of working" but not validated. They consume roadmap space and team energy without delivering value.

## Why This Matters for AI Products Specifically

AI products have a unique discovery challenge: **the capability and the use case are often discovered simultaneously**.

You don't always know what an LLM can do until you try it. And users don't always know what they want from AI until they see it working.

This makes rapid prototyping even more critical for AI products than for traditional software. The discovery loop needs to be fast enough to keep up with the pace of model improvements.

## Tools I Use for AI Product Discovery

- **Claude Code**: For building functional prototypes in Python or TypeScript
- **Streamlit**: For wrapping prototypes in a UI without frontend work
- **Langfuse**: For observability - seeing exactly what the LLM is doing in each step
- **Loom**: For async user testing - share a prototype, ask users to record themselves using it

## The Bottom Line

The best product leaders in the AI era aren't the ones who write the best specs. They're the ones who can test the most hypotheses per week.

Speed of learning is the new competitive advantage.

## Key Takeaways

1. **AI compresses discovery from weeks to 48 hours.** Hypothesis to working prototype in one day is the new baseline — not the exception.
2. **Write the hypothesis as a falsifiable statement before you build anything.** "We believe [user] will [action] because [reason], resulting in [outcome]. We'll know when [metric] changes by [amount] in [timeframe]."
3. **5 users in context beats 500 survey responses.** Observe real people doing their real job. Don't help. Just watch.
4. **Kill zombie projects ruthlessly.** A feature that's "kind of working" consumes more roadmap than a clean kill.
5. **The discovery stack is four tools:** Claude Code (prototype), Streamlit (UI), Langfuse (observability), Loom (async user testing).
6. **Engineering dependency is zero at discovery stage.** If you need engineering to test a hypothesis, the hypothesis is too big.

---

*Łukasz Miądowicz is an AI Product Leader who prototypes, tests, and ships AI products. He helps companies run faster discovery cycles using AI tools. [Work with Łukasz →](https://miadowicz.com/#contact)*
