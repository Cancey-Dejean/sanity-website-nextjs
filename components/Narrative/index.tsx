import Container from "@/components/Container";
import { twMerge } from "tailwind-merge";
import { PortableText, PortableTextBlock } from "next-sanity";
import ButtonGroup from "@/components/ButtonGroup";
import SectionTitle from "@/components/SectionTitle";

export default function Narrative({
  heading,
  subHeading,
  buttons,
}: {
  heading: PortableTextBlock;
  subHeading?: PortableTextBlock;
  buttons: [];
}) {
  return (
    <div className="py-48 text-center">
      <Container className="flex flex-col items-center justify-center gap-12">
        <SectionTitle size="display-sm" className="tracking-[-1.5px]">
          <PortableText value={heading || "This is the Heading"} />
        </SectionTitle>

        {/*<div*/}
        {/*  className={twMerge(*/}
        {/*    "display-sm",*/}
        {/*    "text-center [&_em]:relative [&_em]:inline-block [&_em]:animate-black-to-white [&_em]:not-italic [&_em]:text-white [&_em]:will-change-[color] [&_em]:[margin-inline:.125em]",*/}
        {/*    "[&_em]:isolate [&_em]:before:absolute [&_em]:before:left-[-.1ch] [&_em]:before:top-0 [&_em]:before:z-[-1] [&_em]:before:h-full [&_em]:before:w-[calc(100%+.3ch)] [&_em]:before:origin-left [&_em]:before:animate-hero-text-slide [&_em]:before:bg-salmon [&_em]:before:text-white [&_em]:before:content-['_']",*/}
        {/*    "[&_strong]:animate-hero-bold [&_strong]:font-bold [&_strong]:will-change-[color]",*/}
        {/*  )}*/}
        {/*>*/}
        {/*  <PortableText value={heading || "This is the Heading"} />*/}
        {/*</div>*/}

        <div className="mx-auto max-w-[60rem] text-xl tracking-[-0.4px]">
          <PortableText value={subHeading as any} />
        </div>

        {buttons && buttons.length > 0 && <ButtonGroup buttons={buttons} />}
      </Container>
    </div>
  );
}
