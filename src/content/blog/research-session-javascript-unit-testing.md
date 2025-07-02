---
title: "Research Session - Javascript Unit Testing"
publishDate: 2014-03-12
description: "Initial research into JavaScript unit testing tools, comparing TDD vs BDD approaches and evaluating various libraries and frameworks..."
---

## Report Summary:

- Much like the rest of the Javascript ecosystem, there are a lot of options for any given problem and not a lot of community consensus
- There are two aspects of JS testing needing to be addressed: tools to test (libraries) and tools to report results (test runners)
- When selecting libraries, there are two style choices: TDD (Test Driven Development) vs. BDD (Behaviour Driven Development)
- Historically, our company has been more comfortable with TDD
- Chai.js is a TDD library that looks like a good place to begin learning and experimenting with test authoring
- Still not sure of pros/cons between test runners
- Further analysis plans

**Mission**: To determine and select tools for Javascript test scripting

## Charter:

- Google search for tool options
- Explore theintern.io (mentioned by an awesome colleague)
- Compare QUnit vs. Jasmine (previous knowledge)

## Recording of Session:

- Found this StackOverflow post with a large list of tools. Looks a bit out of date, but is a good start.
- Jasmine supports BDD. Comes with equivalent ideas to Hamcrest Matchers. Our dev team has not yet successfully assimilated BDD, so this is not a strong incentive for adoption.
- QUnit site has some good material on refactoring code to become scriptable. Pretty execution display as an HTML file. Not seeing the big picture on how this would work in a CI environment.
- If we are just looking for a library to make assertions easier (like JUnit) then bare-bones might be the best.
- Chai.js seems like a lightweight assertion library. Worth consideration for initial practice authoring testable code.
- BrowserSwarm is very cool. But it is a commercial offering of TestSwarm. TestSwarm is also cool. A tool where any device can register to the swarm to execute JS test files. The project does not look highly active…. Is this due to it being fairly stable or that people have found a different path?
- This brings a key question to light: test execution and reporting methods. This is really going to be the key to valuable tests…
- On to touch base with Wiki list of JS Test frameworks
- To further explore: Unit.js, Mocha, Sinon.js
- Unit.js looks similar to Chai.js and Jasmine.
- Mocha.js is not a library, but a framework. It runs on Node, and is popular amongst the OttawaJS presenters last year. Uses 4 libraries to offer Asserts and BDD notation in test cases (should.js, expect.js, chai.js, & better-assert). Comes with classic JUnit style before/after/beforeEach/afterEach. Pretty reporting to the console, or a variety of formats (TAP, JSON, CLI, HTML, XUnit, …).
- Sinon.js is a library in the vein of Mockito. Looks handy… but too advanced for our current needs. Keep in mind if mocking topic comes up.
- Onto look into theintern.io, from Dave. He sent a webinar for March 20th (I've signed up). Now on to exploring the site/examples.
- Listened to the recent Hanselminutes podcast on Javascript UT. Focused on explaining Jasmine, and BDD. Was interesting and pointed out that there are add-ons for Jasmine to tackle specific JS things (like jQuery and ajax).
