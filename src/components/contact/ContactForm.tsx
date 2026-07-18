"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ContactInput from "./ContactInput";
import ContactSelect from "./ContactSelect";

import {
  contactSchema,
  ContactFormValues,
} from "@/lib/validations/contact-schema";
import ContactTextarea from "./ContactTextarea";
import ContactCheckbox from "./ContactCheckbox";
import ContactButton from "./ContactButton";

const serviceOptions = [
  { label: "Web Development", value: "web-development" },
  { label: "Mobile App Development", value: "mobile-app" },
  { label: "Custom Software Development", value: "custom-software" },
  { label: "UI / UX Design", value: "ui-ux" },
  { label: "AI Solutions", value: "ai" },
  { label: "CRM / ERP Development", value: "crm-erp" },
  { label: "Cloud & DevOps", value: "cloud-devops" },
  { label: "IT Consulting", value: "consulting" },
  { label: "Other", value: "other" },
];

const budgetOptions = [
  { label: "Less than ₹50K", value: "under-50k" },
  { label: "₹50K – ₹2L", value: "50k-2l" },
  { label: "₹2L – ₹5L", value: "2l-5l" },
  { label: "₹5L – ₹10L", value: "5l-10l" },
  { label: "More than ₹10L", value: "10l-plus" },
];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      country: "",
      message: "",
      privacy: false,
      newsletter: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <ContactInput
          id="firstName"
          label="First Name"
          placeholder="John"
          required
          {...register("firstName")}
          error={!!errors.firstName}
          errorMessage={errors.firstName?.message}
        />

        <ContactInput
          id="lastName"
          label="Last Name"
          placeholder="Doe"
          required
          {...register("lastName")}
          error={!!errors.lastName}
          errorMessage={errors.lastName?.message}
        />

        <ContactInput
          id="company"
          label="Company Name"
          placeholder="Vontrixia Technologies"
          required
          {...register("company")}
          error={!!errors.company}
          errorMessage={errors.company?.message}
        />

        <ContactInput
          id="email"
          type="email"
          label="Business Email"
          placeholder="john@company.com"
          required
          autoComplete="email"
          {...register("email")}
          error={!!errors.email}
          errorMessage={errors.email?.message}
        />

        <ContactInput
          id="phone"
          type="tel"
          label="Phone Number"
          placeholder="+91 98765 43210"
          required
          autoComplete="tel"
          {...register("phone")}
          error={!!errors.phone}
          errorMessage={errors.phone?.message}
        />

        <ContactSelect
          id="service"
          label="Service Interested In"
          placeholder="Select a service"
          required
          options={serviceOptions}
          {...register("service")}
          error={!!errors.service}
          errorMessage={errors.service?.message}
        />

        <ContactSelect
          id="budget"
          label="Estimated Budget"
          placeholder="Select your budget"
          required
          options={budgetOptions}
          {...register("budget")}
          error={!!errors.budget}
          errorMessage={errors.budget?.message}
        />
                <ContactSelect
          id="timeline"
          label="Project Timeline"
          placeholder="Select timeline"
          required
          options={[
            {
              label: "Immediately",
              value: "immediately",
            },
            {
              label: "Within 1 Month",
              value: "1-month",
            },
            {
              label: "1 - 3 Months",
              value: "1-3-months",
            },
            {
              label: "3 - 6 Months",
              value: "3-6-months",
            },
            {
              label: "Just Exploring",
              value: "exploring",
            },
          ]}
          {...register("timeline")}
          error={!!errors.timeline}
          errorMessage={errors.timeline?.message}
        />

        <ContactInput
          id="country"
          label="Country"
          placeholder="India"
          required
          autoComplete="country-name"
          {...register("country")}
          error={!!errors.country}
          errorMessage={errors.country?.message}
        />
      </div>

      <ContactTextarea
        id="message"
        label="Project Description"
        placeholder="Tell us about your project, business goals, required features, expected timeline, and any additional details..."
        required
        rows={7}
        {...register("message")}
        error={!!errors.message}
        errorMessage={errors.message?.message}
        helperText="Minimum 20 characters."
      />

      <div className="space-y-5">
        <ContactCheckbox
          id="privacy"
          label="I agree to the Privacy Policy and Terms of Service."
          required
          {...register("privacy")}
          error={!!errors.privacy}
          errorMessage={errors.privacy?.message}
        />

        <ContactCheckbox
          id="newsletter"
          label="Keep me updated with Vontrixia news, product launches and technology insights."
          {...register("newsletter")}
        />
      </div>

      <div className="pt-2">
        <ContactButton
          type="submit"
          loading={isSubmitting}
          fullWidth
        >
          Send Inquiry
        </ContactButton>
      </div>
    </form>
  );
};

export default ContactForm;