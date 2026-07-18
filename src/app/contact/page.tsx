    import ContactInfo from "@/sections/contact/contact-info";
import ContactFormSection from "@/sections/contact/ContactFormSection";
import Hero from "@/sections/contact/hero";
import ThankYou from "@/sections/contact/ThankYou";
import WhatHappensNext from "@/sections/contact/WhatHappensNext";
import Footer from "@/sections/home/footer";
import Navbar from "@/sections/home/navbar";

const ContactPage = () => {
  return (
    <>

      <Navbar/>

      <Hero />

      <ContactInfo />

      <ContactFormSection />

      <WhatHappensNext />

     <ThankYou />

      <Footer />
    </>
  );
};

export default ContactPage;