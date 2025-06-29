import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BlogPostMetadata } from '@/types/blog';

export const metadata: BlogPostMetadata = {
  id: "peri-mortem",
  title: "Planning For My Departure",
  date: "February 19, 2015",
  description: "I have experienced the departure of many colleagues at Mxi, and each time it has been emotional and stressful. Now it is my turn to leave...",
  route: "/blog/peri-mortem"
};

const PeriMortem: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Planning For My Departure</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">February 19, 2015</span>
          </div>
        </header>

        <div className="space-y-6">
          <p>
            I have experienced the departure of many colleagues at Mxi, and each time it has been emotional and stressful. Now it is my turn to leave. I wanted to minimize that same gut-punch to my friends and team. So, like Tom Sawyer, I was able to attend my own funeral. The weirdest part was that I played the role of meeting coordinator, in discussing the aftermath of my departure.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Agenda</h2>

          <p>
            As with any retrospective or post-mortem, it is important to have a skeleton of the meeting, to set expectations for attendees. Here was our plan:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>What does Jonathan do on the team?</li>
            <li>Which skills or roles will the team need to support?</li>
            <li>If the team is to hire a new member, what depicts this ideal candidate?</li>
            <li>What other stressors are caused by Jonathan's departure, and how can we decrease them?</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Judgement Day</h2>

          <p>
            After some levity about the awkwardness of this meeting, the first activity began. Each team member wrote down the things they believe I had been doing on the team. I was to not participate in this ideation, forcing everyone else to reflect on my visible and invisible roles.
          </p>

          <div className="my-6">
            <img 
              src="/images/PeriMortem-Team.jpg" 
              alt="Team working together on sticky notes during the peri-mortem session"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
            />
          </div>

          <p>
            Once all the sticky-notes were posted on the wall, the team time-boxed 5 minutes to organize, categorize, and remove duplicates.
          </p>

          <div className="my-6">
            <img 
              src="/images/PeriMortem-Ideation.jpg" 
              alt="Ideation sticky notes organized on the wall"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
            />
          </div>

          <p>
            I was then asked to look over the ideas and comment if I saw anything missing. I did not, but was surprised by many of the items listed by my friends. Their perceptions were deeper than mine; they listed hats I had not realized were on my head.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">L33t Skillz</h2>

          <p>
            Our next goal was to pick which skills were most important to the team. We discussed what criteria made a skill "important" to us: was it skills we were going to lose, skills we wanted greater redundancy, or highly valued skills the team wants new members to encompass?
          </p>

          <div className="my-6">
            <img 
              src="/images/PeriMortem-Discussions.jpg" 
              alt="Team discussions about important skills and criteria"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
            />
          </div>

          <p>
            Once that was defined, we moved to dot-voting: 5 each. We immediately removed any skill with less than three dots, so that we could focus on the top priorities.
          </p>

          <div className="my-6">
            <img 
              src="/images/PeriMortem-Skills.jpg" 
              alt="Skills listed on sticky notes with dot voting results"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
            />
          </div>

          <p>The top skills are:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>Eye for software architecture</li>
            <li>Researching and experimentation</li>
            <li>Enjoys software development (SOLID, DRY, etc)</li>
            <li>Positive morale</li>
            <li>Introduces new practices to the team</li>
          </ul>

          <p>
            We iterated on the <em>Morale</em> item as it was vague and difficult to identify in a new hire. We replaced it with <em>Personality</em> focusing on <em>good communicating & teaching</em> and <em>passionate about software craftsmanship</em>
          </p>

          <div className="my-6">
            <img 
              src="/images/PeriMortem-SkillsRefined.jpg" 
              alt="Refined skills list after iteration and discussion"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
            />
          </div>

          <p>
            We discussed if there are people we already knew that might make good additions to the team.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            "If you don't try you have already failed"
          </blockquote>

          <h2 className="text-2xl font-bold mt-8 mb-4">Stressors</h2>

          <p>
            We made a list of any other stresses caused by my leaving. Mostly, they relate to ownership and tribal knowledge, which are problems the team has been trying to aleviate. Each individual in the team is a special unicorn without redundancy protection.
          </p>

          <div className="my-6">
            <img 
              src="/images/PeriMortem-Stressors.jpg" 
              alt="List of stressors caused by departure and potential solutions"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
            />
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>

          <p>
            Armed with these lists, in the open and known to all, it is easier for the team to tackle the problems and to not feel alone during the transition. This team is composed of a great people, and I know they can achieve lofty goals. I hope that this session (as odd as it was for me) helps the team overcome the chaos I have introduced with my departure.
          </p>

          <div className="my-6">
            <img 
              src="/images/PeriMortem-Satir.png" 
              alt="Satir Change Model diagram showing the stages of change"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
            />
          </div>

          <p>
            I would recommend having special meetings whenever faced with a disruptive change to the team dynamic, as a means of coping, communicating, and finding ways back to stability.
          </p>
        </div>
      </article>
    </div>
  );
};

export default PeriMortem; 