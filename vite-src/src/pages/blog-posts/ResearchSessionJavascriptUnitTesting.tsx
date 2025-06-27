import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BlogPostMetadata } from '@/types/blog';

export const metadata: BlogPostMetadata = {
  id: "research-session-javascript-unit-testing",
  title: "Research Session - Javascript Unit Testing",
  date: "March 12, 2014",
  description: "Initial research into JavaScript unit testing tools, comparing TDD vs BDD approaches and evaluating various libraries and frameworks...",
  route: "/blog/research-session-javascript-unit-testing"
};

const ResearchSessionJavascriptUnitTesting: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Research Session - Javascript Unit Testing</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">March 12, 2014</span>
          </div>
        </header>

        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Report Summary:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Much like the rest of the Javascript ecosystem, there are a lot of options for any given problem and not a lot of community consensus</li>
              <li>There are two aspects of JS testing needing to be addressed: tools to test (libraries) and tools to report results (test runners)</li>
              <li>When selecting libraries, there are two style choices: TDD (Test Driven Development) vs. BDD (Behaviour Driven Development)</li>
              <li>Historically, our company has been more comfortable with TDD</li>
              <li>Chai.js is a TDD library that looks like a good place to begin learning and experimenting with test authoring</li>
              <li>Still not sure of pros/cons between test runners</li>
              <li>Further analysis plans</li>
            </ul>
          </div>

          <p>
            <strong>Mission</strong>: To determine and select tools for Javascript test scripting
          </p>

          <div>
            <h3 className="font-semibold mb-2">Charter:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Google search for tool options</li>
              <li>Explore theintern.io (mentioned by an awesome colleague)</li>
              <li>Compare QUnit vs. Jasmine (previous knowledge)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Recording of Session:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Found this StackOverflow post with a large list of tools. Looks a bit out of date, but is a good start.</li>
              <li>Jasmine supports BDD. Comes with equivalent ideas to Hamcrest Matchers. Our dev team has not yet successfully assimilated BDD, so this is not a strong incentive for adoption.</li>
              <li>QUnit site has some good material on refactoring code to become scriptable. Pretty execution display as an HTML file. Not seeing the big picture on how this would work in a CI environment.</li>
              <li>If we are just looking for a library to make assertions easier (like JUnit) then bare-bones might be the best.</li>
              <li>Chai.js seems like a lightweight assertion library. Worth consideration for initial practice authoring testable code.</li>
              <li>BrowserSwarm is very cool. But it is a commercial offering of TestSwarm. TestSwarm is also cool. A tool where any device can register to the swarm to execute JS test files. The project does not look highly active…. Is this due to it being fairly stable or that people have found a different path?</li>
              <li>This brings a key question to light: test execution and reporting methods. This is really going to be the key to valuable tests…</li>
              <li>On to touch base with Wiki list of JS Test frameworks</li>
              <li>To further explore: Unit.js, Mocha, Sinon.js</li>
              <li>Unit.js looks similar to Chai.js and Jasmine.</li>
              <li>Mocha.js is not a library, but a framework. It runs on Node, and is popular amongst the OttawaJS presenters last year. Uses 4 libraries to offer Asserts and BDD notation in test cases (should.js, expect.js, chai.js, & better-assert). Comes with classic JUnit style before/after/beforeEach/afterEach. Pretty reporting to the console, or a variety of formats (TAP, JSON, CLI, HTML, XUnit, …).</li>
              <li>Sinon.js is a library in the vein of Mockito. Looks handy… but too advanced for our current needs. Keep in mind if mocking topic comes up.</li>
              <li>Onto look into theintern.io, from Dave. He sent a webinar for March 20th (I've signed up). Now on to exploring the site/examples.</li>
              <li>Listened to the recent Hanselminutes podcast on Javascript UT. Focused on explaining Jasmine, and BDD. Was interesting and pointed out that there are add-ons for Jasmine to tackle specific JS things (like jQuery and ajax).</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ResearchSessionJavascriptUnitTesting; 