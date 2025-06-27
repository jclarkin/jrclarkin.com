import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BlogPostMetadata } from '@/types/blog';

export const metadata: BlogPostMetadata = {
  id: "recent-reading-agile-test-quadrants",
  title: "Recent Reading - Agile Test Quadrants",
  date: "July 25, 2014",
  description: "A coworker recently shared with me this SlideShare presentation from ThoughtWorks. I had never seen the Agile Testing Quadrants model by Brian Marick...",
  route: "/blog/recent-reading-agile-test-quadrants"
};

const RecentReadingAgileTestQuadrants: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Recent Reading - Agile Test Quadrants</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">July 25, 2014</span>
          </div>
        </header>

        <div className="space-y-6">
          <p>
            A coworker recently shared with me this SlideShare presentation from ThoughtWorks.
          </p>

          <p>
            I had never seen the Agile Testing Quadrants model by Brian Marick, but I believe it will be useful in helping me communicate types of testing to the teams. There is currently an attitude forming that "We can test everything via automation. Programmers can test it all, with more code" which is fallacious, but change takes time. I am hoping that exposing people to different models and ideas will help accelerate understanding my perspective on the value of sapient testing.
          </p>

          <p>Here is the diagram I am referencing</p>

          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-gray-600 font-medium">Agile Testing Quadrants Model</p>
          </div>

          <p>
            I now have a new book added to my To Do list: <em>Agile Testing: A Practical Guide for Testers and Agile Teams</em>
          </p>

          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-gray-600 font-medium">Agile Testing Book</p>
          </div>

          <p>
            Hopefully it will add even more tools to my belt for both testing software, and teaching about testing to developers.
          </p>
        </div>
      </article>
    </div>
  );
};

export default RecentReadingAgileTestQuadrants; 