import { cn } from "@/lib/utils";
import React from "react";

const containerSizes = {
  base: "max-w-[1040px]"
};

export default function Container({ className, size = "base", children }: {
  size?: "base";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("mx-auto w-full", containerSizes[size], className)}
    >
      {children}
    </div>
  );
}
