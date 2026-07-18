

import AboutHero from "@/sections/about/AboutHero";
import CoreValues from "@/sections/about/CoreValues";
import CTA from "@/components/common/CTA";
import FromVisionToReality from "@/sections/about/FromVisionToReality";
import MeetTheTeam from "@/sections/about/MeetTheTeam";
import MissionVision from "@/sections/about/MissionVision";
import OurStory from "@/sections/about/OurStory";
import TechnologyBuiltAroundYourVision from "@/sections/about/TechnologyVision.tsx ";
import Footer from "@/sections/home/footer";
import Navbar from "@/sections/home/navbar";

const About = () => {
  return (
    <>

      <Navbar/>

      <AboutHero />

      <TechnologyBuiltAroundYourVision />

      <OurStory />

      <MissionVision />

      <CoreValues />

      <MeetTheTeam />

      <FromVisionToReality />

      <CTA 
        badge="Your Next Project"
  title="Let's Create"
  highlight="Something Amazing"
  description="Tell us your idea, and we'll help transform it into a scalable, high-performing digital product."
  primaryText="Get Started"
  secondaryText="Contact Us"
  />

      <Footer />
    </>
  );
};

export default About;