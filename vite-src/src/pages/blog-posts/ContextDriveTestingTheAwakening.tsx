import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BlogPostMetadata } from '@/types/blog';

export const metadata: BlogPostMetadata = {
  id: "context-drive-testing-the-awakening",
  title: "Context Drive Testing - The Awakening",
  date: "May 26, 2014",
  description: "It has been a progressive unraveling of my assumptions and understanding of what is the Context Driven movement going on in testing...",
  route: "/blog/context-drive-testing-the-awakening"
};

const ContextDriveTestingTheAwakening: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Context Drive Testing - The Awakening</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">May 26, 2014</span>
          </div>
        </header>

        <div className="space-y-6">
          <p>
            It has been a progressive unraveling of my assumptions and understanding of what is the Context Driven movement going on in testing. When Selena Delesie first arrived at my work to help facilitate our learning of the possibilities a title of "Software Tester" could be, I stood deep in the valley. Now, I am nowhere near the peak of this steep climb up the mountain, but my view is less foggy.
          </p>

          <p>
            Much like the agile movement, the underlying goal is clear: <strong>apply critical thought</strong>. Do not just swap out one process for another, or blindly trust the instructions given to you by a colleague. Your key job as a member of a team is to apply your own opinion + experiences + knowledge + wisdom + subjectivity. You don't have to just a cog in an industrial machine: your unique brain can add value to the team's goals.
          </p>

          <p>On the Twitterverse, I see an ongoing feud between two factions:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>In the red corner: Rex Black and the ISTQB certified community</li>
            <li>In the blue corner: James Bach and the CDT community</li>
          </ul>

          <div className="my-6 text-center">
            <img 
              src="/images/rockem-sockem-robots1.jpg" 
              alt="Rock'em Sock'em Robots - representing the ongoing feud between testing communities"
              className="w-64 h-auto mx-auto rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-600 mt-2 italic">The ongoing battle between different testing philosophies</p>
          </div>

          <p>While researching the Tester schism, I came across this wonderful paper on the Schools of Software Testing by Bret Pettichord:</p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Analytic</strong>: Testing as form of mathematics</li>
            <li><strong>Standards</strong>: Testing should be predictable & repeatable, requiring little skill</li>
            <li><strong>Quality</strong>: Testing adherence to processes and act as gate keepers</li>
            <li><strong>Context-Driven</strong>: Testing as a human activity focused on finding and reporting on risks to value for stakeholders</li>
            <li><strong>Agile</strong>: Testing as an automation-able dev activity to determine story completion and notify of change</li>
          </ul>

          <p>
            For me, having these five schools defined makes the discussion more clear. The ISTQB comes from a Standards and Quality family where there exists Best Practices and repeatable patterns to solve testing challenges. The CDT crew disagree, favouring Heuristics to help perform testing.
          </p>

          <p>
            Before moving on, lets address this question: What is the difference between 'Heuristic' and 'Best Practices' ? The term 'best practice' implies that it is the recommended solution to a problem. It does not come with an asterisk beside it leading to the small-print legalese warning its users that "Your Mileage May Vary". Instead, it sells the bearer a checklist of steps to follow to obtain the 'best results' without heeding the context dependent variables. The term 'heuristic' looks nearly the same: it provides a list of steps or terms to apply to a situation. The key is in the definition of the word: "a technique to solve problems that is not guaranteed to be optimal". There it is! By choosing a different word, the legal small-print needed for "Best Practice" has become the centerpiece of "Heuristic".
          </p>

          <p>
            The CDT intentionally is choosing terminology to break from the mould and put the intelligent individual at the center of "Testing". Much like 'agile' it does not prescribe single solution to rule them all.
          </p>

          <div className="my-6 text-center">
            <img 
              src="/images/l_one_ring_gold_italian.jpg" 
              alt="The One Ring from Lord of the Rings - representing the fallacy of seeking one solution to rule them all"
              className="w-48 h-auto mx-auto rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-600 mt-2 italic">Unlike the One Ring, there is no single testing solution to rule them all</p>
          </div>

          <ul className="list-disc list-inside space-y-2">
            <li>Does that mean there is no room for Analytic School of testing if you follow CDT? Nope! If your context suits mathematical metrics and proofs to decrease risk (and thus increase value), go for it!</li>
            <li>Does that mean there is no room for Agile School of testing? Nope. If devs authoring automated checks adds value to your project, go for it!</li>
          </ul>

          <p>
            Thus, I think both sides of the feud are fighting for the same goals: how to help testers be masters of their craft. Their approaches and terminology differ, let alone their visions of the future state of the craft… We just need to remain empathetic to all sides as that is a great way to learn from each other and to slowly affect change.
          </p>

          <p>
            For me, my vision s that we explorers strive to see past our logical fallacies and cognitive biases. We must <strong>apply critical thought</strong> to our problems and not blindly rely on "time tested best practices".
          </p>

          <p>.. and that is why I choose the label of Context Driven Tester.</p>
        </div>
      </article>
    </div>
  );
};

export default ContextDriveTestingTheAwakening; 