import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { SOCIAL_URLS } from "@/lib/constants";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Jonathan Clarkin
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Welcome to my personal website. I'm a software engineer passionate about building great products and experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
              <CardDescription>
                Learn more about my background and experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                I'm a software engineer with experience in full-stack development, 
                focusing on creating scalable and user-friendly applications.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open(SOCIAL_URLS.LINKEDIN, '_blank')}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tools</CardTitle>
              <CardDescription>
                Useful tools and utilities I've built
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Development tools, productivity utilities, and helpful resources 
                that I've created to solve common problems.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/tools')}
              >
                Explore Tools
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Blog</CardTitle>
              <CardDescription>
                Thoughts on technology and development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Technical articles, industry insights, and lessons learned 
                from my experience in software development.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate('/blog')}
              >
                Read Blog
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>
                Get in touch to discuss opportunities or collaborations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                I'm always interested in new opportunities and collaborations. 
                Feel free to reach out if you'd like to connect.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open(SOCIAL_URLS.LINKEDIN, '_blank')}
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
              <CardDescription>
                Helpful resources and recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Books, tools, and resources that have helped me grow 
                as a developer and engineer.
              </p>
              <Button variant="outline" className="w-full">
                Browse Resources
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index; 