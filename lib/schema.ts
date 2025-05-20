import { z } from "zod";
import { LucideIcon } from "lucide-react";

export const skillItemSchema = z.object({
  name: z.string(),
  level: z.number().min(0).max(100),
});

export const skillSchema = z.object({
  category: z.string(),
  items: z.array(skillItemSchema),
});

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  imageUrl: z.string().url(),
  tags: z.array(z.string()),
  demoUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
});

export const blogPostSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  date: z.string(),
  url: z.string().url(),
  platform: z.string(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export const skillDataSchema = z.object({
  name: z.string(),
  description: z.string(),
  icon: z.custom<LucideIcon>(),
  technologies: z.array(z.string())
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type SkillData = z.infer<typeof skillDataSchema>;