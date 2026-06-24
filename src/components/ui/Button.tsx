"use client";

import { motion } from "framer-motion";
import { type ReactNode, type ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  href?: string;
  external?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-cpdf-teal text-cpdf-dark font-semibold hover:bg-cpdf-teal-light shadow-cpdf-glow",
  secondary:
    "bg-cpdf-blue text-white font-semibold hover:bg-cpdf-blue-light",
  outline:
    "border border-cpdf-teal text-cpdf-teal hover:bg-cpdf-teal hover:text-cpdf-dark",
  ghost:
    "text-cpdf-light hover:text-cpdf-teal hover:bg-white/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

/**
 * Primary button component. Renders an <a> tag when `href` is provided.
 */
export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  external,
  loading,
  icon,
  iconPosition = "right",
  className,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cpdf-teal focus-visible:ring-offset-2 focus-visible:ring-offset-cpdf-dark",
    variantStyles[variant],
    sizeStyles[size],
    (disabled || loading) && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      {loading ? <span className="animate-pulse">Loading…</span> : children}
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      disabled={disabled || loading}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {content}
    </motion.button>
  );
}
