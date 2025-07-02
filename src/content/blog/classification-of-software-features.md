---
title: "Classification of Software Features"
description: "I typically hear two categories for software features: internal and external. Occasionally, from the development side, I hear of a third option: deprecated. I am proposing a fourth category..."
publishDate: 2014-04-25
author: "Jonathan Clarkin"
---

I typically hear two categories for software features: internal and external. Occasionally, from the development side, I hear of a third option: deprecated. I am proposing a fourth category, that I often find in enterprise software that I would call *vestigial*.

Here are my four categories defined:

- **External Feature**: These are solutions for customer needs. They should produce value to the buyers of the software.
- **Internal Features**: These are solutions for the company that produces the software. They reduce costs of maintaining and improving the software.
- **Deprecated Features**: These are solutions once targeted internally or externally that are known to no longer produce significant value to keep. The are technical debt that is clearly flagged for removal.
- **Vestigial Features**: These are a mystery. They likely were once solutions to someone, or at least intended to be so. Their current value is unknown and cannot be flagged for deprecation. They are technical debt with no mitigation strategy.

A *vestigial feature* is like the human appendix: maybe we don't need it anymore, but it remains part of our ecosystem. The tonsils were once vestigial until we learned more about them and determined their value.

Does your enterprise software have many vestigial features? We can form a test strategy to determine their original intent, their current uses, and estimate their value. 