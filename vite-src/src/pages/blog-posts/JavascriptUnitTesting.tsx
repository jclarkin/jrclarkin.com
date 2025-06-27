import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BlogPostMetadata } from '@/types/blog';

export const metadata: BlogPostMetadata = {
  id: "javascript-unit-testing",
  title: "JavaScript Unit Testing",
  date: "April 11, 2014",
  description: "A comprehensive report on JavaScript unit testing tools and techniques, covering authoring checks, executing scripts, and reporting results...",
  route: "/blog/javascript-unit-testing"
};

const JavascriptUnitTesting: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">JavaScript Unit Testing</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">April 11, 2014</span>
          </div>
          <p className="text-gray-600 italic">
            Note: The recommendations I make in this report are specific to the contextual needs of my current team. Your mileage may vary 😊
          </p>
        </header>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p>
              The goal of this research was to determine tools and techniques to empower developers in unit testing JavaScript applications. The research discovered that there are three distinct aspects of JS unit testing:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Authoring checks: the means of writing the unit tests</li>
              <li>Executing scripts: the frameworks that execute the checks</li>
              <li>Reporting: displaying the execution results in a consistent and valued format</li>
            </ul>
            <p className="mt-2">
              For authoring, the recommendation is to use the Chai.js library and to write checks in a behaviour driven development (BDD) format. For execution, the recommendation is to use Mocha as it has the most versatility to integrate into an existing Continuous Integration (CI) system. For reporting, the recommendation is to either use SonarQube if looking for tracking history and other code quality metrics, or to create a custom reporter that suits the team's needs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Authoring Checks</h2>
            <p>
              As is typical in the JavaScript world, given any one need there exists many similar libraries and frameworks to solve the problem. This remains true for unit test helpers. To further conflate selection, some libraries offer both authorship and execution in a single framework (see Table 1).
            </p>
            <p className="mt-2">
              The largest dichotomy between library selections is the supported writing style: do you want checks to be written as asserts (typically labelled at TDD for Test Driven Development) or as describing behaviour (BDD). Assertions are the more traditional pattern (see Code 1), but behavioural is more readable enabling increased visibility of risk to Product Owners and Business Analysts (see Code 2).
            </p>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-600 mb-2">Code Sample 1: TDD Style Unit Testing</p>
              <pre className="text-sm bg-white p-2 rounded border">
{`assert.equal(calculator.add(2, 3), 5);
assert.equal(calculator.subtract(5, 2), 3);`}
              </pre>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-600 mb-2">Code Sample 2: BDD Style Unit Testing</p>
              <pre className="text-sm bg-white p-2 rounded border">
{`expect(calculator.add(2, 3)).to.equal(5);
expect(calculator.subtract(5, 2)).to.equal(3);`}
              </pre>
            </div>
            <p>
              The selection of authoring tools should be based on the team's comfort level with the writing style, and the ability to integrate with existing execution frameworks. For similar reasons as the selection of authoring tools, <strong>Chai.js</strong> is recommended. It is well supported, and it would easy to port a solution to another authoring library if ever needed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Executing Scripts</h2>
            <p>
              Test executors have a server based aspect (like running on a Node.js server), as well as browser based execution. The authoring of a browser executor should be intuitive for developers (see Code 3).
            </p>
            <p className="mt-2">
              For integrating to a system, it must support command-line execution, and offer outputs that can be fed to a reporting solution.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-600 mb-2">Code Sample 3: Mocha Test Executor</p>
              <pre className="text-sm bg-white p-2 rounded border">
{`describe('Calculator', function() {
  it('should add two numbers', function() {
    expect(calculator.add(2, 3)).to.equal(5);
  });
});`}
              </pre>
            </div>
            <p>
              For similar reasons as the selection of authoring tools, <strong>Mocha</strong> is recommended. It is well supported, and it would easy to port a solution to another executor if ever needed. Also, it offers the most execution output options of the frameworks considered.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Reporting Results</h2>
            <p>
              Surprisingly, there are not a lot of Off-the-Shelf reporting tools for unit tests (or other automated checks) nor report output formats. There are generally two reporting formats with spotty support: TAP and XUnit. Similarly, for reporting tools, only these three options were found: SonarQube, TestLink, and Smolder.
            </p>
            <p className="mt-2">
              Both Smolder and TestLink are focused on content management of test specifications, plans, and requirements. SonarQube is focused on code analysis and reporting metrics that may indicate overall product quality. For reporting, if already using one of these tools, it is worth investigating the results of integrating JavaScript unit tests. However, it may be overkill for some teams and may be difficult to migrate to a different future solution if keeping the report history is important.
            </p>
            <p className="mt-2">
              Since Mocha offers output in both TAP and XUnit, it could be sufficient to build a custom reporting tool that processes these outputs and displays the state of all checks. If the goal is to never leave checks failing, a custom reporter would be a better choice. It would be designed to only display information relevant to the team (see Image 1).
            </p>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <p className="text-sm text-gray-600 mb-2">Image 1: Custom Domain-based Unit Test Reporter</p>
              <div className="bg-white p-4 rounded border text-center">
                <p className="text-gray-500">[Custom dashboard showing test results organized by domain/feature]</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default JavascriptUnitTesting; 