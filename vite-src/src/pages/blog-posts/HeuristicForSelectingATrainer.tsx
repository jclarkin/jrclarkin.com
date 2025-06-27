import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BlogPostMetadata } from '@/types/blog';

export const metadata: BlogPostMetadata = {
  id: "heuristic-for-selecting-a-trainer",
  title: "Heuristic for selecting a Trainer",
  date: "April 14, 2014",
  description: "When looking at a potential coach or teacher, I find myself often using the following criteria to help me make a selection...",
  route: "/blog/heuristic-for-selecting-a-trainer"
};

const HeuristicForSelectingATrainer: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Heuristic for selecting a Trainer</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">April 14, 2014</span>
          </div>
        </header>

        <div className="space-y-6">
          <p>
            When looking at a potential coach or teacher, I find myself often using the following criteria to help me make a selection.
          </p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Openness</strong>: Do they expose their ideas and opinions in public forums? Do they allow discourse and feedback on their material, or is it a one-way channel?
            </li>
            <li>
              <strong>Prior Art</strong>: Research material authored by the coach: articles, blog posts, videos, code, tweets, publications. Are ideas clearly expressed and compatible to your mode of learning?
            </li>
            <li>
              <strong>Bias</strong>: Do they present multiple facets to ideas? Is there personal incentive for endorsing one idea over another?
            </li>
            <li>
              <strong>Interpersonal</strong>: The "Play nice with others" factor. How to they behave in a group? Do they foster relationships and enable growth? Do they advocate for peers in their profession?
            </li>
            <li>
              <strong>Referral</strong>: Use your network of both people you know or online personas you respect and see if any of them approve or refer to the trainer or their material.
            </li>
            <li>
              <strong>Experience</strong>: Review the individual's listed skills, credentials, and experience. Can you trust them to bring authentic information that you believe applies to your needs?
            </li>
          </ul>

          <p>
            This is not a comprehensive lists (all models are flawed). What questions do you ask yourself when evaluating potential mentors, coaches, trainers, or teachers?
          </p>
        </div>
      </article>
    </div>
  );
};

export default HeuristicForSelectingATrainer; 