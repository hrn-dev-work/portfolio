import type { ProjectView } from "./types";

export const projectViews: ProjectView[] = [
  {
    key: "opsInboxApi",
    stack: ["NestJS", "Prisma", "PostgreSQL", "OpenAPI", "Render"],
    repoUrl: "https://github.com/hrn-dev-work/ops-inbox-api",
    demoUrl: "https://ops-inbox-api.onrender.com",
    demoNoteKey: "demoNoteDb"
  },
  {
    key: "laravelOutboundApi",
    stack: ["Laravel", "PHP", "PostgreSQL", "PHPUnit", "Render"],
    repoUrl: "https://github.com/hrn-dev-work/laravel-outbound-api",
    demoUrl: "https://laravel-outbound-api.onrender.com"
  },
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
