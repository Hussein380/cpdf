"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

/**
 * Base card with optional hover animation and teal glow.
 */
export function Card({ children, className, hover = true, glow = false, onClick }: CardProps) {
  return (
    <motion.div
      className={cn(
        "bg-cpdf-dark-card border border-cpdf-dark-border rounded-2xl",
        glow && "shadow-cpdf-glow",
        onClick && "cursor-pointer",
        className
      )}
      whileHover={
        hover
          ? {
              y: -6,
              borderColor: "rgba(26,188,156,0.4)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(26,188,156,0.1)",
            }
          : undefined
      }
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn("p-6 pb-0", className)}>{children}</div>;
}

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export function CardBody({ children, className }: CardBodyProps) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn("px-6 pb-6 pt-0 border-t border-cpdf-dark-border mt-auto", className)}>
      {children}
    </div>
  );
}
