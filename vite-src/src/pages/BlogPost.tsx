import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface BlogPostProps {
  title: string;
  date: string;
  content: React.ReactNode;
  slug: string;
}

const BlogPost = ({ title, date, content, slug }: BlogPostProps) => {
  const navigate = useNavigate();

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="mb-8"
          >
            ← Back to Blog
          </Button>
          
          <article className="prose prose-lg max-w-none">
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {title}
              </h1>
              <p className="text-muted-foreground">
                Written on {date}
              </p>
            </header>
            
            <div className="text-foreground leading-relaxed">
              {content}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 