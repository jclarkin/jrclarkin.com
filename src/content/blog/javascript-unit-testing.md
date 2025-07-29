---
title: "Overwhelmed by JavaScript testing frameworks"
description: "Every framework tried to solve everything at once. I learned to break it down into three separate problems: writing tests, running them, and making sense of the results."
publishDate: 2014-04-11
author: "Jonathan Clarkin"
---

I was frustrated with JavaScript testing. Every time I tried to set up unit tests, I'd get lost in the maze of frameworks and libraries. Should I use QUnit? Jasmine? Mocha? What about assertions - should I write them as traditional asserts or in that newer BDD style? And then there was the reporting - how do you actually see the results in a way that makes sense?

*Looking for current JavaScript testing recommendations? I've written a [comprehensive guide](/guides/javascript-unit-testing-guide) that covers how the landscape has evolved with Jest and modern practices.*

The problem was that JavaScript testing felt like three separate problems that all needed solving at once. You had to figure out how to write the tests, how to run them, and how to make sense of the results. Most frameworks tried to solve all three, but none of them did it particularly well.

I decided to break it down. Instead of looking for one tool to do everything, I'd find the best tool for each job. For writing tests, I chose Chai.js because it supports both traditional assertions and the more readable BDD style. The BDD style was a revelation - instead of writing "assert.equal(result, 5)" you could write "expect(result).to.equal(5)". It was more readable, especially for non-technical people who needed to understand what the tests were checking.

The choice came down to this: Chai.js supported both TDD and BDD styles, was well-supported online, and most importantly, tests written with it could easily be ported to another library if needed. It followed the single responsibility principle - it just did assertions, and it did them well.

For running the tests, I went with Mocha. It didn't try to do everything - it just focused on executing tests efficiently. It worked in both Node.js and browsers, which was important since we were testing both server-side and client-side code. Most importantly, it could output results in formats that our continuous integration system could understand.

The reporting was the trickiest part. There weren't many off-the-shelf reporting tools for unit tests. The main formats were TAP and XUnit, and the main tools were SonarQube, TestLink, and Smolder. But SonarQube was overkill for most teams, and TestLink and Smolder were focused on test specifications rather than results.

We ended up building a custom reporter that showed exactly what we cared about - which tests were failing, which were passing, and how long everything took to run. It was simple, but it worked.

## The testing landscape

The choice between TDD and BDD styles was a big decision. Traditional TDD uses assertions like `assert.equal(result, 5)`, while BDD uses more readable syntax like `expect(result).to.equal(5)`. The BDD style was more accessible to non-technical stakeholders.

**TDD Style Unit Testing:**
```javascript
test("Expecting class icon-main to exist", function() {
    chai.assert.ok(htmlObj.html().indexOf("icon-main") > 0);
});

test("Expecting class fa for Font-Awesome to exist", function() {
    chai.assert.ok(htmlObj.html().indexOf("fa") > 0);
});
```

**BDD Style Unit Testing:**
```javascript
it("should contain the class 'icon-main'", function() {
    expect(html).to.contain("icon-main");
});

it("should contain the class 'fa' for Font-Awesome", function() {
    expect(html).to.contain("fa");
});
```

For running tests, Mocha provided the flexibility we needed. It worked in both Node.js and browsers, and could output results in formats our CI system could understand.

**Mocha Test Executor:**
```javascript
describe('#buildMenuItem(interface)', function() {
    describe('-simple scenarios', function() {
        var data = {
            'name': 'Research Fault',
            'url': '#',
            'category': 'Line Technician',
            'icon': 'book'
        };
        var html = buildMenuItem(data).html();
        
        it("should contain the class 'icon-main'", function() {
            expect(html).to.contain("icon-main");
        });
        
        it("should contain the class 'fa' for Font-Awesome", function() {
            expect(html).to.contain("fa");
        });
    });
});
```

## The custom reporter solution

Since existing reporting tools were either overkill or focused on the wrong things, we built our own custom reporter. It showed exactly what we cared about - which tests were failing, which were passing, and how long everything took to run.

![Custom Domain-based Unit Test Reporter](/images/JSUT-4.png)

## Conclusions

What I learned is that JavaScript testing doesn't have to be overwhelming. By separating the concerns - writing, running, and reporting - you can choose the right tool for each job. Sometimes the best solution isn't one framework that does everything, but a combination of tools that each do their job well.

Testing frameworks are like any other tool - they work best when they have a clear, focused purpose. Trying to find one tool to solve all your testing problems usually leads to compromise. But when you pick the right tool for each specific need, the whole system becomes more effective and easier to maintain. 