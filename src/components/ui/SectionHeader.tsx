import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SlideUp, FadeIn } from "@/components/animations";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string | ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

/**
 * Consistent animated section header used across all pages.
 * Supports an optional eyebrow label above the title.
 */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-cpdf-teal text-sm font-semibold tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-cpdf-teal" />
            {eyebrow}
            <span className="w-8 h-px bg-cpdf-teal" />
          </span>
        </FadeIn>
      )}

      <SlideUp delay={0.1}>
        <h2
          className={cn(
            "font-display font-bold text-cpdf-light leading-tight",
            "text-3xl sm:text-4xl lg:text-5xl",
            titleClassName
          )}
        >
          {title}
        </h2>
      </SlideUp>

      {description && (
        <SlideUp delay={0.2}>
          <p className="mt-4 text-cpdf-muted text-lg leading-relaxed">
            {description}
          </p>
        </SlideUp>
      )}
    </div>
  );
}
