import { z } from "zod";

export const registrationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  gender: z.string().min(1, "Gender is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please input a valid email"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine((v) => !v.includes("_"), "Please input a valid phone number"),
  residenceCountry: z.string().min(1, "Residence country is required"),
  termsAndCondition: z
    .boolean()
    .refine((t) => t, "You must accept the Terms & Conditions"),
});
