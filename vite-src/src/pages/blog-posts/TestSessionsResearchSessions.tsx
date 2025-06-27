import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BlogPostMetadata } from '@/types/blog';

export const metadata: BlogPostMetadata = {
  id: "test-sessions-research-sessions",
  title: "Test Sessions - Research Sessions",
  date: "March 10, 2014",
  description: "Exploring the concept of using test sessions to record research and investigation of testing tools, particularly for JavaScript unit testing...",
  route: "/blog/test-sessions-research-sessions"
};

const TestSessionsResearchSessions: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Test Sessions - Research Sessions</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">March 10, 2014</span>
          </div>
        </header>

        <div className="space-y-6">
          <p>
            My responsibilities include researching and investigating tools to help others test software. I was recently asked to investigate options for helping developers author Unit Tests for Javascript applications.
          </p>

          <p>
            While thinking about performing the investigation, it came to me that I was testing something: a domain of knowledge. And what is a good tool to record such testing? Test Sessions!
          </p>

          <p>
            So, I am experimenting with this idea. I gave thought to my mission, wrote up an initial charter of exploration ideas, and have begun recording my path through the internet and contacts to learn more on Javascript unit testing. Once I wrap it up, I will likely have more charters to explore and can try my hand at my first test report to hand back to the person requesting this information :)
          </p>
        </div>
      </article>
    </div>
  );
};

export default TestSessionsResearchSessions; 