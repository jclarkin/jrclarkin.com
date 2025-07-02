---
title: "Research Session - JS UT Experimentation"
publishDate: 2014-03-21
description: "Detailed experimentation with JavaScript unit testing libraries including Chai.js, Mocha, and Jasmine, with recommendations for TDD and BDD approaches..."
---

**Recommend starting with Chai.js + Mocha, and Sinon.js for mocking when necessary.**

A lot of the test libraries available are similar, so it is hard to go wrong. Chai.js appears to be commonly used and also integrated into larger frameworks. Since Chai is just a test authoring library, there is still need for a tool to execute the tests. For current needs, Mocha has good support and a lot of reporting output options. At this point, the added benefits provided by theintern.io do not add immediate value for me, but transitioning to it from Mocha should not be difficult.

## Further analysis plans

- Look into Test Runner outputs and how they might integrate into JUnit reports

Simplistic examples created during experimentation can be found on Github here.

---

## Session notes below the fold…

**Mission**: Attempt to create JSUT (Javascript Unit Test) using simple libraries

### Charter:

- Create some executable tests using Chai.js
- Follow traditional JUnit TDD patterns rather than BDD
- (added) Explore BDD experiments as well

### Session:

- **Start: March 19, 2014**
- **Experiment:** Attempted to figure out Chai.js
- **Fail:** could not solve how to run the tests
- **Experiment:** Moving on to QUnit to warm my experience
- **Success:** got a simple sample of QUnit tests and runner executing
- **Discovery:** Chai.js does not have a test runner. We need to pick one to execute the chai tests
- **Experiment:** Chai.js with Mocha as the test runner
- **Fail:** Having trouble setting it up.
- **Learn:** Found these cool chai.js plugins that could be useful: helpers for statistics, jquery, http processing, and more
- **Learn:** Found this article to help me out
- **Success:** After much initial confusion, I have successfully authored some simple tests that I can run via HTML in a browser
- **Learn:** Visit from @snocorp has convinced me that it is silly to ignore BDD due to historic corporate aversion to change Increasing the charter to include BDD experimentation
- **Experiment:** Create a BDD version of the chai-mocha tests
- **Fail:** Trouble getting the 'throw' scenario to work… Trying a success and fail case to ensure my understanding…
- **Success:** Added test cases for both throw and not throw to ensure understanding
- **Experiment:** Setup a Jasmine test suite (BDD library and runner combined)
- **Success:**
  - very easy to use
  - nearly identical to the chai-mocha-bdd experiment
- **Learn:** Based on my initial research report, there exists Unit.js
  - I misunderstood it with initial research
  - It is a library that contains the following micro-libraries
  - Mocking via Sinon.js
  - BDD via Must.js + Should.js + Expect.js
  - TDD via Node assert
  - It does not have a Test Runner, but it recommends Mocha as a decent starting point
- **Paused - End of workday**
- **Start: March 20, 2014**
- **Learn:** Audit the "theintern.io" webinar
  - Good presentation
  - An alternate Test Runner to mocha
  - Supports JS tests and Selenium (may require setting up a Selenium Grid to communicate to)
  - Easy integration to Saucelabs (which can work in a secured environment via a secured tunnel)
  - Covered AJAX mocking using AMD and replacing the default map of loaders at Setup, and reverting at teardown
  - Framework built with Dojo
  - Chai for assertions
  - Istanbul for Code coverage
  - Need to research and better understand Test Reports/Outputs
- **Learn:** Attended OttawaJS Meetup
  - Confirmed that my research is on the right tools/libraries/frameworks
  - Was recommended to look into Karma test runner (previously called Testacular)
- **Paused - End of workday**
- **Start: March 21, 2014**
- **Learn:** Karma test runner
  - Looks as good for test running as the alternative so far
  - Has nice automation abilities similar to Grunt
  - Requires Node.js
- **Explain:** Create summary of research
- **Share:** Place learning material into a public repo for others to also learn from it
