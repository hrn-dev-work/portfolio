import {
  Atom,
  Braces,
  Cloud,
  Code,
  CodeXml,
  Coffee,
  Container,
  Database,
  FileCode,
  FileText,
  Flame,
  GitBranch,
  Layers,
  LayoutDashboard,
  Leaf,
  Server,
  Sparkles,
  Terminal,
  Triangle,
  Webhook
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
      { name: "Java", icon: Coffee },
      { name: "TypeScript", icon: Braces },
      { name: "SQL", icon: Database },
      { name: "PHP", icon: FileCode }
    ]
  },
  {
    key: "frontend",
    icon: LayoutDashboard,
    items: [
      { name: "HTML", icon: FileCode },
      { name: "jQuery", icon: Code },
      { name: "JSP", icon: FileText },
      { name: "XML", icon: CodeXml },
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Triangle }
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
