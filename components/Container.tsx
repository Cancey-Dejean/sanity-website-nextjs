import { cn } from "@/lib/utils";
import React from "react";

const containerSizes = {
  base: "max-w-[1314px]",
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
    <div
      className={cn(
        "mx-auto w-full px-3 xl:px-8",
        containerSizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
