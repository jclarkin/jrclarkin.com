import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BlogPostMetadata } from '@/types/blog';

export const metadata: BlogPostMetadata = {
  id: "cast-2014",
  title: "CAST 2014",
  date: "February 25, 2014",
  description: "Exciting news about being selected to present at CAST 2014, the annual Conference for the Association of Software Testing in New York City...",
  route: "/blog/cast-2014"
};

const Cast2014: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">CAST 2014</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">February 25, 2014</span>
          </div>
        </header>

        <div className="space-y-6">
          <p>
            On my first day in my new job, my boss threw out a challenge to me: submit a proposal to CAST for a conference talk I could give. The submission due date was is 42 hours…
          </p>

          <p>
            CAST is the annual Conference for the Association of Software Testing. It does not align with my typical impression of conferences: payed for by industry corporations, presenters with hidden agendas to line their pockets, and a general feeling of a shark-tank with chum. Instead, to me it sounds more like a University type of conference: sessions meant for discussion and growth for both the attendees and the presenter, and not linked directly to profits.
          </p>

          <p>
            So, back to my challenge. I succeeded at selecting a topic of interest to me and outlining enough information that I believe I could grow it into a 40 minute presentation. I wrote up a proposal and emailed it into the cyber-nether.
          </p>

          <p>
            My letter made it to Bernie Berger & Paul Holland, the co-chairs of the conference. And most surprising to me, I have been selected to present this August in New York City!
          </p>

          <p>
            It is a big responsibility, and definitely an honour to have been selected. I have a lot of work ahead for creating an engaging and educational presentation that is worthy of the time of my peers.
          </p>

          <p>
            It will a first for me in many regards: trip to NY, attending a conference in my profession, presenting to a crowd outside of my employer, planning and booking travel to the United States of America, preparing myself for my first encounter with the TSA scanners… :)
          </p>

          <p>
            Wish me luck !
          </p>
        </div>
      </article>
    </div>
  );
};

export default Cast2014; 