import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BlogPostMetadata } from '@/types/blog';

export const metadata: BlogPostMetadata = {
  id: "research-session-reporting-outputs-of-automation",
  title: "Research Session - Reporting Outputs of Automation",
  date: "April 1, 2014",
  description: "Investigation into test reporting formats and opportunities to integrate results from different frameworks, focusing on TAP and XUnit protocols...",
  route: "/blog/research-session-reporting-outputs-of-automation"
};

const ResearchSessionReportingOutputsOfAutomation: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Research Session - Reporting Outputs of Automation</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">April 1, 2014</span>
          </div>
        </header>

        <div className="space-y-6">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p>
              There is an underwhelming quantity of test reporting options. The protocols for integration are few (XUnit and TAP) and the few tools that I found are not focused on reporting.
            </p>
            <p className="mt-2">
              If adopting a reporting tool, I would recommend using SonarQube. If using this tool, then the report output best supported is XUnit.
            </p>
            <p className="mt-2">
              An alternative approach would be to build a custom reporting tool and dashboard, that reflects the team's Domain Model and surfaces only relevant information.
            </p>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-2">Session notes below the fold…</h3>
            
            <div className="space-y-4">
              <div>
                <p><strong>Mission</strong>: Look into UT reporting formats and opportunities to integrate results from different frameworks</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Charter:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Research outputs from Mocha test runner</li>
                  <li>Research outputs from JUnit</li>
                  <li>Find commonalities for producing a single report</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Session:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Start: March 24, 2014</strong></li>
                  <li><strong>Learn:</strong> Read about the many default outputs of Mocha
                    <p className="ml-4 mt-1">The key options appear to be TAP, JSON, DOC/HTML, XUnit</p>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>JSON output is clean, but not a defined spec to exist in other tools</li>
                      <li>DOC/HTML: Functional for reporting, but not integratable with other tools</li>
                      <li>TAP (Test Anything Protocol): Cool, this one is a spec and meant to allow cross-communication</li>
                      <li>XUnit: The Mocha website does not offer any documentation on what this is… Needs further investigation</li>
                    </ul>
                  </li>
                  <li><strong>Learn:</strong> XUnit. Looks like this Mocha option is the same as the default output from JUnit
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Ownership of this spec is not clear. May be Apache, may be Surefire…</li>
                      <li>Looks like a good starting point if only Mocha and JUnit reports need to be integrated</li>
                    </ul>
                  </li>
                  <li><strong>Learn:</strong> What TAP options are there
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>A Java TAP Producer exists for JUnit and TestNG called tap4j</li>
                      <li>Good slides on TAP and trying to integrate small suites into a single reporting solution</li>
                      <li>Potential integration platforms: Sonar, TestLink, Smolder</li>
                    </ul>
                  </li>
                  <li><strong>Test Reporters</strong>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li><strong>Sonar:</strong> Most polished of the 3 options. Provides more than just script report execution, but also code coverage, code quality evaluation, and more. Doesn't seem to support TAP</li>
                      <li><strong>TestLink:</strong> Focused on being a CMS (Content Management System) for test cases and scenarios, with support for uploading script reports</li>
                      <li><strong>Smolder:</strong> Similar to TestLink, but with less documentation. Looks more user-friendly, but has less support</li>
                    </ul>
                  </li>
                  <li><strong>Read article</strong> "Why Don't You use TAP?"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ResearchSessionReportingOutputsOfAutomation; 