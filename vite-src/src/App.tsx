import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Tools from "./pages/Tools";
import Blog from "./pages/Blog";
import AdventuresInTestAutomationLand from "./pages/blog-posts/AdventuresInTestAutomationLand";
import LearningAndAssimilating from "./pages/blog-posts/LearningAndAssimilating";
import ChangingGears from "./pages/blog-posts/ChangingGears";
import ApisWithContext from "./pages/blog-posts/ApisWithContext";
import GathersNoMoss from "./pages/blog-posts/GathersNoMoss";
import InformedFailure from "./pages/blog-posts/InformedFailure";
import VirtualAndPhysical from "./pages/blog-posts/VirtualAndPhysical";
import Cast2014 from "./pages/blog-posts/Cast2014";
import TestSessionsResearchSessions from "./pages/blog-posts/TestSessionsResearchSessions";
import ResearchSessionJavascriptUnitTesting from "./pages/blog-posts/ResearchSessionJavascriptUnitTesting";
import ResearchSessionJsUtExperimentation from "./pages/blog-posts/ResearchSessionJsUtExperimentation";
import ResearchSessionReportingOutputsOfAutomation from "./pages/blog-posts/ResearchSessionReportingOutputsOfAutomation";
import JavascriptUnitTesting from "./pages/blog-posts/JavascriptUnitTesting";
import HeuristicForSelectingATrainer from "./pages/blog-posts/HeuristicForSelectingATrainer";
import ClassificationOfSoftwareFeatures from "./pages/blog-posts/ClassificationOfSoftwareFeatures";
import ContextDriveTestingTheAwakening from "./pages/blog-posts/ContextDriveTestingTheAwakening";
import RecentReadingAgileTestQuadrants from "./pages/blog-posts/RecentReadingAgileTestQuadrants";
import RunningARetrospective from "./pages/blog-posts/RunningARetrospective";
import SeleniumWorkshop from "./pages/blog-posts/SeleniumWorkshop";
import BoltonsNewAgileEcosystem from "./pages/blog-posts/BoltonsNewAgileEcosystem";
import StaffRanking from "./pages/blog-posts/StaffRanking";
import PeriMortem from "./pages/blog-posts/PeriMortem";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* Redirect old blog post URLs to new /blog/ paths */}
            <Route path="/adventures-in-test-automation-land" element={<Navigate to="/blog/adventures-in-test-automation-land" replace />} />
            <Route path="/apis-with-context" element={<Navigate to="/blog/apis-with-context" replace />} />
            <Route path="/boltons-new-agile-ecosystem" element={<Navigate to="/blog/boltons-new-agile-ecosystem" replace />} />
            <Route path="/cast-2014" element={<Navigate to="/blog/cast-2014" replace />} />
            <Route path="/changing-gears" element={<Navigate to="/blog/changing-gears" replace />} />
            <Route path="/classification-of-software-features" element={<Navigate to="/blog/classification-of-software-features" replace />} />
            <Route path="/context-drive-testing-the-awakening" element={<Navigate to="/blog/context-drive-testing-the-awakening" replace />} />
            <Route path="/gathers-no-moss" element={<Navigate to="/blog/gathers-no-moss" replace />} />
            <Route path="/heuristic-for-selecting-a-trainer" element={<Navigate to="/blog/heuristic-for-selecting-a-trainer" replace />} />
            <Route path="/informed-failure" element={<Navigate to="/blog/informed-failure" replace />} />
            <Route path="/javascript-unit-testing" element={<Navigate to="/blog/javascript-unit-testing" replace />} />
            <Route path="/learning-and-assimilating" element={<Navigate to="/blog/learning-and-assimilating" replace />} />
            <Route path="/peri-mortem" element={<Navigate to="/blog/peri-mortem" replace />} />
            <Route path="/recent-reading-agile-test-quadrants" element={<Navigate to="/blog/recent-reading-agile-test-quadrants" replace />} />
            <Route path="/research-session-javascript-unit-testing" element={<Navigate to="/blog/research-session-javascript-unit-testing" replace />} />
            <Route path="/research-session-js-ut-experimentation" element={<Navigate to="/blog/research-session-js-ut-experimentation" replace />} />
            <Route path="/research-session-reporting-outputs-of-automation" element={<Navigate to="/blog/research-session-reporting-outputs-of-automation" replace />} />
            <Route path="/running-a-retrospective" element={<Navigate to="/blog/running-a-retrospective" replace />} />
            <Route path="/selenium-workshop" element={<Navigate to="/blog/selenium-workshop" replace />} />
            <Route path="/staff-ranking" element={<Navigate to="/blog/staff-ranking" replace />} />
            <Route path="/test-sessions-research-sessions" element={<Navigate to="/blog/test-sessions-research-sessions" replace />} />
            <Route path="/virtual-and-physical" element={<Navigate to="/blog/virtual-and-physical" replace />} />
            
            {/* New blog post routes */}
            <Route path="/blog/adventures-in-test-automation-land" element={<AdventuresInTestAutomationLand />} />
            <Route path="/blog/learning-and-assimilating" element={<LearningAndAssimilating />} />
            <Route path="/blog/changing-gears" element={<ChangingGears />} />
            <Route path="/blog/apis-with-context" element={<ApisWithContext />} />
            <Route path="/blog/gathers-no-moss" element={<GathersNoMoss />} />
            <Route path="/blog/informed-failure" element={<InformedFailure />} />
            <Route path="/blog/virtual-and-physical" element={<VirtualAndPhysical />} />
            <Route path="/blog/cast-2014" element={<Cast2014 />} />
            <Route path="/blog/test-sessions-research-sessions" element={<TestSessionsResearchSessions />} />
            <Route path="/blog/research-session-javascript-unit-testing" element={<ResearchSessionJavascriptUnitTesting />} />
            <Route path="/blog/research-session-js-ut-experimentation" element={<ResearchSessionJsUtExperimentation />} />
            <Route path="/blog/research-session-reporting-outputs-of-automation" element={<ResearchSessionReportingOutputsOfAutomation />} />
            <Route path="/blog/javascript-unit-testing" element={<JavascriptUnitTesting />} />
            <Route path="/blog/heuristic-for-selecting-a-trainer" element={<HeuristicForSelectingATrainer />} />
            <Route path="/blog/classification-of-software-features" element={<ClassificationOfSoftwareFeatures />} />
            <Route path="/blog/context-drive-testing-the-awakening" element={<ContextDriveTestingTheAwakening />} />
            <Route path="/blog/recent-reading-agile-test-quadrants" element={<RecentReadingAgileTestQuadrants />} />
            <Route path="/blog/running-a-retrospective" element={<RunningARetrospective />} />
            <Route path="/blog/selenium-workshop" element={<SeleniumWorkshop />} />
            <Route path="/blog/boltons-new-agile-ecosystem" element={<BoltonsNewAgileEcosystem />} />
            <Route path="/blog/staff-ranking" element={<StaffRanking />} />
            <Route path="/blog/peri-mortem" element={<PeriMortem />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App; 