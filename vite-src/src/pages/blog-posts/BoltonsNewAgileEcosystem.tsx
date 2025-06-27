import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BlogPostMetadata } from '@/types/blog';

export const metadata: BlogPostMetadata = {
  id: "boltons-new-agile-ecosystem",
  title: "Bolton's New Agile Testing Ecosystem",
  date: "November 4, 2014",
  description: "I often make reference to the Agile Quadrants model to help explain different modes of testing, and how automation is just a part of a larger domain of testing...",
  route: "/blog/boltons-new-agile-ecosystem"
};

const BoltonsNewAgileEcosystem: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Bolton's New Agile Testing Ecosystem</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">November 4, 2014</span>
          </div>
        </header>

        <div className="space-y-6">
          <p>
            I often make reference to the Agile Quadrants model to help explain different modes of testing, and how automation is just a part of a larger domain of testing.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            "Essentially, all models are wrong, but some are useful"
            <br />
            <span className="text-sm">— George E. P. Box</span>
          </blockquote>

          <p>
            So, seeing that Michael Bolton had a recent presentation at this year's EuroSTAR conference on revisiting that model piqued my interest.
          </p>

          <p>Firstly, a new definition is given for Testing and Tester as follows:</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Act of Testing</h2>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            To <em>test</em> is to evaluate a product by learning about it through exploration and experimentation.
          </blockquote>

          <p>
            I really like this definition: it is simple, clean, and clear. It is not prescriptive on means to achieve "testing" and thus can be applied to each of the schools of testing.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Role of Tester</h2>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            A <em>tester's role</em> is to develop themselves as a tester, connect with clients of testing, prepare for testing, perform testing, and report results of testing.
          </blockquote>

          <p>
            I agree with the message here, but feel that there is room to improve the message…
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            "… connect with clients of testing…"
          </blockquote>

          <p>
            That applies to all roles, if you switch out the last word. " clients of development" in software, or "clients of dresses" for fashion. Does it add clarity or value to the role's definition? The same concern applies for the next items in the sentence. In true mathematical fashion, it could be reborn as such:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            <em>f(x)</em> = " A <em>x</em>'s role is to develop themselves as a <em>x</em>, to connect with clients of <em>x</em>, prepare and perform <em>x</em>, and provide outputs of doing <em>x</em>."
            <br />
            <span className="text-sm">Given: <em>x</em> is a professional role. E.g. "Shoe Maker", "Software Tester", "Insurer".</span>
          </blockquote>

          <p>
            Is it just that all job roles fundamentally are similar when looked at from high enough? Is there salient differences specific to software testing that are of value to elucidate in creating a different definition of the role?
          </p>

          <p>
            Based on the ideas expressed verbally in the presentation, the list of skills for the tester role show the nuances and intesting aspects of the role: awareness of mental heuristics (that help and hinder), ideation, risk evaluation, researching, modelling, reporting, communicating, … and many more. Bolton also expresses that there are a set of tasks and skills that he feels do not belong under the tester role: quality policing and quality improving.
          </p>

          <p>
            I am not sure on what would make for a better role definition, and will need to think further on this topic.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Roles are not Prisons</h2>

          <p>
            Excellent advice with easy to grasp analogies. The reasoning provided here well align with agile methods.
          </p>

          <p>
            Can members of agile teams can do multiple roles? Yes, and there remains value in specializations, so that individuals can become more efficient and proficient at a few roles.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Quadrants Revisited</h2>

          <p>
            Bolton points out that having <em>Manual</em> vs. <em>Automated</em> in the quadrants is disingenuous. Testing is a human activity, while automation is just a tool that can be used to facilitate testing. Testing is not two composed of two flavors; all testing is manual, even reading reports from automation and making rational choices on what to do with the information it provides.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            "We don't think of a developer using a compiler as doing automated programming." - M. Bolton
          </blockquote>

          <p>From there, he lists the cycle of agile development (though, like all theories, reality is less procedural):</p>

          <ul className="list-disc list-inside space-y-2">
            <li><em>Discover</em>: Something worth building</li>
            <li><em>Build</em>: Some of it</li>
            <li><em>Refactor</em>: To enable future change</li>
            <li><em>Study</em>: The current "end result"</li>
            <li>… <em>Repeat</em> !</li>
          </ul>

          <p>
            He makes many interesting observations about the role of testing, and the multifaceted job of a tester within this cycle, pointing out some key polarities:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Analyzing vs. creating the product</li>
            <li>Trading value to customer vs. cost to develop</li>
            <li>Focusing on the success vs. risks to the product</li>
          </ul>

          <p>
            That last point is raised as a central character difference between the tester and developer role; the builder mindset focuses on the paths to success while the tester mindset is focused on finding risks.
          </p>

          <p>
            As always, I am impressed by the level of healthy dialogue, introspection, and retrospection in the testing community helping drive itself forward. Willingness to challenge past conclusions and exposing ideas for community reflection is a key tenet of the scientific method.
          </p>

          <p>Keep being awesome.</p>
        </div>
      </article>
    </div>
  );
};

export default BoltonsNewAgileEcosystem; 