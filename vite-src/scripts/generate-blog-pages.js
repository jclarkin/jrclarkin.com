import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Blog post metadata
const blogPosts = [
  {
    id: "peri-mortem",
    title: "Planning For My Departure",
    date: "February 19, 2015",
    description: "I have experienced the departure of many colleagues at Mxi, and each time it has been emotional and stressful. Now it is my turn to leave...",
    route: "/blog/peri-mortem"
  },
  {
    id: "staff-ranking",
    title: "Staff Ranking for Rankled Staff",
    date: "November 27, 2014",
    description: "For over the last decade, I have had managers that practiced stack ranking. It wasn't until after be subjected to the first one that I started to protest the effectiveness of that system...",
    route: "/blog/staff-ranking"
  },
  {
    id: "boltons-new-agile-ecosystem",
    title: "Bolton's New Agile Testing Ecosystem",
    date: "November 4, 2014",
    description: "I often make reference to the Agile Quadrants model to help explain different modes of testing, and how automation is just a part of a larger domain of testing...",
    route: "/blog/boltons-new-agile-ecosystem"
  },
  {
    id: "selenium-workshop",
    title: "Running a Workshop - Lessons Learned",
    date: "October 16, 2014",
    description: "This month I had the opportunity to give a workshop at this year's Targeting Quality conference in Kitchener-Waterloo. I lead my attendees on a quest to empower them with the tools to author Selenium WebDriver scripts...",
    route: "/blog/selenium-workshop"
  },
  {
    id: "running-a-retrospective",
    title: "Running a Retrospective",
    date: "August 15, 2014",
    description: "This month, I ran my first retrospective for a different team at work. I've been participating in retrospectives run by my team mate and have wanted to try my hand at facilitating...",
    route: "/blog/running-a-retrospective"
  },
  {
    id: "recent-reading-agile-test-quadrants",
    title: "Recent Reading - Agile Test Quadrants",
    date: "July 25, 2014",
    description: "A coworker recently shared with me this SlideShare presentation from ThoughtWorks. I had never seen the Agile Testing Quadrants model by Brian Marick...",
    route: "/blog/recent-reading-agile-test-quadrants"
  },
  {
    id: "context-drive-testing-the-awakening",
    title: "Context Drive Testing - The Awakening",
    date: "May 26, 2014",
    description: "It has been a progressive unraveling of my assumptions and understanding of what is the Context Driven movement going on in testing...",
    route: "/blog/context-drive-testing-the-awakening"
  },
  {
    id: "classification-of-software-features",
    title: "Classification of Software Features",
    date: "April 25, 2014",
    description: "I typically hear two categories for software features: internal and external. Occasionally, from the development side, I hear of a third option: deprecated. I am proposing a fourth category...",
    route: "/blog/classification-of-software-features"
  },
  {
    id: "heuristic-for-selecting-a-trainer",
    title: "Heuristic for selecting a Trainer",
    date: "April 14, 2014",
    description: "When looking at a potential coach or teacher, I find myself often using the following criteria to help me make a selection...",
    route: "/blog/heuristic-for-selecting-a-trainer"
  },
  {
    id: "javascript-unit-testing",
    title: "JavaScript Unit Testing",
    date: "April 11, 2014",
    description: "A comprehensive report on JavaScript unit testing tools and techniques, covering authoring checks, executing scripts, and reporting results...",
    route: "/blog/javascript-unit-testing"
  },
  {
    id: "research-session-reporting-outputs-of-automation",
    title: "Research Session - Reporting Outputs of Automation",
    date: "April 1, 2014",
    description: "Investigation into test reporting formats and opportunities to integrate results from different frameworks, focusing on TAP and XUnit protocols...",
    route: "/blog/research-session-reporting-outputs-of-automation"
  },
  {
    id: "research-session-js-ut-experimentation",
    title: "Research Session - JS UT Experimentation",
    date: "March 21, 2014",
    description: "Detailed experimentation with JavaScript unit testing libraries including Chai.js, Mocha, and Jasmine, with recommendations for TDD and BDD approaches...",
    route: "/blog/research-session-js-ut-experimentation"
  },
  {
    id: "research-session-javascript-unit-testing",
    title: "Research Session - Javascript Unit Testing",
    date: "March 12, 2014",
    description: "Initial research into JavaScript unit testing tools, comparing TDD vs BDD approaches and evaluating various libraries and frameworks...",
    route: "/blog/research-session-javascript-unit-testing"
  },
  {
    id: "test-sessions-research-sessions",
    title: "Test Sessions - Research Sessions",
    date: "March 10, 2014",
    description: "Exploring the concept of using test sessions to record research and investigation of testing tools, particularly for JavaScript unit testing...",
    route: "/blog/test-sessions-research-sessions"
  },
  {
    id: "cast-2014",
    title: "CAST 2014",
    date: "February 25, 2014",
    description: "Exciting news about being selected to present at CAST 2014, the annual Conference for the Association of Software Testing in New York City...",
    route: "/blog/cast-2014"
  },
  {
    id: "virtual-and-physical",
    title: "Virtual and Physical",
    date: "February 23, 2014",
    description: "It is time to start learning about virtual machines. Microsoft is kindly offering up free VMs to do browser testing. I find this exciting...",
    route: "/blog/virtual-and-physical"
  },
  {
    id: "informed-failure",
    title: "Week 4 - Informed Failure",
    date: "February 15, 2014",
    description: "I worked on a new tool for Selenium JUnit testing: video recording of test execution. There are some good articles on how to utilize Monte Media Library...",
    route: "/blog/informed-failure"
  },
  {
    id: "gathers-no-moss",
    title: "Week 3 - ... Gathers No Moss",
    date: "February 7, 2014",
    description: "This week the team said farewell to a valuable teacher: Paul Holland. He had joined us for a fixed duration to learn who we are...",
    route: "/blog/gathers-no-moss"
  },
  {
    id: "apis-with-context",
    title: "APIs With Context",
    date: "January 30, 2014",
    description: "This week was spent gaining context on APIs. Questions such as: Who are the consumers of the APIs, What is the minimum viable check we want in place for a single API...",
    route: "/blog/apis-with-context"
  },
  {
    id: "changing-gears",
    title: "Changing Gears: Manual & Automatic",
    date: "January 24, 2014",
    description: "My first week in, and I am being exposed to my team mates' interests. My cube mate has done some great things to make front-end automation tools available to all developers...",
    route: "/blog/changing-gears"
  },
  {
    id: "learning-and-assimilating",
    title: "Learning and Assimilating 'Testing'",
    date: "January 18, 2014",
    description: "I may be new to the testing team at work, but I am no stranger to the culture exposed on the internet. I have long been a reader of many online blogs regarding testing...",
    route: "/blog/learning-and-assimilating"
  },
  {
    id: "adventures-in-test-automation-land",
    title: "Adventures in Test Automation Land",
    date: "January 8, 2014",
    description: "Starting this month, I shall be adopting a new role as a test automation tools developer. What this means is that I will be exploring and analyzing areas for automation...",
    route: "/blog/adventures-in-test-automation-land"
  }
];

// Function to generate HTML for a blog post
function generateBlogPostHTML(post) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="../../favicon.png" />
    <link rel="icon" type="image/x-icon" href="../../favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>${post.title} - Jonathan Clarkin</title>
    <meta name="description" content="${post.description}" />
    <meta name="keywords" content="Jonathan Clarkin, software testing, development, ${post.title.toLowerCase()}" />
    <meta name="author" content="Jonathan Clarkin" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://jrclarkin.com${post.route}" />
    <meta property="og:title" content="${post.title} - Jonathan Clarkin" />
    <meta property="og:description" content="${post.description}" />
    <meta property="og:image" content="https://jrclarkin.com/og-image.png" />
    <meta property="article:published_time" content="${new Date(post.date).toISOString()}" />
    <meta property="article:author" content="Jonathan Clarkin" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://jrclarkin.com${post.route}" />
    <meta property="twitter:title" content="${post.title} - Jonathan Clarkin" />
    <meta property="twitter:description" content="${post.description}" />
    <meta property="twitter:image" content="https://jrclarkin.com/og-image.png" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://jrclarkin.com${post.route}" />
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "${post.title}",
      "description": "${post.description}",
      "author": {
        "@type": "Person",
        "name": "Jonathan Clarkin",
        "url": "https://jrclarkin.com"
      },
      "datePublished": "${new Date(post.date).toISOString()}",
      "url": "https://jrclarkin.com${post.route}",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://jrclarkin.com${post.route}"
      }
    }
    </script>

    <!-- CSS will be injected here during build -->
    <link rel="stylesheet" crossorigin href="../../assets/index-BloSC-H1.css">
    
    <!-- Redirect to SPA after SEO crawlers have read the content -->
    <script>
      // Only redirect if this is a user (not a crawler)
      if (!/bot|crawler|spider|crawling/i.test(navigator.userAgent)) {
        // Small delay to ensure SEO tools can read the content
        setTimeout(() => {
          window.location.href = '/${post.route}';
        }, 100);
      }
    </script>
  </head>
  <body>
    <!-- SEO-friendly content for crawlers -->
    <div id="seo-content">
      <header>
        <h1>${post.title}</h1>
        <p>By Jonathan Clarkin | ${post.date}</p>
      </header>
      <main>
        <article>
          <p>${post.description}</p>
          <p><a href="https://jrclarkin.com${post.route}">Read the full article</a></p>
        </article>
      </main>
      <nav>
        <a href="https://jrclarkin.com/">Home</a> |
        <a href="https://jrclarkin.com/blog">Blog</a> |
        <a href="https://jrclarkin.com/tools">Tools</a>
      </nav>
    </div>
    
    <!-- SPA will load here for users -->
    <div id="root"></div>
    
    <!-- JavaScript will be injected here during build -->
    <script type="module" crossorigin src="../../assets/index-CLxrZNyn.js"></script>
  </body>
</html>`;
}

// Function to generate the main pages HTML
function generatePageHTML(route, title, description) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="../favicon.png" />
    <link rel="icon" type="image/x-icon" href="../favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>${title} - Jonathan Clarkin</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="Jonathan Clarkin, software engineer, developer, ${title.toLowerCase()}" />
    <meta name="author" content="Jonathan Clarkin" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jrclarkin.com${route}" />
    <meta property="og:title" content="${title} - Jonathan Clarkin" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="https://jrclarkin.com/og-image.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://jrclarkin.com${route}" />
    <meta property="twitter:title" content="${title} - Jonathan Clarkin" />
    <meta property="twitter:description" content="${description}" />
    <meta property="twitter:image" content="https://jrclarkin.com/og-image.png" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://jrclarkin.com${route}" />
    
    <!-- CSS will be injected here during build -->
    <link rel="stylesheet" crossorigin href="../assets/index-BloSC-H1.css">
    
    <!-- Redirect to SPA after SEO crawlers have read the content -->
    <script>
      // Only redirect if this is a user (not a crawler)
      if (!/bot|crawler|spider|crawling/i.test(navigator.userAgent)) {
        setTimeout(() => {
          window.location.href = '/${route}';
        }, 100);
      }
    </script>
  </head>
  <body>
    <!-- SEO-friendly content for crawlers -->
    <div id="seo-content">
      <header>
        <h1>${title}</h1>
        <p>Jonathan Clarkin - Software Engineer</p>
      </header>
      <main>
        <p>${description}</p>
        <nav>
          <a href="https://jrclarkin.com/">Home</a> |
          <a href="https://jrclarkin.com/blog">Blog</a> |
          <a href="https://jrclarkin.com/tools">Tools</a>
        </nav>
      </main>
    </div>
    
    <!-- SPA will load here for users -->
    <div id="root"></div>
    
    <!-- JavaScript will be injected here during build -->
    <script type="module" crossorigin src="../assets/index-CLxrZNyn.js"></script>
  </body>
</html>`;
}

// Function to generate enhanced index.html
function generateIndexHTML() {
  const latestPosts = blogPosts.slice(0, 5); // Get 5 most recent posts
  const postsHTML = latestPosts.map(post => 
    `<article>
      <h3><a href="https://jrclarkin.com${post.route}">${post.title}</a></h3>
      <p class="date">${post.date}</p>
      <p>${post.description}</p>
    </article>`
  ).join('\n    ');

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="./favicon.png" />
    <link rel="icon" type="image/x-icon" href="./favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>Jonathan Clarkin - Software Engineer & Technology Leader</title>
    <meta name="description" content="Jonathan Clarkin's personal website. Software engineer passionate about testing, development, and building great products. Explore my blog posts on technology, development practices, and industry insights." />
    <meta name="keywords" content="Jonathan Clarkin, software engineer, developer, software testing, agile development, technology leadership, programming, web development" />
    <meta name="author" content="Jonathan Clarkin" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jrclarkin.com/" />
    <meta property="og:title" content="Jonathan Clarkin - Software Engineer & Technology Leader" />
    <meta property="og:description" content="Software engineer passionate about testing, development, and building great products. Explore my blog posts on technology and development practices." />
    <meta property="og:image" content="https://jrclarkin.com/og-image.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://jrclarkin.com/" />
    <meta property="twitter:title" content="Jonathan Clarkin - Software Engineer & Technology Leader" />
    <meta property="twitter:description" content="Software engineer passionate about testing, development, and building great products." />
    <meta property="twitter:image" content="https://jrclarkin.com/og-image.png" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://jrclarkin.com/" />
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Jonathan Clarkin",
      "url": "https://jrclarkin.com",
      "sameAs": [
        "https://github.com/jclarkin"
      ],
      "jobTitle": "Software Engineer",
      "description": "Software engineer passionate about testing, development, and building great products",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://jrclarkin.com"
      }
    }
    </script>

    <!-- CSS will be injected here during build -->
    <link rel="stylesheet" crossorigin href="./assets/index-BloSC-H1.css">
    
    <!-- Redirect to SPA after SEO crawlers have read the content -->
    <script>
      // Only redirect if this is a user (not a crawler)
      if (!/bot|crawler|spider|crawling/i.test(navigator.userAgent)) {
        // Allow more time for crawlers to read homepage content
        setTimeout(() => {
          window.location.href = '/';
        }, 200);
      }
    </script>
  </head>
  <body>
    <!-- SEO-friendly content for crawlers -->
    <div id="seo-content" style="max-width: 800px; margin: 0 auto; padding: 2rem; font-family: system-ui, sans-serif; line-height: 1.6;">
      <header style="text-align: center; margin-bottom: 3rem;">
        <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem; color: #1a1a1a;">Jonathan Clarkin</h1>
        <p style="font-size: 1.2rem; color: #666; margin-bottom: 1rem;">Software Engineer & Technology Leader</p>
        <p style="color: #888;">Passionate about testing, development, and building great products</p>
      </header>
      
      <main>
        <section style="margin-bottom: 3rem;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">About Me</h2>
          <p>I'm a software engineer with experience in full-stack development, focusing on creating scalable and user-friendly applications. I have a particular passion for software testing, agile methodologies, and development practices that improve code quality and team productivity.</p>
        </section>

        <section style="margin-bottom: 3rem;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">Recent Blog Posts</h2>
          <div style="display: grid; gap: 1.5rem;">
            ${postsHTML}
          </div>
          <p style="margin-top: 2rem;"><a href="https://jrclarkin.com/blog" style="color: #0066cc; text-decoration: none;">View all blog posts →</a></p>
        </section>

        <section>
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">Links</h2>
          <nav style="display: flex; gap: 2rem; flex-wrap: wrap;">
            <a href="https://jrclarkin.com/blog" style="color: #0066cc; text-decoration: none;">Blog</a>
            <a href="https://jrclarkin.com/tools" style="color: #0066cc; text-decoration: none;">Tools</a>
            <a href="https://github.com/jclarkin" style="color: #0066cc; text-decoration: none;">GitHub</a>
          </nav>
        </section>
      </main>
    </div>
    
    <!-- SPA will load here for users -->
    <div id="root"></div>
    
    <!-- JavaScript will be injected here during build -->
    <script type="module" crossorigin src="./assets/index-CLxrZNyn.js"></script>

    <style>
      #seo-content article {
        border: 1px solid #eee;
        padding: 1.5rem;
        border-radius: 8px;
        background: #fafafa;
      }
      #seo-content article h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.1rem;
      }
      #seo-content article h3 a {
        color: #333;
        text-decoration: none;
      }
      #seo-content article h3 a:hover {
        color: #0066cc;
      }
      #seo-content article .date {
        font-size: 0.9rem;
        color: #666;
        margin: 0 0 1rem 0;
      }
      #seo-content article p:last-child {
        margin-bottom: 0;
      }
    </style>
  </body>
</html>`;
}

export function generateBlogPages(distDir) {
  console.log('🔍 Generating SEO-friendly blog pages...');
  
  // Generate enhanced index.html
  const indexHTML = generateIndexHTML();
  fs.writeFileSync(path.join(distDir, 'index.html'), indexHTML);
  console.log('✅ Generated: / (homepage)');
  
  // Create blog directory
  const blogDir = path.join(distDir, 'blog');
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }

  // Generate blog post pages
  blogPosts.forEach(post => {
    const postDir = path.join(blogDir, post.id);
    if (!fs.existsSync(postDir)) {
      fs.mkdirSync(postDir, { recursive: true });
    }
    
    const htmlContent = generateBlogPostHTML(post);
    fs.writeFileSync(path.join(postDir, 'index.html'), htmlContent);
    console.log(`✅ Generated: ${post.route}`);
  });

  // Generate main blog page
  const blogPageContent = generatePageHTML('/blog', 'Blog', 'Thoughts on technology, development, and the industry.');
  fs.writeFileSync(path.join(blogDir, 'index.html'), blogPageContent);
  console.log('✅ Generated: /blog');

  // Generate tools page
  const toolsDir = path.join(distDir, 'tools');
  if (!fs.existsSync(toolsDir)) {
    fs.mkdirSync(toolsDir, { recursive: true });
  }
  const toolsPageContent = generatePageHTML('/tools', 'Tools', 'Useful tools and utilities for development and productivity.');
  fs.writeFileSync(path.join(toolsDir, 'index.html'), toolsPageContent);
  console.log('✅ Generated: /tools');

  console.log('🎉 SEO-friendly pages generated successfully!');
}

// If running directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const distDir = path.join(__dirname, '../dist');
  generateBlogPages(distDir);
} 