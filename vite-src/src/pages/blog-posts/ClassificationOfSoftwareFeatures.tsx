import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BlogPostMetadata } from '@/types/blog';

export const metadata: BlogPostMetadata = {
  id: "classification-of-software-features",
  title: "Classification of Software Features",
  date: "April 25, 2014",
  description: "I typically hear two categories for software features: internal and external. Occasionally, from the development side, I hear of a third option: deprecated. I am proposing a fourth category...",
  route: "/blog/classification-of-software-features"
};

const ClassificationOfSoftwareFeatures: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Classification of Software Features</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">April 25, 2014</span>
          </div>
        </header>

        <div className="space-y-6">
          <p>
            I typically hear two categories for software features: internal and external. Occasionally, from the development side, I hear of a third option: deprecated. I am proposing a fourth category, that I often find in enterprise software that I would call <em>vestigial</em>.
          </p>

          <p>Here are my four categories defined:</p>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>External Feature</strong>: These are solutions for customer needs. They should produce value to the buyers of the software.
            </li>
            <li>
              <strong>Internal Features</strong>: These are solutions for the company that produces the software. They reduce costs of maintaining and improving the software.
            </li>
            <li>
              <strong>Deprecated Features</strong>: These are solutions once targeted internally or externally that are known to no longer produce significant value to keep. The are technical debt that is clearly flagged for removal.
            </li>
            <li>
              <strong>Vestigial Features</strong>: These are a mystery. They likely were once solutions to someone, or at least intended to be so. Their current value is unknown and cannot be flagged for deprecation. They are technical debt with no mitigation strategy.
            </li>
          </ul>

          <p>
            A <em>vestigial feature</em> is like the human appendix: maybe we don't need it anymore, but it remains part of our ecosystem. The tonsils were once vestigial until we learned more about them and determined their value.
          </p>

          <p>
            Does your enterprise software have many vestigial features? We can form a test strategy to determine their original intent, their current uses, and estimate their value.
          </p>
        </div>
      </article>
    </div>
  );
};

export default ClassificationOfSoftwareFeatures; 