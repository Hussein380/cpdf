import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}> = [
  { path: "",                    priority: 1.0, changeFrequency: "weekly"  },
  { path: "/about",              priority: 0.9, changeFrequency: "monthly" },
  { path: "/what-we-do",         priority: 0.9, changeFrequency: "monthly" },
  { path: "/youth-empowerment",  priority: 0.9, changeFrequency: "monthly" },
  { path: "/impact",             priority: 0.8, changeFrequency: "monthly" },
  { path: "/team",               priority: 0.7, changeFrequency: "monthly" },
  { path: "/partners",           priority: 0.7, changeFrequency: "monthly" },
  { path: "/future-plans",       priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog",               priority: 0.8, changeFrequency: "weekly"  },
  { path: "/contact",            priority: 0.6, changeFrequency: "yearly"  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_CONFIG.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
