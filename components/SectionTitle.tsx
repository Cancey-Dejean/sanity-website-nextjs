import { cn } from "@/lib/utils";
import React from "react";

type SectionTitleProps = {
  as?: React.ElementType;
  size?:
    | "display-lg"
    | "display-md"
    | "display-sm"
    | "heading-lg"
    | "heading-md"
    | "heading-sm";
  className?: string;
  children: React.ReactNode;
};

const titleSizes = {
  "display-lg": "display-lg",
  "display-md": "display-md",
  "display-sm": "display-sm",
  "heading-lg": "text-5xl",
  "heading-md": "heading-md",
  "heading-sm": "text-2xl",
};

export default function SectionTitle({
  className,
  size = "heading-lg",
  children,
}: SectionTitleProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "[&_em]:relative [&_em]:inline-block [&_em]:animate-black-to-white [&_em]:not-italic [&_em]:text-white [&_em]:will-change-[color] [&_em]:[margin-inline:.125em]",
        "tracking-[-1.5px] [&_em]:isolate [&_em]:before:absolute [&_em]:before:left-[-.1ch] [&_em]:before:top-0 [&_em]:before:z-[-1] [&_em]:before:h-full [&_em]:before:w-[calc(100%+.3ch)] [&_em]:before:origin-left [&_em]:before:animate-hero-text-slide [&_em]:before:bg-salmon [&_em]:before:text-white [&_em]:before:content-['_']",
        "[&_strong]:animate-hero-bold [&_strong]:font-bold [&_strong]:will-change-[color]",
        titleSizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
