import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Globe, Twitter, Facebook, Instagram } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

const footerLinks = {
  "About CPDF": [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Core Values", href: "/about#values" },
    { label: "Future Plans", href: "/future-plans" },
  ],
  "Our Work": [
    { label: "Initiatives", href: "/what-we-do" },
    { label: "Youth Empowerment", href: "/youth-empowerment" },
    { label: "Impact & Achievements", href: "/impact" },
    { label: "Partners", href: "/partners" },
  ],
  Resources: [
    { label: "Contact Us", href: "/contact" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-5">
              <div className="relative w-24 h-24">
                <Image src="/images/cpdf-logo.png" alt="CPDF" fill className="object-contain" />
              </div>
            </Link>

            <p className="text-cpdf-muted text-sm leading-relaxed max-w-sm mb-6">
              {SITE_CONFIG.description}
            </p>

            {/* Contact Info */}
            <ul className="space-y-2.5 mb-6">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-cpdf-muted hover:text-cpdf-teal transition-colors text-sm"
                >
                  <Mail size={14} className="text-cpdf-teal shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 text-cpdf-muted hover:text-cpdf-teal transition-colors text-sm"
                >
                  <Phone size={14} className="text-cpdf-teal shrink-0" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.url}
                  className="flex items-center gap-2 text-cpdf-muted hover:text-cpdf-teal transition-colors text-sm"
                >
                  <Globe size={14} className="text-cpdf-teal shrink-0" />
                  cpdforum.org
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <SocialLink href={SITE_CONFIG.social.twitter} icon={<Twitter size={16} />} label="Twitter" />
              <SocialLink href={SITE_CONFIG.social.facebook} icon={<Facebook size={16} />} label="Facebook" />
              <SocialLink href={SITE_CONFIG.social.instagram} icon={<Instagram size={16} />} label="Instagram" />
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-cpdf-light font-semibold text-sm mb-4 tracking-wide">
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cpdf-muted hover:text-cpdf-teal text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cpdf-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cpdf-muted text-xs">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-cpdf-muted text-xs">
            Bridging Divides, Building Democracy — Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-cpdf-muted hover:text-cpdf-teal hover:border-cpdf-teal/40 hover:bg-cpdf-teal/10 transition-all duration-200"
    >
      {icon}
    </a>
  );
}
