import React from 'react';
import BlogPost from "../BlogPost";
import { BlogPostMetadata } from "@/types/blog";

export const metadata: BlogPostMetadata = {
  id: "gathers-no-moss",
  title: "Week 3 - ... Gathers No Moss",
  date: "February 7, 2014",
  description: "This week the team said farewell to a valuable teacher: Paul Holland. He had joined us for a fixed duration to learn who we are...",
  route: "/blog/gathers-no-moss"
};

const GathersNoMoss = () => {
  const content = (
    <div className="space-y-6">
      <p>
        This week the team said farewell to a valuable teacher: Paul Holland. He had joined us for 
        a fixed duration to learn who we are, and to share his knowledge and experience with us.
      </p>
      
      <p>
        Paul brought a wealth of knowledge about testing and quality assurance. He shared insights 
        about different testing methodologies, tools, and best practices. His presence was invaluable 
        in helping us improve our testing processes and understanding.
      </p>
      
      <p>
        As we move forward without Paul, we'll need to continue building on the foundation he helped 
        us establish. The knowledge he shared will continue to influence our approach to testing and 
        quality assurance.
      </p>
      
      <p>
        We're grateful for the time Paul spent with us and the knowledge he shared. His contributions 
        will have a lasting impact on our team and our approach to testing.
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

export default GathersNoMoss; 