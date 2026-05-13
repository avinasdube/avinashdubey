import HighlightsSection from "../components/HighlightsSection/HighlightsSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import QuoteSection from "../components/QuoteSection/QuoteSection";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";

const Layout = () => {
  return (
    <div>
      <WelcomeSection />
      <ProjectsSection />
      <HighlightsSection />
      <QuoteSection />
    </div>
  );
};

export default Layout;
