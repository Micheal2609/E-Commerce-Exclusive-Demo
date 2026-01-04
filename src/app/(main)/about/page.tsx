import { Breadcrumb } from "../../shared/components/index";
import { ServiceSection } from "../homepage/components";
import { AboutHeroSection, StatsSection, TeamSection } from "./components/index";

const AboutPage = () => {
  return (
    <div className="w-full px-36 py-10">
      <Breadcrumb />
      <AboutHeroSection />
      <StatsSection />
      <TeamSection />
      <div className="py-20">
        <ServiceSection />
      </div>
    </div>
  );
}

export default AboutPage;