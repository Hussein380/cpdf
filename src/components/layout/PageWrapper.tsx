"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

const pageVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/**
 * Wraps each page in a motion transition keyed by route.
 */
export function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname();

  return (
    <motion.main
      key={pathname}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="flex-1"
    >
      {children}
    </motion.main>
  );
}
