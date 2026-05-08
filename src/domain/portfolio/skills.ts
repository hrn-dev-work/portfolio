import {
  Atom,
  Braces,
  Cloud,
  Code,
  Coffee,
  Container,
  Database,
  FileCode,
  Flame,
  GitBranch,
  Layers,
  LayoutDashboard,
  Leaf,
  Server,
  Sparkles,
  Terminal,
  Triangle,
  Webhook,
  Wind
} from "lucide-react";

import type { FeaturedSkillView, SkillCategoryView } from "./types";

export const featuredSkills: FeaturedSkillView[] = [
  {
    key: "ddd",
    icon: Layers,
    accent: "from-sky-500/20 via-sky-500/5 to-transparent"
  },
  {
    key: "vibeCoding",
    icon: Sparkles,
    accent: "from-violet-500/20 via-fuchsia-500/5 to-transparent"
  }
];

export const skillCategories: SkillCategoryView[] = [
  {
    key: "languages",
    icon: Code,
    items: [
      { name: "TypeScript", icon: Braces },
      { name: "Java", icon: Coffee },
      { name: "PHP", icon: FileCode },
      { name: "SQL", icon: Database }
    ]
  },
  {
    key: "frontend",
    icon: LayoutDashboard,
    items: [
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Triangle },
      { name: "Tailwind CSS", icon: Wind }
    ]
  },
  {
    key: "backend",
    icon: Server,
    items: [
      { name: "NestJS", icon: Layers },
      { name: "Laravel", icon: Flame },
      { name: "Spring Boot", icon: Leaf },
      { name: "REST API", icon: Webhook }
    ]
  },
  {
    key: "infra",
    icon: Cloud,
    items: [
      { name: "AWS", icon: Cloud },
      { name: "Docker", icon: Container },
      { name: "WSL2", icon: Terminal },
      { name: "CI/CD", icon: GitBranch }
    ]
  }
];
