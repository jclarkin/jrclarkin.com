---
title: "Week 4 - Informed Failure"
publishDate: 2014-02-15
description: "I worked on a new tool for Selenium JUnit testing: video recording of test execution. There are some good articles on how to utilize Monte Media Library..."
---

I worked on a new tool for Selenium JUnit testing: video recording of test execution. There are some good articles on how to utilize Monte Media Library for Java to add recording to your code. However, I did not see anything that took advantage of JUnit 4 functionality, such as Rules. Therefore, I have married the two together into a custom rule that lets you specify on which TestResult conditions to record a video: Success, Failure, or Error.

The goal of this tool is to make it faster to diagnose why a check has failed. The sooner information is provided to a stakeholder, the greater the value. I am guessing that check failure is either an indication of broken value in the product, or broken checking. Having videos to compare against a known working state will be handy.

I imagine this may be useful for other Selenium users, so here is the gist:

[https://gist.github.com/jclarkin/5fe969ce98d4890c89dc](https://gist.github.com/jclarkin/5fe969ce98d4890c89dc)

Thanks goes to Monte Media Library and Road to Automation for the tools to solve my problem.
