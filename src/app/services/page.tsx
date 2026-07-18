import CTA from "@/components/common/CTA";
import Footer from "@/sections/home/footer";
import Navbar from "@/sections/home/navbar";
import IndustriesWeServe from "@/sections/services/IndustriesWeServe";
import OurExpertise from "@/sections/services/OurExpertise";
import OurPromise from "@/sections/services/OurPromise";
import ServicesHero from "@/sections/services/ServicesHero";
import WhatMakesVontrixiaDifferent from "@/sections/services/WhatMakesVontrixiaDifferent";
import WhatWeBuild from "@/sections/services/WhatWeBuild";

const ServicesPage = () => {
  return (
    <>
      <Navbar />

      <ServicesHero />

      <WhatWeBuild />

      <OurExpertise />

      <WhatMakesVontrixiaDifferent />

      <IndustriesWeServe />

      <OurPromise />

      <CTA
        badge="Let's Build the Future Together"
        title="The Future"
        highlight="Doesn't Wait. Neither Should You."
        description="Every successful digital transformation begins with a single decision. Whether you're building a custom platform, integrating AI, modernizing legacy systems, or launching your next big idea, Vontrixia is ready to turn your vision into scalable, future-ready technology."
        primaryText="Start Your Project"
        primaryHref="/contact"
        secondaryText="Schedule a Consultation"
        secondaryHref="/contact"
      />

      <Footer />
    </>
  );
};

export default ServicesPage;
