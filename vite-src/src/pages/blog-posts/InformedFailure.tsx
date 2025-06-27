import React from 'react';
import BlogPost from "../BlogPost";
import { BlogPostMetadata } from "@/types/blog";

export const metadata: BlogPostMetadata = {
  id: "informed-failure",
  title: "Week 4 - Informed Failure",
  date: "February 15, 2014",
  description: "I worked on a new tool for Selenium JUnit testing: video recording of test execution. There are some good articles on how to utilize Monte Media Library...",
  route: "/blog/informed-failure"
};

const InformedFailure = () => {
  const content = (
    <div className="space-y-6">
      <p>
        I worked on a new tool for Selenium JUnit testing: video recording of test execution. There are some 
        good articles on how to utilize Monte Media Library for Java to add recording to your code. However, 
        I did not see anything that took advantage of JUnit 4 functionality, such as Rules. Therefore, I have 
        married the two together into a custom rule that lets you specify on which TestResult conditions to 
        record a video: Success, Failure, or Error.
      </p>
      
      <p>
        The goal of this tool is to make it faster to diagnose why a check has failed. The sooner information 
        is provided to a stakeholder, the greater the value. I am guessing that check failure is either an 
        indication of broken value in the product, or broken checking. Having videos to compare against a 
        known working state will be handy.
      </p>
      
      <p>
        I imagine this may be useful for other Selenium users, so here is the gist:
      </p>
      
      <p>
        <a 
          href="https://gist.github.com/jclarkin/5fe969ce98d4890c89dc" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          https://gist.github.com/jclarkin/5fe969ce98d4890c89dc
        </a>
      </p>
      
      <p>
        Thanks goes to Monte Media Library and Road to Automation for the tools to solve my problem.
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

export default InformedFailure; 