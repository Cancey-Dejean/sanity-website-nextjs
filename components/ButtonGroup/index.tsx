import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { Button, ButtonProps } from "@/components/ui/button";
import { LinkItem } from "@/types";

type ButtonGroupProps = {
  variant: ButtonProps["variant"];
  size: ButtonProps["size"];
  cta: LinkItem;
  hide: boolean;
};

export default function ButtonGroup({
  buttons,
}: {
  buttons: ButtonGroupProps[];
}) {
  return (
    <div className="flex items-center gap-3">
      {buttons.map(({ variant, size, cta, hide }) => (
        <Button
          variant={variant}
          size={size}
          asChild
          key={cta.label}
          className={twMerge(hide && "hidden")}
        >
          <Link
            href={cta.url || "#cta"}
            target={cta.newTab ? "_blank" : "_self"}
            rel={cta.newTab ? "noopener noreferrer" : undefined}
          >
            {cta.label}
          </Link>
        </Button>
      ))}
    </div>
  );
}
