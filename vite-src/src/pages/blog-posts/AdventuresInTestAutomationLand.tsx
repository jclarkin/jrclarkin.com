import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';

export const metadata = {
  id: "adventures-in-test-automation-land",
  title: "Adventures in Test Automation Land",
  date: "January 8, 2014",
  description: "Starting this month, I shall be adopting a new role as a test automation tools developer. What this means is that I will be exploring and analyzing areas for automation...",
  route: "/blog/adventures-in-test-automation-land"
};

const AdventuresInTestAutomationLand: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Adventures in Test Automation Land</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">January 8, 2014</span>
          </div>
        </header>

        <div className="space-y-6">
          <p>
            Starting this month, I shall be adopting a new role as a test automation tools developer. What this means is that I will be exploring and analyzing areas for automation, and then building tools to help others automate their testing.
          </p>

          <p>
            I am excited about this opportunity. I have been interested in testing for a while now, and have been reading blogs and articles about testing practices. I am looking forward to learning more about the tools and techniques used in test automation.
          </p>

          <p>
            I will be working with a team of experienced testers and developers, and I am looking forward to learning from them. I will also be attending conferences and workshops to learn more about the latest trends in test automation.
          </p>

          <p>
            I will be blogging about my experiences and learnings as I go along. I hope to share insights and tips that might be helpful to others who are also interested in test automation.
          </p>

          <p>
            Stay tuned for more updates!
          </p>
        </div>
      </article>
    </div>
  );
};

export default AdventuresInTestAutomationLand; 