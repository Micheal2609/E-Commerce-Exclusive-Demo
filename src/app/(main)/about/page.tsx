import { ServiceSection } from "../homepage/components";
import { AboutHeroSection, StatsSection, TeamSection } from "./components/index";

const AboutPage = () => {
  return (
    <div className="w-full px-36 py-10">
        <AboutHeroSection />
        <StatsSection />
        <TeamSection />
        <ServiceSection />
    </div>
  );
}

export default AboutPage;