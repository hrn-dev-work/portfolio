import type { ProjectView } from "./types";

export const projectViews: ProjectView[] = [
  {
    key: "medicalApp",
    stack: ["TypeScript", "NestJS", "Prisma", "PostgreSQL", "Redis", "AWS S3/SQS"]
  },
  {
    key: "vulnerabilityPlatform",
    stack: ["PHP", "Laravel", "MySQL", "PostgreSQL", "Docker", "AWS EC2/S3"]
  },
  {
    key: "hrSystem",
    stack: ["Java", "JavaScript", "SQL", "PostgreSQL", "Oracle", "Tomcat"]
  }
];
