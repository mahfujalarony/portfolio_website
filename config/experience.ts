import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "Upwork",
    position: "Junior Fullstack Developer(part-time)",
    company: "Contest-Tournament App Integration",
    location: "Canada",
    startDate: new Date("2026-05-07"),
    endDate: "Present",
    description: [
      "Integrated a multimodal embedding agent into a contest-tournament app built with Supabase and Vercel.",
      "Fixed production-readiness bugs and implemented Facebook Auth for user onboarding.",
      "Built dynamic data feeds, automated score calculations, and leaderboard score tracking.",
    ],
    achievements: [
      "Integrated a multimodal embedding agent into the existing Supabase and Vercel application architecture.",
      "Implemented Facebook Auth and resolved frontend/backend bugs to move the app closer to production readiness.",
      "Added dynamic result updates, automated score calculations, database storage, and continuous leaderboard tracking.",
      "Supported new content modules including blog articles and an AI-powered Q&A knowledge base.",
    ],
    skills: ["Next.js", "React", "Typescript", "Supabase", "Vercel", "SQL"],
    companyUrl: "https://www.upwork.com",
    logo: "/experience/upwork-logo.svg",
  }
];
