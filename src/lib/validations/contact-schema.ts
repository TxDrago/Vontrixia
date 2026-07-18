import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters.")
    .max(50, "First name cannot exceed 50 characters."),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters.")
    .max(50, "Last name cannot exceed 50 characters."),

  company: z
    .string()
    .trim()
    .min(2, "Company name is required.")
    .max(100, "Company name cannot exceed 100 characters."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid business email address."),

  phone: z
    .string()
    .trim()
    .regex(
      /^[+]?[\d\s()-]{8,20}$/,
      "Please enter a valid phone number."
    ),

  service: z
    .string()
    .min(1, "Please select a service."),

  budget: z
    .string()
    .min(1, "Please select your budget."),

  timeline: z
    .string()
    .min(1, "Please select a project timeline."),

  country: z
    .string()
    .trim()
    .min(2, "Country is required."),

  message: z
    .string()
    .trim()
    .min(
      20,
      "Please provide at least 20 characters."
    )
    .max(
      2000,
      "Message cannot exceed 2000 characters."
    ),

 privacy: z
  .boolean()
  .refine((value) => value === true, {
    message: "You must accept the Privacy Policy.",
  }),

  newsletter: z.boolean().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;