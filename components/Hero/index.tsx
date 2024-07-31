"use client";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  IcSharpAttachMoney,
  MaterialSymbolsLightCheck,
  PhCopyDuotone,
} from "@/components/ui/svgIcons";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import SectionTitle from "@/components/SectionTitle";
import { PortableText, PortableTextBlock } from "next-sanity";

export default function Hero({ heading }: { heading: PortableTextBlock }) {
  const [copySuccess, setCopySuccess] = useState("");
  const textRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = async () => {
    try {
      if (textRef.current) {
        const text = textRef.current.innerText;
        await navigator.clipboard.writeText(text);
        setCopySuccess("Copied!");
      }
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }

    setTimeout(() => {
      setCopySuccess("");
    }, 1000); // Reset the message after 2 seconds
  };

  return (
    <section className="flex h-full max-h-[1169px] min-h-[600px] items-center justify-center">
      <Container className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-8">
          <div
            className={twMerge(
              "[&_em]:animate-black-to-white text-center [&_em]:relative [&_em]:inline-block [&_em]:not-italic [&_em]:text-white [&_em]:will-change-[color] [&_em]:[margin-inline:.125em]",
              "[&_em]:before:bg-salmon display-lg [&_em]:before:animate-hero-text-slide [&_em]:isolate [&_em]:before:absolute [&_em]:before:left-[-.1ch] [&_em]:before:top-0 [&_em]:before:z-[-1] [&_em]:before:h-full [&_em]:before:w-[calc(100%+.3ch)] [&_em]:before:origin-left [&_em]:before:text-white [&_em]:before:content-['_']",
              "[&_strong]:animate-hero-bold [&_strong]:font-bold [&_strong]:will-change-[color]",
            )}
          >
            <PortableText value={heading} />
          </div>
          {/*<SectionTitle*/}
          {/*  size="display-lg"*/}
          {/*  className={twMerge(*/}
          {/*    "[&>em]:animate-black-to-white text-center [&>em]:relative [&>em]:inline-block [&>em]:not-italic [&>em]:text-white [&>em]:will-change-[color] [&>em]:[margin-inline:.125em]",*/}
          {/*    "[&>em]:before:bg-salmon [&>em]:before:animate-hero-text-slide [&>em]:isolate [&>em]:before:absolute [&>em]:before:left-[-.1ch] [&>em]:before:top-0 [&>em]:before:z-[-1] [&>em]:before:h-full [&>em]:before:w-[calc(100%+.3ch)] [&>em]:before:origin-left [&>em]:before:text-white [&>em]:before:content-['_']",*/}
          {/*  )}*/}
          {/*>*/}
          {/*  Make <em>content</em> your <strong>competitive advantage</strong>*/}
          {/*</SectionTitle>*/}

          <div className="mx-auto max-w-[50rem] text-balance text-center text-2xl tracking-[-0.48px]">
            <p>
              Treat content as data—actionable and scalable across your
              business—with the Sanity Composable Content Cloud.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button>Start Building</Button>
            <Button variant="secondary-outline">Book a demo</Button>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={copyToClipboard}
              className="group relative flex size-10 items-center justify-center text-cyan-200"
            >
              <IcSharpAttachMoney className="size-6 scale-100 text-[currentColor] transition-all duration-300 ease-in-out group-hover:scale-0" />

              <span className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 scale-0 items-center justify-center rounded-full bg-cyan-200 text-black opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100">
                <PhCopyDuotone className="size-7" />
              </span>

              {copySuccess && (
                <span className="absolute left-1/2 top-1/2 z-[1] flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cyan-200 text-black">
                  <MaterialSymbolsLightCheck className="size-7 transition-all duration-300 ease-in-out" />
                  <span className="sr-only">{copySuccess}</span>
                </span>
              )}
            </button>

            <div ref={textRef} className="font-jetBrainsMono text-gray-700">
              npm create sanity@latest
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
