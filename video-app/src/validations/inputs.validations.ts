import { z } from "zod";

export const inputValidation = z.object({
  name: z
    .string()
    .min(4)
    .refine(
      (value) => !/\d+/g.test(value),
      "video name must be at least 4 characters"
    ),
  rating: z.string().refine((value) => /^\d+$/.test(value), {
    message: "Video rating must be a number",
  }),
  genre: z
    .string()
    .min(4)
    .refine(
      (value) => !/\d+/g.test(value),
      "video name must be at least 4 characters"
    ),
});
