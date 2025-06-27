import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BlogPostMetadata } from '@/types/blog';

export const metadata: BlogPostMetadata = {
  id: "staff-ranking",
  title: "Staff Ranking for Rankled Staff",
  date: "November 27, 2014",
  description: "For over the last decade, I have had managers that practiced stack ranking. It wasn't until after be subjected to the first one that I started to protest the effectiveness of that system...",
  route: "/blog/staff-ranking"
};

const StaffRanking: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Staff Ranking for Rankled Staff</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">November 27, 2014</span>
          </div>
        </header>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold mt-8 mb-4">What is Stack Ranking</h2>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            The leadership construct whereby a workforce is graded in accordance with the individual productivity of its members: a "20-70-10" system. The "top 20" percent of the workforce is most productive, and 70% work adequately. The other 10% are nonproducers and should be fired.
            <br />
            <span className="text-sm">— Wikipedia (ref)</span>
          </blockquote>

          <h2 className="text-2xl font-bold mt-8 mb-4">My Experience</h2>

          <p>
            For over the last decade, I have had managers that practiced stack ranking. It wasn't until after be subjected to the first one that I started to protest the effectiveness of that system. Years later, and I am still drawing attention that it exists in my workplace and questioning what we hope to get out of it.
          </p>

          <p>Here is a recent conversation with a departmental manager:</p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            <strong>Me</strong>: Other companies are getting rid of stack ranking. Here are some articles.
            <br /><br />
            <strong>Manager</strong>: Why do you think we're doing stack ranking…? That's not us.
            <br /><br />
            <strong>Me</strong>: Our department ranks everyone - with quotas - into performance buckets: <em>Great</em>, <em>Okay</em>, & <em>Subpar</em>
            <br /><br />
            <strong>Manager</strong>: We do not have quotas per rank!
            <br /><br />
            <strong>Me</strong>: So, everyone can be rated the same? We could all get "Great" ?
            <br /><br />
            <strong>Manager</strong>: No…
            <br /><br />
            <strong>Me</strong>: …
            <br /><br />
            <strong>Manager</strong>: …
            <br /><br />
            <strong>Me</strong>: … Damn, now I see it… We are heavily stack ranked! :-(
          </blockquote>

          <h2 className="text-2xl font-bold mt-8 mb-4">Industry-Leader Trends</h2>

          <p>
            My immediate superior gathered some statistics on the ranking systems of some of the most prolific tech companies, their quota percentages, and termination dates.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Company</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Great</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Good</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Okay</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Meh</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Subpar</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Termination</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Ford</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">10</td>
                  <td className="border border-gray-300 px-4 py-2 text-center"></td>
                  <td className="border border-gray-300 px-4 py-2 text-center">80</td>
                  <td className="border border-gray-300 px-4 py-2 text-center"></td>
                  <td className="border border-gray-300 px-4 py-2 text-center">10</td>
                  <td className="border border-gray-300 px-4 py-2">Abandoned for managers and engineers amid class action lawsuits</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">GE</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">20</td>
                  <td className="border border-gray-300 px-4 py-2 text-center"></td>
                  <td className="border border-gray-300 px-4 py-2 text-center">70</td>
                  <td className="border border-gray-300 px-4 py-2 text-center"></td>
                  <td className="border border-gray-300 px-4 py-2 text-center">10</td>
                  <td className="border border-gray-300 px-4 py-2">De-emphasized with more emphasis on team building</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Microsoft</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">20</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">20</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">40</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">13</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">7</td>
                  <td className="border border-gray-300 px-4 py-2">Abandoned in 2013. Was widely unpopular</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Yahoo</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">10</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">35</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">50</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">5</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">0</td>
                  <td className="border border-gray-300 px-4 py-2">Relatively new. Recently altered to have 45% in top two categories</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">GlaxoKlineSmith</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">25</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">25</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">25</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">25</td>
                  <td className="border border-gray-300 px-4 py-2 text-center"></td>
                  <td className="border border-gray-300 px-4 py-2">Four Buckets: Top is 25%, no fixed quota for others</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Adobe</td>
                  <td className="border border-gray-300 px-4 py-2 text-center"></td>
                  <td className="border border-gray-300 px-4 py-2 text-center"></td>
                  <td className="border border-gray-300 px-4 py-2 text-center"></td>
                  <td className="border border-gray-300 px-4 py-2 text-center"></td>
                  <td className="border border-gray-300 px-4 py-2 text-center"></td>
                  <td className="border border-gray-300 px-4 py-2">Abandoned in 2012</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Google</td>
                  <td className="border border-gray-300 px-4 py-2 text-center"></td>
                  <td className="border border-gray-300 px-4 py-2 text-center"></td>
                  <td className="border border-gray-300 px-4 py-2 text-center"></td>
                  <td className="border border-gray-300 px-4 py-2 text-center"></td>
                  <td className="border border-gray-300 px-4 py-2 text-center"></td>
                  <td className="border border-gray-300 px-4 py-2">No forced curves or mandatory repurcussions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Reasoning</h2>

          <p>Time for some quotes from these reviewed companies.</p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            "We abolished stack ranking and annual performance reviews in March 2012. We now use Check In – a system that fits with Adobe's corporate culture of collaboration and creativity."
            <br />
            <span className="text-sm">— Adobe (ref)</span>
          </blockquote>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            Corporate America has largely lost confidence in management programs that jam employees onto bell curves
            <br />
            <span className="text-sm">— Microsoft (ref)</span>
          </blockquote>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            Stack ranking is an incentive system that rewards the wrong behavior.
            <br />
            <span className="text-sm">— Forbes about Yahoo (ref)</span>
          </blockquote>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            According to research by Stevenson's organization, just 14 percent of companies surveyed in 2011 reported that their performance evaluations included a 'forced ranking,' down from 49 percent in 2009.
            <br /><br />
            Companies also have realized how demotivating the process can be. Good performers just below the top tier get complacent, knowing that, even if they try harder, they won't get rewarded unless someone at the top messes up. Meanwhile, managers who've created a truly outstanding group of folks get penalized. "What happens if you're working with a superstar team?" asks management adviser Marcus Buckingham. "You've just forced a distribution that doesn't exist. You create this stupid world where great people are punished.
            <br />
            <span className="text-sm">— Washington Post (ref)</span>
          </blockquote>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            "We came to a fairly quick decision that we would abolish the performance review, which meant we would no longer have a one-time-of-the-year formal written review," says Morris. "What's more, we would abolish performance rankings and levels in order to move away from people feeling like they were labeled."
            <br />
            <span className="text-sm">— Adobe (ref)</span>
          </blockquote>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            The review is about justifying the numbers rather than having a constructive conversation.
            <br />
            <span className="text-sm">— iDoneThis (ref)</span>
          </blockquote>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            Stack-ranking (or similar systems) are suitable for ranking sales personnel among whom the management wishes to foster a spirit of competition, but less suitable for engineers, among whom management may want to encourage closer collaboration.
            <br />
            <span className="text-sm">— Wikipedia (ref)</span>
          </blockquote>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Opposite View</h2>

          <p>
            Forbes has a good analysis on the value of ranking employees (ref). They discuss how having a small delta between the lowest and highest ranked employee is the valuable metric. They point out how the knowledge gained from measuring can be beneficial in directing resources to help bolster the bottom. They also point out that high performers can be discouraged in a culture of tolerating low performance, and either move on or slack off.
          </p>

          <p>
            The Forbes article hints at a need for clear buy-in from employees and transparency in the evaluation criteria.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Future</h2>

          <p>
            There is a fine balance between following a formulaic process to maximize effectivity of resources versus creating a corporate culture that fosters its members to achieve their maximum potential. There is room in the ecosystem of businesses for both paths to be followed, as we watch Darwinism select which will evolve and prosper. With greater awareness of corporate cultures and market viability for job switching, employees can choose which type of employer they want to work for.
          </p>

          <p>
            My preference is for a workplace that emphasizes the 'Human' in Human Resources, and where a team can both succeed or fail as a collective of high-functioning dependent peers. Given a choice: I choose against stack ranking. I am happy that this is the year my employer is finally willing to give up this particular practice.
          </p>
        </div>
      </article>
    </div>
  );
};

export default StaffRanking; 