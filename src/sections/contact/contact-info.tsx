"use client";

import SectionHeader from "@/components/common/SectionHeader";
import ContactGrid from "@/components/contact/ContactGrid";
import { contactItems } from "@/data/contact";

const ContactInfo = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24">
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-6">
        <SectionHeader
          badge="Contact Information"
          title="Multiple Ways to"
          highlight="Connect With Us"
          description="Whether you have a project idea, need technical consultation, or simply want to learn more about our services, we're always happy to start the conversation."
        />

        <div className="mt-16">
          <ContactGrid items={contactItems} />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;