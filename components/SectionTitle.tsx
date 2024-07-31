import { cn } from "@/lib/utils";

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
  as: Comp = "h1",
  className,
  size = "heading-lg",
  children,
  ...restProps
}: SectionTitleProps) {
  return (
    <Comp
      className={cn(
        "leading-[1.1] tracking-[-.025em]",
        titleSizes[size],
        className,
      )}
      {...restProps}
    >
      {children}
    </Comp>
  );
}
