import { cn } from "@/lib/utils";
import React from "react";

const containerSizes = {
  base: "max-w-[1600px]",
};

export default function Container({
  size = "base",
  children,
  className,
}: {
  size?: "base";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto w-full", containerSizes[size], className)}>
      {children}
    </div>
  );
}
