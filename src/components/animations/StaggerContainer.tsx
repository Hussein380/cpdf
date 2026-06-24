"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  className?: string;
  once?: boolean;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/**
 * Wraps children and staggers their entrance animations.
 * Each direct child should be wrapped in <StaggerItem>.
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  className,
  once = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      custom={staggerDelay}
      variants={containerVariants}
      transition={{ delayChildren: initialDelay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Each item inside a StaggerContainer.
 */
export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
