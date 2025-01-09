import { z } from "zod";

export const createBlogSchema = z.object({
  text: z.string().min(5),
  title: z.string().min(3),
  description: z.string().min(5),
  hide: z
    .string()
    .refine(
      (value) => ["true", "false"].includes(value),
      "Hide must be boolean"
    ),
});

const validThumbnailType = ["image/jpeg", "image/jpg", "image/png"];
const validThumbnailSize = 2; //MB
export const thumbnailValidator = (file: File | undefined, required = true) => {
  if (!required && !file) return undefined;
  if (!file) return "Thumbnail is required";
  if (!validThumbnailType.includes(file.type)) {
    return `Thumbnail type must be ${validThumbnailType.join(", ")}`;
  }
  const maxSizeLimit = validThumbnailSize * Math.pow(10, 6);
  if (maxSizeLimit < file.size) {
    return `Thumbnail size must be lower then ${maxSizeLimit}MB}`;
  }
};

export const patchBlogSchema = z.object({
  hide: z
    .string()
    .refine(
      (value) => ["true", "false"].includes(value),
      "Hide must be boolean"
    ),
});

export const updateBlogSchema = z.object({
  text: z.string().min(5).optional().or(z.literal("")),
  title: z.string().min(3).optional().or(z.literal("")),
  description: z.string().min(5).optional().or(z.literal("")),
});
