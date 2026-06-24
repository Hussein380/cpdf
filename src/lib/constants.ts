import type { NavLink } from "@/types";

// ─── Site Config ──────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  name: "Cross Party Democracy Forum",
  shortName: "CPDF",
  tagline: "Bridging Divides, Building Democracy",
  description:
    "A non-partisan organization dedicated to promoting democratic governance, political inclusivity, and electoral integrity in Kenya.",
  url: "https://cpdforum.org",
  email: "info@cpdforum.org",
  emailAlt: "cpdfkenya@gmail.com",
  phone: "0207858980",
  social: {
    twitter: "https://twitter.com/cpdfkenya",
    facebook: "https://facebook.com/CPDFORUM",
    instagram: "https://instagram.com/cpdfKenya",
  },
  foundedYear: 2020,
} as const;

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Our Partners", href: "/partners" },
    ],
  },
  {
    label: "Our Work",
    href: "/what-we-do",
    children: [
      { label: "Initiatives", href: "/what-we-do" },
      { label: "Youth Empowerment", href: "/youth-empowerment" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Impact", href: "/impact" },
  { label: "Future Plans", href: "/future-plans" },
  { label: "Contact", href: "/contact" },
];

// ─── Brand Colors (mirrors tailwind.config) ───────────────────────────────────

export const BRAND_COLORS = {
  blue: "#005494",
  blueLight: "#0073C4",
  blueDark: "#003B69",
  teal: "#00C2A8",
  tealLight: "#33E0CA",
  tealDark: "#008C79",
  dark: "#F8FAFC",
  darker: "#FFFFFF",
} as const;
