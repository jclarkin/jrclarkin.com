import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BlogPostMetadata } from '@/types/blog';

export const metadata: BlogPostMetadata = {
  id: "selenium-workshop",
  title: "Running a Workshop - Lessons Learned",
  date: "October 16, 2014",
  description: "This month I had the opportunity to give a workshop at this year's Targeting Quality conference in Kitchener-Waterloo. I lead my attendees on a quest to empower them with the tools to author Selenium WebDriver scripts...",
  route: "/blog/selenium-workshop"
};

const SeleniumWorkshop: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Running a Workshop - Lessons Learned</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">October 16, 2014</span>
          </div>
        </header>

        <div className="space-y-6">
          <p>
            This month I had the opportunity to give a workshop at this year's Targeting Quality conference in Kitchener-Waterloo. I lead my attendees on a quest to empower them with the tools to author Selenium WebDriver scripts. My slide deck is available here.
          </p>

          <p>
            It was my first time leading a class outside of my workplace, and thus was both scary and exciting. Here is a list of some of my lessons learned:
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Mental Preparation</h2>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Rehearsal</strong>: The more you rehearse your material, the less nervous you will be repeating it to a new crowd. Also, the more you have the content memorized, the less you need to read a script. The less scripted it feels, the more natural you will come across as knowledgeable about your material.
            </li>
            <li>
              <strong>Rest</strong>: Set aside a full night's rest, even if you may have trouble using it due to anxiety
            </li>
            <li>
              <strong>Location</strong>: Get access to the location before your presentation. Get acquainted with your workshop environment, setup your material, and test out the hardware connections before attendees arrive.
            </li>
            <li>
              <strong>Hydration</strong>: Have water ready for yourself. All that talking and moving can lead to dehydration.
            </li>
            <li>
              <strong>Worst Case</strong>: Answer this question: What is the worst thing that can happen if your workshop is a flop? You will still be alive, and able to learn from your experience. And in time you will be able to be even more successful. By envisioning the worst case scenario, you will see that it is not 'the end of the world, and hopefully you will be less worried about failure.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Material Preparation</h2>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Hardware Setup</strong>: if you have special room considerations, ensure that they are ready before the workshop. For example, if your attendees are to bring their laptops, ensure that they will have access to power outlets during the workshop.
            </li>
            <li>
              <strong>Software Setup</strong>: if you have special software that participants will need, try to get attendees setup before the start of the workshop. Software installation and configuration on X disparate machines can easily eat up time, and is not effective for the class as a whole. Virtualize / Pre-can drag-and-drop software / USB Key download as much as possible.
            </li>
            <li>
              <strong>Presentation Doc</strong>: For a presentation, the slide deck need not be comprehensive as you expect the audience to take away the experience from your oration. However, for a workshop, the attendees will likely want a copy of the slides to use as future crib-sheets to re-visit and even relearn the material covered during the workshop. This means that you will need to provide more thorough and standalone content to best enable their future success
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">People Preparation</h2>

          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Contact</strong>: Some attendees may have follow-up questions or comments. Have a way for them to contact you (email address, twitter, social media). If and when they do ask questions, get back to them in a timely fashion.
            </li>
            <li>
              <strong>Passion</strong>: Attendees can sense your emotional state on a topic. Try to stick to a topic you really care about, and enjoy. Your passion for it will show through your interactions, your desire to learn more on the topic, and your wanting to share your discoveries with others.
            </li>
            <li>
              <strong>Improv</strong>: Practice handling tough questions. Odds are someone will ask something you do not have an answer to. Be prepared for this, and don't freeze. It is okay to not know everything! Ask the audience for answers, offer to get back to them with an answer at a later date, or point them in a reasonable direction to finding more information.
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default SeleniumWorkshop; 