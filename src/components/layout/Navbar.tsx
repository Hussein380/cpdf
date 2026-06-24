"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-cpdf-dark-border shadow-sm"
            : "bg-white/95 backdrop-blur-md border-b border-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/cpdf-logo.png"
                  alt="CPDF Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavItem
                  key={link.href}
                  link={link}
                  pathname={pathname}
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}
                />
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button href="/contact" size="sm" variant="outline">
                Get Involved
              </Button>
              <Button href="/contact" size="sm">
                Join Us
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-cpdf-light hover:text-cpdf-teal hover:bg-white/5 transition-colors"
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="absolute top-0 right-0 bottom-0 w-80 bg-white border-l border-cpdf-dark-border flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex items-center justify-between p-6 border-b border-cpdf-dark-border">
                <span className="font-display font-bold text-cpdf-light text-lg">Menu</span>
                <button
                  className="p-2 rounded-lg text-cpdf-muted hover:text-cpdf-light transition-colors"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <MobileNavItem key={link.href} link={link} pathname={pathname} />
                  ))}
                </ul>
              </nav>

              <div className="p-6 border-t border-cpdf-dark-border space-y-3">
                <Button href="/contact" className="w-full" variant="outline" size="md">
                  Get Involved
                </Button>
                <Button href="/contact" className="w-full" size="md">
                  Join Us
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Desktop Nav Item ──────────────────────────────────────────────────────────

function NavItem({
  link,
  pathname,
  openDropdown,
  setOpenDropdown,
}: {
  link: NavLink;
  pathname: string;
  openDropdown: string | null;
  setOpenDropdown: (v: string | null) => void;
}) {
  const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
  const isOpen = openDropdown === link.href;

  if (link.children) {
    return (
      <li
        className="relative"
        onMouseEnter={() => setOpenDropdown(link.href)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <button
          className={cn(
            "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
            isActive ? "text-cpdf-teal" : "text-cpdf-muted hover:text-cpdf-light"
          )}
        >
          {link.label}
          <ChevronDown
            size={14}
            className={cn("transition-transform", isOpen && "rotate-180")}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="absolute top-full left-0 mt-1 w-48 bg-cpdf-dark-card border border-cpdf-dark-border rounded-xl shadow-card-hover py-2 z-10"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
            >
              {link.children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="block px-4 py-2.5 text-sm text-cpdf-muted hover:text-cpdf-teal hover:bg-slate-50 transition-colors"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={link.href}
        className={cn(
          "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          isActive
            ? "text-cpdf-teal bg-cpdf-teal/10"
            : "text-cpdf-muted hover:text-cpdf-light hover:bg-slate-50"
        )}
      >
        {link.label}
      </Link>
    </li>
  );
}

// ─── Mobile Nav Item ───────────────────────────────────────────────────────────

function MobileNavItem({ link, pathname }: { link: NavLink; pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

  if (link.children) {
    return (
      <li>
        <button
          className={cn(
            "flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors",
            isActive ? "text-cpdf-teal bg-cpdf-teal/10" : "text-cpdf-muted hover:text-cpdf-light hover:bg-slate-50"
          )}
          onClick={() => setIsOpen((v) => !v)}
        >
          {link.label}
          <ChevronDown size={14} className={cn("transition-transform", isOpen && "rotate-180")} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden pl-4"
            >
              {link.children.map((child) => (
                <li key={child.href}>
                  <Link
                    href={child.href}
                    className="block px-4 py-2.5 text-sm text-cpdf-muted hover:text-cpdf-teal transition-colors"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={link.href}
        className={cn(
          "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
          isActive
            ? "text-cpdf-teal bg-cpdf-teal/10"
            : "text-cpdf-muted hover:text-cpdf-light hover:bg-slate-50"
        )}
      >
        {link.label}
      </Link>
    </li>
  );
}
