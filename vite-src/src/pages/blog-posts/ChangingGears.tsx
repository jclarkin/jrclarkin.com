import React from 'react';
import BlogPost from "../BlogPost";
import { BlogPostMetadata } from "@/types/blog";

export const metadata: BlogPostMetadata = {
  id: "changing-gears",
  title: "Changing Gears: Manual & Automatic",
  date: "January 24, 2014",
  description: "My first week in, and I am being exposed to my team mates' interests. My cube mate has done some great things to make front-end automation tools available to all developers...",
  route: "/blog/changing-gears"
};

const ChangingGears = () => {
  const content = (
    <div className="space-y-6">
      <p>
        My first week in, and I am being exposed to my team mates' interests. My cube mate has done 
        some great things to make front-end automation tools available to all developers. He has created 
        a framework that allows developers to easily write automated tests for their front-end code.
      </p>
      
      <p>
        I am learning about the different approaches to testing. There are manual tests, where a human 
        tester goes through the application step by step, and there are automated tests, where a computer 
        program runs through the application automatically.
      </p>
      
      <p>
        Manual testing is great for exploratory testing and finding unexpected bugs, but it can be time-consuming 
        and repetitive. Automated testing is great for regression testing and ensuring that existing functionality 
        still works after changes, but it requires upfront investment in writing the tests.
      </p>
      
      <p>
        I am looking forward to learning more about both approaches and finding the right balance for different 
        situations.
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

export default ChangingGears; 