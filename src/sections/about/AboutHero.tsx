"use client";

import PageHero from "@/components/common/PageHero";

const AboutHero = () => {
  return (
    <PageHero
   image="/about_hero.png"
      imageAlt="About Vontrixia Technologies"
      breadcrumb={["Home", "About"]}
    />
  );
};

export default AboutHero;