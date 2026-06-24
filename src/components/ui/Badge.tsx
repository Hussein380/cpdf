import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "teal" | "blue" | "outline" | "subtle";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  teal: "bg-cpdf-teal/20 text-cpdf-teal border border-cpdf-teal/30",
  blue: "bg-cpdf-blue/20 text-cpdf-blue-light border border-cpdf-blue/30",
  outline: "border border-cpdf-dark-border text-cpdf-muted",
  subtle: "bg-white/5 text-cpdf-muted border border-white/10",
};

/**
 * Small label/tag component for categories and statuses.
 */
export function Badge({ children, variant = "teal", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
