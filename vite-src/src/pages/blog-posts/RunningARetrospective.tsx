import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { BlogPostMetadata } from '@/types/blog';

export const metadata: BlogPostMetadata = {
  id: "running-a-retrospective",
  title: "Running a Retrospective",
  date: "August 15, 2014",
  description: "This month, I ran my first retrospective for a different team at work. I've been participating in retrospectives run by my team mate and have wanted to try my hand at facilitating...",
  route: "/blog/running-a-retrospective"
};

const RunningARetrospective: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Running a Retrospective</h1>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">August 15, 2014</span>
          </div>
        </header>

        <div className="space-y-6">
          <p>
            This month, I ran my first retrospective for a different team at work. I've been participating in retrospectives run by my team mate and have wanted to try my hand at facilitating. When a different team approached me to host theirs, I was thrilled at the opportunity.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Preparation</h2>

          <p>
            I was made aware that this team had been having retrospectives… but they were more similar to a status meeting than to a voyage of discovery and improvement. A week before the event, I went to talk to the gang to witness their environment and see their interactions. I posed whether they had any working agreements, and soon discovered that most members were shy when asked to share their opinions aloud to the group. They were most comfortable ideating in private and collaborating only as necessary. This information helped me tailor which activities would be least disruptive for their retrospective.
          </p>

          <p>
            I proceeded to review the content of my two go-to books about retrospectives:
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><em>Agile Retrospectives: Making Good Teams Great</em></li>
            <li><em>Gamestorming: A Playbook for Innovators, Rulebreakers, and Changemakers</em></li>
          </ul>

          <p>
            I selected a series of activities to get people talking, and to progress from individual contributions towards team decisions. With my outline in-hand, I was nervous but ready for the event.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Event</h2>

          <p>
            I got to my room a half hour before the event. This gave me time to prep the room: move chairs to well distributed pattern, write the Agile Prime Directive on the whiteboard, get pens and cue cards out, display the agenda, and have poster board ready for categorization.
          </p>

          <p>
            In standard corporate fashion, the team trickled in fashionably late (first 5 minutes). From there, I began facilitating the retrospective.
          </p>

          <p>
            We began with "Set the Stage". I recited the prime directive:
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            "Regardless of what we discover, we understand and truly believe that everyone did the best job they could, given what they knew at the time, their skills and abilities, the resources available, and the situation at hand." –Norm Kerth
          </blockquote>

          <p>
            I thanked everyone for willingly participating in the event, then we went over the agenda so that we all had a rough idea of the meeting's pacing. Knowing that the crowd would not be forthcoming with opinions and participation, we started with a 1-2 Word Checkin activity as warm up. I was happy that we completed the circle with minimal protest.
          </p>

          <p>
            Keeping everyone comfortable in their chairs, the "Gather Data" stage began with the "Four L's" activity. Each person acts as an individual contributor, reflecting on the sprint, and categorizing their experiences as Liked, Learned, Lacked, r Longed For. During and after the 15 minutes, people were to place their sticky notes onto the appropriate 4 poster boards.
          </p>

          <p>
            Thus we segued into a team activity: split into two groups and each group was to consolidate & summarize the data in 2 Ls (Liked and Lacked, or Learned and Longed For). Two presenters from each group were selected to share their discoveries with the team aloud.
          </p>

          <p>
            In the "Decide What to Do" phase, we moved to an activity that got everyone physically out of their seats and moving about: Dot Voting on the found themes each person deemed most important. With all votes tallied, it was easy to spot the top 4 themes for further investigation. I requested people to pair off with a team mate that they had not worked with for the Ls activity. Each pair was assigned a theme for further brainstorming, on potential next actions. Once again, a member was requested to present their discoveries to the whole team. Members of the team chose to champion an item, to be followed up within the next sprint.
          </p>

          <p>
            With the team aware of <em>Who</em> would do <em>What</em> by <em>When</em>, we moved onto "Closing" activities. I thanked the team again for their participation, and requested that they leave me feedback on how the retrospective went. I handed out the sticky notes and pens, told them to leave the mess as is in the room for me to clean up, and exited so that they could converse in private.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Aftermath</h2>

          <p>
            After about 10 minutes, they emerged looking energetic and ready to tackle new problems. I was happy to see that effect. I had not realized the anterior affect of retrospectives; they are not just an opportunity to find ways to improve efficiency, but act as a team building event to strengthen communication pathways and working relationships.
          </p>

          <p>
            I returned to the room to put away the markers, stickers, and pens, to clean up the whiteboards and used stickies, and to reset the room to the state it had been prior to the fun we all just had. I looked over the feedback the team had left for me, and although it lacked any constructive criticism, it was filled with comments of people having a positive experience!
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Next Steps</h2>

          <p>
            I learned a lot from facilitating a retrospective, and already have been asked to facilitate for other teams. I plan on trying out different activities, and will come prepared to record the data as the activities occur. I also plan on trying to keep that new-team energy flowing after the retrospective and into their next tasks. I feel that is a hard challenge when you are not part of the team and thus not involved with the time directly after the meeting.
          </p>

          <p>
            Having seen the event from the another perspective has given me greater appreciation of the benefits to retrospectives. I will now look forward to both participating in and facilitating these events in the months to come.
          </p>
        </div>
      </article>
    </div>
  );
};

export default RunningARetrospective; 