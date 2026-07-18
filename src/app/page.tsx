import Navbar from "@/sections/home/navbar";
import HeroSection from "@/sections/home/hero-section";
import TrustedTech from "@/sections/home/trusted-tech";
import Services from "@/sections/home/services-section";
import ProcessSection from "@/sections/home/process-section";
import CaseStudies from "@/sections/home/case-studies";
import WhyChoose from "@/sections/home/why-vontrixia";
import Technologies from "@/sections/home/technologies";
import Standard from "@/sections/home/standard";
import Industries from "@/sections/home/industries";
import CTASection from "@/sections/home/cta";
import FAQSection from "@/sections/home/faq";
import Footer from "@/sections/home/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden
    relative
    bg-cover
    bg-center
    bg-no-repeat
    bg-black
  "
  // style={{
  //   backgroundImage: "url('/star-bg.png')",
  //   height:"100%"
  // }}
  >
      <Navbar />
      <HeroSection />
      <TrustedTech />
      <Services />
      <ProcessSection />
      <CaseStudies />
      <WhyChoose />
      <Technologies />
      <Standard />
      <Industries />
      <CTASection />
      <FAQSection />
      <Footer />

    </main>
  );
}