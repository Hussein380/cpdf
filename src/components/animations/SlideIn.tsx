"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

/**
 * Slides children in from left or right while fading in.
 */
export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.7,
  distance = 60,
  className,
  once = true,
}: SlideInProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -distance : distance,
    },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
