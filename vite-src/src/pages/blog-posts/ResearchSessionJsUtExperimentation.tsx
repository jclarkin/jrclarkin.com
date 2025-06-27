import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BlogPostMetadata } from '@/types/blog';

export const metadata: BlogPostMetadata = {
  id: "research-session-js-ut-experimentation",
  title: "Research Session - JS UT Experimentation",
  date: "March 21, 2014",
  description: "Detailed experimentation with JavaScript unit testing libraries including Chai.js, Mocha, and Jasmine, with recommendations for TDD and BDD approaches...",
  route: "/blog/research-session-js-ut-experimentation"
};

const ResearchSessionJsUtExperimentation: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Research Session - JS UT Experimentation</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">March 21, 2014</span>
          </div>
        </header>

        <div className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="font-semibold">
              Recommend starting with Chai.js + Mocha, and Sinon.js for mocking when necessary.
            </p>
          </div>

          <p>
            A lot of the test libraries available are similar, so it is hard to go wrong. Chai.js appears to be commonly used and also integrated into larger frameworks. Since Chai is just a test authoring library, there is still need for a tool to execute the tests. For current needs, Mocha has good support and a lot of reporting output options. At this point, the added benefits provided by theintern.io do not add immediate value for me, but transitioning to it from Mocha should not be difficult.
          </p>

          <div>
            <h3 className="font-semibold mb-2">Further analysis plans</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Look into Test Runner outputs and how they might integrate into JUnit reports</li>
            </ul>
          </div>

          <p>
            Simplistic examples created during experimentation can be found on Github here.
          </p>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-2">Session notes below the fold…</h3>
            
            <div className="space-y-4">
              <div>
                <p><strong>Mission</strong>: Attempt to create JSUT (Javascript Unit Test) using simple libraries</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Charter:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Create some executable tests using Chai.js</li>
                  <li>Follow traditional JUnit TDD patterns rather than BDD</li>
                  <li>(added) Explore BDD experiments as well</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Session:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Start: March 19, 2014</strong></li>
                  <li><strong>Experiment:</strong> Attempted to figure out Chai.js</li>
                  <li><strong>Fail:</strong> could not solve how to run the tests</li>
                  <li><strong>Experiment:</strong> Moving on to QUnit to warm my experience</li>
                  <li><strong>Success:</strong> got a simple sample of QUnit tests and runner executing</li>
                  <li><strong>Discovery:</strong> Chai.js does not have a test runner. We need to pick one to execute the chai tests</li>
                  <li><strong>Experiment:</strong> Chai.js with Mocha as the test runner</li>
                  <li><strong>Fail:</strong> Having trouble setting it up.</li>
                  <li><strong>Learn:</strong> Found these cool chai.js plugins that could be useful: helpers for statistics, jquery, http processing, and more</li>
                  <li><strong>Learn:</strong> Found this article to help me out</li>
                  <li><strong>Success:</strong> After much initial confusion, I have successfully authored some simple tests that I can run via HTML in a browser</li>
                  <li><strong>Learn:</strong> Visit from @snocorp has convinced me that it is silly to ignore BDD due to historic corporate aversion to change Increasing the charter to include BDD experimentation</li>
                  <li><strong>Experiment:</strong> Create a BDD version of the chai-mocha tests</li>
                  <li><strong>Fail:</strong> Trouble getting the 'throw' scenario to work… Trying a success and fail case to ensure my understanding…</li>
                  <li><strong>Success:</strong> Added test cases for both throw and not throw to ensure understanding</li>
                  <li><strong>Experiment:</strong> Setup a Jasmine test suite (BDD library and runner combined)</li>
                  <li><strong>Success:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>very easy to use</li>
                      <li>nearly identical to the chai-mocha-bdd experiment</li>
                    </ul>
                  </li>
                  <li><strong>Learn:</strong> Based on my initial research report, there exists Unit.js
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>I misunderstood it with initial research</li>
                      <li>It is a library that contains the following micro-libraries</li>
                      <li>Mocking via Sinon.js</li>
                      <li>BDD via Must.js + Should.js + Expect.js</li>
                      <li>TDD via Node assert</li>
                      <li>It does not have a Test Runner, but it recommends Mocha as a decent starting point</li>
                    </ul>
                  </li>
                  <li><strong>Paused - End of workday</strong></li>
                  <li><strong>Start: March 20, 2014</strong></li>
                  <li><strong>Learn:</strong> Audit the "theintern.io" webinar
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Good presentation</li>
                      <li>An alternate Test Runner to mocha</li>
                      <li>Supports JS tests and Selenium (may require setting up a Selenium Grid to communicate to)</li>
                      <li>Easy integration to Saucelabs (which can work in a secured environment via a secured tunnel)</li>
                      <li>Covered AJAX mocking using AMD and replacing the default map of loaders at Setup, and reverting at teardown</li>
                      <li>Framework built with Dojo</li>
                      <li>Chai for assertions</li>
                      <li>Istanbul for Code coverage</li>
                      <li>Need to research and better understand Test Reports/Outputs</li>
                    </ul>
                  </li>
                  <li><strong>Learn:</strong> Attended OttawaJS Meetup
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Confirmed that my research is on the right tools/libraries/frameworks</li>
                      <li>Was recommended to look into Karma test runner (previously called Testacular)</li>
                    </ul>
                  </li>
                  <li><strong>Paused - End of workday</strong></li>
                  <li><strong>Start: March 21, 2014</strong></li>
                  <li><strong>Learn:</strong> Karma test runner
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Looks as good for test running as the alternative so far</li>
                      <li>Has nice automation abilities similar to Grunt</li>
                      <li>Requires Node.js</li>
                    </ul>
                  </li>
                  <li><strong>Explain:</strong> Create summary of research</li>
                  <li><strong>Share:</strong> Place learning material into a public repo for others to also learn from it</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ResearchSessionJsUtExperimentation; 