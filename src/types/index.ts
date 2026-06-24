// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

// ─── Team ─────────────────────────────────────────────────────────────────────

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  department?: string;
  image?: string;
  bio?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}

// ─── Partners ─────────────────────────────────────────────────────────────────

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description?: string;
  category: "media" | "governance" | "civil-society" | "political" | "international" | "foundation";
}

// ─── Initiatives ──────────────────────────────────────────────────────────────

export interface Initiative {
  id: string;
  title: string;
  description: string;
  icon: string;
  color?: string;
}

// ─── Impact Stats ─────────────────────────────────────────────────────────────

export interface ImpactStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description?: string;
}

// ─── Youth Program Components ────────────────────────────────────────────────

export interface YouthComponent {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ─── Future Plans ─────────────────────────────────────────────────────────────

export interface FuturePlan {
  id: string;
  step: number;
  title: string;
  description: string;
  timeline?: string;
}

// ─── Core Values ──────────────────────────────────────────────────────────────

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ─── Blog ─────────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  coverImage?: string;
  readTime?: string;
}

// ─── SEO ──────────────────────────────────────────────────────────────────────

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}
