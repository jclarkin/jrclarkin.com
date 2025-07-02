---
title: "JavaScript Unit Testing"
description: "A comprehensive report on JavaScript unit testing tools and techniques, covering authoring checks, executing scripts, and reporting results..."
publishDate: 2014-04-11
author: "Jonathan Clarkin"
---

*Note: The recommendations I make in this report are specific to the contextual needs of my current team. Your mileage may vary 😊*

## Summary

The goal of this research was to determine tools and techniques to empower developers in unit testing JavaScript applications. The research discovered that there are three distinct aspects of JS unit testing:

- Authoring checks: the means of writing the unit tests
- Executing scripts: the frameworks that execute the checks
- Reporting: displaying the execution results in a consistent and valued format

For authoring, the recommendation is to use the Chai.js library and to write checks in a behaviour driven development (BDD) format. For execution, the recommendation is to use Mocha as it has the most versatility to integrate into an existing Continuous Integration (CI) system. For reporting, the recommendation is to either use SonarQube if looking for tracking history and other code quality metrics, or to create a custom reporter that suits the team's needs.

## Authoring Checks

As is typical in the JavaScript world, given any one need there exists many similar libraries and frameworks to solve the problem. This remains true for unit test helpers. To further conflate selection, some libraries offer both authorship and execution in a single framework.

The largest dichotomy between library selections is the supported writing style: do you want checks to be written as asserts (typically labelled at TDD for Test Driven Development) or as describing behaviour (BDD). Assertions are the more traditional pattern, but behavioural is more readable enabling increased visibility of risk to Product Owners and Business Analysts.

**Code Sample 1: TDD Style Unit Testing**
```javascript
assert.equal(calculator.add(2, 3), 5);
assert.equal(calculator.subtract(5, 2), 3);
```

**Code Sample 2: BDD Style Unit Testing**
```javascript
expect(calculator.add(2, 3)).to.equal(5);
expect(calculator.subtract(5, 2)).to.equal(3);
```

The selection of authoring tools should be based on the team's comfort level with the writing style, and the ability to integrate with existing execution frameworks. For similar reasons as the selection of authoring tools, **Chai.js** is recommended. It is well supported, and it would easy to port a solution to another authoring library if ever needed.

## Executing Scripts

Test executors have a server based aspect (like running on a Node.js server), as well as browser based execution. The authoring of a browser executor should be intuitive for developers.

For integrating to a system, it must support command-line execution, and offer outputs that can be fed to a reporting solution.

**Code Sample 3: Mocha Test Executor**
```javascript
describe('Calculator', function() {
  it('should add two numbers', function() {
    expect(calculator.add(2, 3)).to.equal(5);
  });
});
```

For similar reasons as the selection of authoring tools, **Mocha** is recommended. It is well supported, and it would easy to port a solution to another executor if ever needed. Also, it offers the most execution output options of the frameworks considered.

## Reporting Results

Surprisingly, there are not a lot of Off-the-Shelf reporting tools for unit tests (or other automated checks) nor report output formats. There are generally two reporting formats with spotty support: TAP and XUnit. Similarly, for reporting tools, only these three options were found: SonarQube, TestLink, and Smolder.

Both Smolder and TestLink are focused on content management of test specifications, plans, and requirements. SonarQube is focused on code analysis and reporting metrics that may indicate overall product quality. For reporting, if already using one of these tools, it is worth investigating the results of integrating JavaScript unit tests. However, it may be overkill for some teams and may be difficult to migrate to a different future solution if keeping the report history is important.

Since Mocha offers output in both TAP and XUnit, it could be sufficient to build a custom reporting tool that processes these outputs and displays the state of all checks. If the goal is to never leave checks failing, a custom reporter would be a better choice. It would be designed to only display information relevant to the team.

![JavaScript Unit Testing custom reporter interface - overview](/images/JSUT-1.png)

![JavaScript Unit Testing custom reporter interface - detailed view](/images/JSUT-2.png)

![JavaScript Unit Testing custom reporter interface - test execution](/images/JSUT-3.png)

![JavaScript Unit Testing custom reporter interface - configuration](/images/JSUT-4.png) 