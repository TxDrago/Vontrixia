"use client";

import {
  Clock3,
  ShieldCheck,
  Globe,
  Sparkles,
} from "lucide-react";

import SectionHeader from "@/components/common/SectionHeader";
import ContactForm from "@/components/contact/ContactForm";

const features = [
  {
    icon: Clock3,
    title: "Fast Response",
    description: "We typically reply to all inquiries within 24 hours.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential & Secure",
    description: "Your project information stays private. NDA available on request.",
  },
  {
    icon: Globe,
    title: "Remote Collaboration",
    description: "We work with startups and businesses across India and worldwide.",
  },
  {
    icon: Sparkles,
    title: "Tailored Solutions",
    description: "Every solution is designed around your goals—not a one-size-fits-all template.",
  },
];

const ContactFormSection = () => {
  return (
    <section
      id="contact-form"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-6">
        <SectionHeader
          badge="Start Your Project"
          title="Let's Turn Your"
          highlight="Vision Into Reality"
          description="Share your project details with us. Whether you're building a startup, modernizing an existing platform, or exploring AI-powered solutions, we'd love to hear your ideas."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Contact Form */}

          <div className="lg:col-span-3">
            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
              "
            >
              <ContactForm />
            </div>
          </div>

          {/* Trust Panel */}

          <div className="lg:col-span-2">
            <div
              className="
                sticky
                top-28
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
              "
            >
              <h3 className="text-2xl font-bold text-white">
                Why Choose Vontrixia?
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                We're passionate about building scalable digital products that
                combine modern technology, exceptional user experience, and
                business-focused thinking.
              </p>

              <div className="mt-8 space-y-6">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="flex items-start gap-4"
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          bg-gradient-to-br
                          from-cyan-500/20
                          to-violet-500/20
                          text-cyan-300
                        "
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-white">
                          {feature.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className="
                  mt-10
                  rounded-2xl
                  border
                  border-cyan-500/20
                  bg-cyan-500/10
                  p-5
                "
              >
                <p className="text-sm leading-7 text-cyan-100">
                  💡 <strong>Free Initial Consultation:</strong> We'll discuss
                  your goals, recommend the right technology stack, and outline
                  the best approach—at no cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;