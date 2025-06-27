import React from 'react';
import BlogPost from "../BlogPost";
import { BlogPostMetadata } from "@/types/blog";

export const metadata: BlogPostMetadata = {
  id: "learning-and-assimilating",
  title: "Learning and Assimilating 'Testing'",
  date: "January 18, 2014",
  description: "I may be new to the testing team at work, but I am no stranger to the culture exposed on the internet. I have long been a reader of many online blogs regarding testing...",
  route: "/blog/learning-and-assimilating"
};

const LearningAndAssimilating = () => {
  const content = (
    <div className="space-y-6">
      <p>
        I may be new to the testing team at work, but I am no stranger to the culture exposed on the internet. 
        I have long been a reader of many online blogs regarding testing. To name a few of my regular reads:
      </p>
      
      <ul className="list-disc pl-6 space-y-2">
        <li>Keith Klain's Quality Remarks</li>
        <li>James Bach's Satisfice</li>
        <li>Andy Glover's Cartoon Tester</li>
        <li>Scott Barber's Peak Performance (infrequent updates)</li>
        <li>Jonathan Kohl's blog</li>
        <li>Michael Bolton's Develop Sense</li>
        <li>Anne-Marie Charett's Maverick Tester</li>
        <li>Cem Kaner's Blog</li>
      </ul>
      
      <p>
        On top of that, if you watch twitter, it is a hotbed of conversations and battles on the definition 
        of "Testing" and the visionary future of the field.
      </p>
      
      <p>
        I wish I knew where the similar meta-level conversations happen around other aspects of software 
        craftmanship. Most conversations I have spotted are to highlight the latest cool tool or technology. 
        The focus on the long-term sustainability and improvements might not be happening in the recorded 
        public spaces.
      </p>
      
      <p>
        Speaking of culture, I am a partial stranger to the culture of testers at my work. Luckily I often 
        talk to members of the team, but that is different from being fully submerged in the plights and 
        passions of the individuals. Now I shall strive for a deeper empathy.
      </p>
      
      <p>
        I am listening to conversations and asking questions. I hope to be able to contribute meaningfully 
        to my new family.
      </p>
      
      <p>
        I need to give thought to my direction, as there are many roads that can be traveled.
      </p>
    </div>
  );

  return (
    <BlogPost
      title={metadata.title}
      date={metadata.date}
      content={content}
      slug={metadata.id}
    />
  );
};

export default LearningAndAssimilating; 