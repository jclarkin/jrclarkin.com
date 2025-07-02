---
title: "Research Session - Reporting Outputs of Automation"
publishDate: 2014-04-01
description: "Investigation into test reporting formats and opportunities to integrate results from different frameworks, focusing on TAP and XUnit protocols..."
---

There is an underwhelming quantity of test reporting options. The protocols for integration are few (XUnit and TAP) and the few tools that I found are not focused on reporting.

If adopting a reporting tool, I would recommend using SonarQube. If using this tool, then the report output best supported is XUnit.

An alternative approach would be to build a custom reporting tool and dashboard, that reflects the team's Domain Model and surfaces only relevant information.

---

## Session notes below the fold…

**Mission**: Look into UT reporting formats and opportunities to integrate results from different frameworks

### Charter:

- Research outputs from Mocha test runner
- Research outputs from JUnit
- Find commonalities for producing a single report

### Session:

- **Start: March 24, 2014**
- **Learn:** Read about the many default outputs of Mocha
  
  The key options appear to be TAP, JSON, DOC/HTML, XUnit
  - JSON output is clean, but not a defined spec to exist in other tools
  - DOC/HTML: Functional for reporting, but not integratable with other tools
  - TAP (Test Anything Protocol): Cool, this one is a spec and meant to allow cross-communication
  - XUnit: The Mocha website does not offer any documentation on what this is… Needs further investigation

- **Learn:** XUnit. Looks like this Mocha option is the same as the default output from JUnit
  - Ownership of this spec is not clear. May be Apache, may be Surefire…
  - Looks like a good starting point if only Mocha and JUnit reports need to be integrated

- **Learn:** What TAP options are there
  - A Java TAP Producer exists for JUnit and TestNG called tap4j
  - Good slides on TAP and trying to integrate small suites into a single reporting solution
  - Potential integration platforms: Sonar, TestLink, Smolder

- **Test Reporters**
  - **Sonar:** Most polished of the 3 options. Provides more than just script report execution, but also code coverage, code quality evaluation, and more. Doesn't seem to support TAP
  - **TestLink:** Focused on being a CMS (Content Management System) for test cases and scenarios, with support for uploading script reports
  - **Smolder:** Similar to TestLink, but with less documentation. Looks more user-friendly, but has less support

- **Read article** "Why Don't You use TAP?"
