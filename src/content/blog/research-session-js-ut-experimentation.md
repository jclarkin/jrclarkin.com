---
title: "JavaScript Unit Testing Framework Evaluation"
publishDate: 2014-03-21
description: "Comprehensive evaluation of JavaScript unit testing frameworks including Chai.js, Mocha, Jasmine, and QUnit with practical recommendations for team adoption."
keywords: "JavaScript unit testing, Chai.js, Mocha, Jasmine, QUnit, test frameworks, TDD, BDD, Sinon.js, testing tools"
---

**Bottom line**: Start with Chai.js + Mocha, add Sinon.js for mocking when needed.

After extensive experimentation with JavaScript testing frameworks, the landscape offers many solid options. Chai.js stands out for its widespread adoption and integration capabilities. Since Chai handles assertions but not test execution, Mocha provides excellent test running with extensive reporting options.

## Key Findings

**Framework Similarities**: Most testing libraries share core concepts, making it difficult to choose poorly. The real differences emerge in community support, integration capabilities, and developer experience.

**Chai + Mocha Combination**: 
- Chai's assertion library integrates well with larger frameworks
- Mocha offers comprehensive reporting outputs
- Together they provide flexibility for both TDD and BDD approaches

**Future Considerations**: Tools like theintern.io show promise but don't add immediate value for basic unit testing needs. The good news: transitioning from Mocha shouldn't be difficult when more advanced features become necessary.

## Next Investigation Areas

- Test runner output formats and JUnit report integration
- Continuous integration workflow optimization
- Code coverage reporting integration

*Detailed session notes and examples available in the project repository.*

---

## Rough Session Notes

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
- **Learn:** Visit from Dave Sewell has convinced me that it is silly to ignore BDD due to historic corporate aversion to change Increasing the charter to include BDD experimentation
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
