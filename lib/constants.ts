import { z } from "zod";
import { skillSchema, projectSchema, blogPostSchema, skillDataSchema, SkillData } from "./schema";
import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Server, 
  Smartphone 
} from "lucide-react";

export type Skill = z.infer<typeof skillSchema>;
export type Project = z.infer<typeof projectSchema>;
export type BlogPost = z.infer<typeof blogPostSchema>;

export const SKILLS: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Ruby on Rails", level: 75 },
      { name: "GraphQL", level: 70 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "AWS", level: 70 },
      { name: "Vercel", level: 85 },
    ],
  },
  {
    category: "AI & Data",
    items: [
      { name: "OpenAI API", level: 85 },
      { name: "LangChain", level: 75 },
      { name: "SQL", level: 80 },
      { name: "Data Visualization", level: 70 },
      { name: "Prompt Engineering", level: 85 },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "HealthTrack",
    description: "A comprehensive health monitoring application with AI-powered insights.",
    imageUrl: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI"],
    demoUrl: "https://healthtrack.example.com",
    githubUrl: "https://github.com/johndoe/healthtrack",
    featured: true,
  },
  {
    title: "TaskMaster",
    description: "A productivity tool for teams with real-time collaboration features.",
    imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Firebase", "TailwindCSS", "Redux"],
    demoUrl: "https://taskmaster.example.com",
    githubUrl: "https://github.com/johndoe/taskmaster",
    featured: true,
  },
  {
    title: "DevConnect",
    description: "A social network platform for developers to share projects and collaborate.",
    imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://devconnect.example.com",
    githubUrl: "https://github.com/johndoe/devconnect",
    featured: true,
  },
  {
    title: "EcoTracker",
    description: "An application to track and reduce carbon footprint with personalized recommendations.",
    imageUrl: "https://images.pexels.com/photos/2559749/pexels-photo-2559749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "TypeScript", "Charts.js", "Supabase"],
    demoUrl: "https://ecotracker.example.com",
    githubUrl: "https://github.com/johndoe/ecotracker",
    featured: false,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Building Scalable React Applications with Next.js",
    excerpt: "Learn how to structure your Next.js applications for optimal performance and scalability.",
    date: "2023-09-15",
    url: "https://johndoe.dev/blog/building-scalable-react-applications",
    platform: "Personal Blog",
  },
  {
    title: "The Future of Web Development: AI-Assisted Coding",
    excerpt: "Exploring how AI tools are transforming the development workflow and boosting productivity.",
    date: "2023-08-22",
    url: "https://medium.com/@johndoe/ai-assisted-coding",
    platform: "Medium",
  },
  {
    title: "Practical Guide to TypeScript for React Developers",
    excerpt: "Tips and best practices for leveraging TypeScript in your React applications.",
    date: "2023-07-10",
    url: "https://dev.to/johndoe/typescript-for-react-developers",
    platform: "Dev.to",
  },
  {
    title: "From Monolith to Microservices: A Journey",
    excerpt: "Our experience transitioning a large application from monolithic architecture to microservices.",
    date: "2023-06-05",
    url: "https://johndoe.dev/blog/monolith-to-microservices",
    platform: "Personal Blog",
  },
];

export const ABOUT_DATA = {
  name: "Iijima Tatsunori",
  title: "Freelance Software Engineer",
  tagline: "Building exceptional digital experiences for startups",
  summary: "I'm a passionate software engineer with over 6 years of experience specializing in building innovative web applications for startups. My approach combines technical expertise with a deep understanding of business needs to create solutions that drive growth.",
  background: "After graduating with a Computer Science degree, I worked at several tech startups before transitioning to freelance work. This journey has equipped me with a diverse skill set and the ability to adapt quickly to different tech stacks and business domains.",
  philosophy: "I believe in writing clean, maintainable code and focusing on user experience. My goal is to help startups bring their vision to life through technology that's both powerful and easy to use.",
  location: "Tokyo, Japan",
  availability: "Available for freelance projects",
  email: "hello@johndoe.dev",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/johndoe",
  twitter: "https://twitter.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe",
  medium: "https://medium.com/@johndoe",
};

export const SKILLS_DATA: SkillData[] = [
  {
    name: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    icon: Code2,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    name: "Backend Development",
    description: "Creating robust and scalable server-side applications",
    icon: Server,
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
  },
  {
    name: "Mobile Development",
    description: "Developing cross-platform mobile applications",
    icon: Smartphone,
    technologies: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    name: "Database Design",
    description: "Designing and optimizing database structures",
    icon: Database,
    technologies: ["SQL", "NoSQL", "Redis", "GraphQL"]
  },
  {
    name: "DevOps & Cloud",
    description: "Managing infrastructure and deployment pipelines",
    icon: Layers,
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    name: "Web Technologies",
    description: "Working with modern web standards and APIs",
    icon: Globe,
    technologies: ["REST", "WebSocket", "PWA", "WebRTC"]
  }
];