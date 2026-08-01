import type { LucideIcon } from "lucide-react";

export type FeaturedSkillKey = "ddd" | "vibeCoding";
export type SkillCategoryKey = "languages" | "frontend" | "backend" | "infra";
export type ProjectKey =
  | "opsInboxApi"
  | "laravelOutboundApi"
  | "medicalApp"
  | "vulnerabilityPlatform"
  | "hrSystem";
export type CareerKey = "senior" | "midlevel" | "junior";

export type FeaturedSkillView = {
  key: FeaturedSkillKey;
  icon: LucideIcon;
  accent: string;
};

export type SkillItemView = {
  name: string;
  icon: LucideIcon;
};

export type SkillCategoryView = {
  key: SkillCategoryKey;
  icon: LucideIcon;
  items: SkillItemView[];
};

export type ProjectView = {
  key: ProjectKey;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  demoNoteKey?: "demoNoteDb";
};

export type CareerView = {
  key: CareerKey;
};
