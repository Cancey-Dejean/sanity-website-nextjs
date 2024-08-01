import Container from "@/components/Container";
import { twMerge } from "tailwind-merge";
import { PortableText, PortableTextBlock } from "next-sanity";

export default function Narrative({ heading }: { heading: PortableTextBlock }) {
  return (
    <div className="py-48 text-center">
      <Container>
        <div
          className={twMerge(
            "display-sm",
            "text-center [&_em]:relative [&_em]:inline-block [&_em]:animate-black-to-white [&_em]:not-italic [&_em]:text-white [&_em]:will-change-[color] [&_em]:[margin-inline:.125em]",
            "[&_em]:isolate [&_em]:before:absolute [&_em]:before:left-[-.1ch] [&_em]:before:top-0 [&_em]:before:z-[-1] [&_em]:before:h-full [&_em]:before:w-[calc(100%+.3ch)] [&_em]:before:origin-left [&_em]:before:animate-hero-text-slide [&_em]:before:bg-salmon [&_em]:before:text-white [&_em]:before:content-['_']",
            "[&_strong]:animate-hero-bold [&_strong]:font-bold [&_strong]:will-change-[color]",
          )}
        >
          <PortableText value={heading || "Heading"} />
        </div>
      </Container>
    </div>
  );
}
