import { z } from "zod";

export const inputValidation = z.object({
  fullName: z
    .string()
    .min(8)
    .refine(
      (value) => !/\d+/g.test(value),
      "full name must be at least 5 characters"
    ),
  gender: z.string().refine((value) => value === "Male" || value === "Female", {
    message: "select a gender",
  }),
  birthDate: z.string().refine((value) => /\d+/g.test(value), "Invalid"),
  residenceStatus: z
    .string()
    .refine((value) => value === "Residence" || value === "Non Residence", {
      message: "please select",
    }),
  maritalStatus: z
    .string()
    .refine(
      (value) =>
        value === "Single" || value === "Married" || value === "Widowed",
      {
        message: "please select",
      }
    ),
  address: z
    .string()
    .refine((value) => /^[a-zA-Z0-9\s,.'-]{3,}$/g.test(value), {
      message: "Invalid address",
    }),
  zipCode: z.string().refine((value) => /^\d{5}(-\d{4})?$/g.test(value), {
    message: "Invalid zip code",
  }),
  phone: z
    .string()
    .refine(
      (value) =>
        /^[+]?[0-9]{1,3}?[-.\s]?([0-9]{3})[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/g.test(
          value
        ),
      {
        message: "Invalid phone",
      }
    ),
  email: z
    .string()
    .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(value), {
      message: "Invalid email",
    }),
  payment: z
    .string()
    .refine(
      (value) =>
        value === "Cash" || value === "Debit Card" || value === "Credit Card",
      {
        message: "please select",
      }
    ),
});
