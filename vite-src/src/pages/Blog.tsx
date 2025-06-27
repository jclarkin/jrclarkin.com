import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BlogPostMetadata } from "@/types/blog";

// Import metadata from all blog posts
import { metadata as adventuresInTestAutomationLand } from "./blog-posts/AdventuresInTestAutomationLand";
import { metadata as learningAndAssimilating } from "./blog-posts/LearningAndAssimilating";
import { metadata as changingGears } from "./blog-posts/ChangingGears";
import { metadata as apisWithContext } from "./blog-posts/ApisWithContext";
import { metadata as gathersNoMoss } from "./blog-posts/GathersNoMoss";
import { metadata as informedFailure } from "./blog-posts/InformedFailure";
import { metadata as virtualAndPhysical } from "./blog-posts/VirtualAndPhysical";
import { metadata as cast2014 } from "./blog-posts/Cast2014";
import { metadata as testSessionsResearchSessions } from "./blog-posts/TestSessionsResearchSessions";
import { metadata as researchSessionJavascriptUnitTesting } from "./blog-posts/ResearchSessionJavascriptUnitTesting";
import { metadata as researchSessionJsUtExperimentation } from "./blog-posts/ResearchSessionJsUtExperimentation";
import { metadata as researchSessionReportingOutputsOfAutomation } from "./blog-posts/ResearchSessionReportingOutputsOfAutomation";
import { metadata as javascriptUnitTesting } from "./blog-posts/JavascriptUnitTesting";
import { metadata as heuristicForSelectingATrainer } from "./blog-posts/HeuristicForSelectingATrainer";
import { metadata as classificationOfSoftwareFeatures } from "./blog-posts/ClassificationOfSoftwareFeatures";
import { metadata as contextDriveTestingTheAwakening } from "./blog-posts/ContextDriveTestingTheAwakening";
import { metadata as recentReadingAgileTestQuadrants } from "./blog-posts/RecentReadingAgileTestQuadrants";
import { metadata as runningARetrospective } from "./blog-posts/RunningARetrospective";
import { metadata as seleniumWorkshop } from "./blog-posts/SeleniumWorkshop";
import { metadata as boltonsNewAgileEcosystem } from "./blog-posts/BoltonsNewAgileEcosystem";
import { metadata as staffRanking } from "./blog-posts/StaffRanking";
import { metadata as periMortem } from "./blog-posts/PeriMortem";

// Combine all blog post metadata
const blogPosts: BlogPostMetadata[] = [
  periMortem,
  staffRanking,
  boltonsNewAgileEcosystem,
  seleniumWorkshop,
  runningARetrospective,
  recentReadingAgileTestQuadrants,
  contextDriveTestingTheAwakening,
  classificationOfSoftwareFeatures,
  heuristicForSelectingATrainer,
  javascriptUnitTesting,
  researchSessionReportingOutputsOfAutomation,
  researchSessionJsUtExperimentation,
  researchSessionJavascriptUnitTesting,
  testSessionsResearchSessions,
  cast2014,
  virtualAndPhysical,
  informedFailure,
  gathersNoMoss,
  apisWithContext,
  changingGears,
  learningAndAssimilating,
  adventuresInTestAutomationLand
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on technology, development, and the industry.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {post.description}
                  </p>
                  <Button 
                    onClick={() => navigate(post.route)}
                    className="w-full"
                  >
                    Read Full Post
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 