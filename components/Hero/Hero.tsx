"use client";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { IcSharpAttachMoney } from "@/components/ui/svgIcons";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Hero() {
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
    }, 2000); // Reset the message after 2 seconds
  };

  return (
    <section className="flex h-full max-h-[1169px] min-h-[600px] items-center justify-center bg-red-50">
      <Container className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-8">
          <h1
            className={twMerge(
              "[&>em]:animate-black-to-white text-center text-[88px] leading-[1.1] tracking-[-.025em] [&>em]:relative [&>em]:inline-block [&>em]:not-italic [&>em]:text-white [&>em]:will-change-[color] [&>em]:[margin-inline:.125em]",
              "[&>em]:before:bg-salmon [&>em]:before:animate-hero-text-slide [&>em]:isolate [&>em]:before:absolute [&>em]:before:left-[-.1ch] [&>em]:before:top-0 [&>em]:before:z-[-1] [&>em]:before:h-full [&>em]:before:w-[calc(100%+.3ch)] [&>em]:before:origin-left [&>em]:before:text-white [&>em]:before:content-['_']",
            )}
          >
            Make <em>content</em> your <strong>competitive advantage</strong>
          </h1>

          <div className="mx-auto max-w-[600px] text-center text-2xl tracking-[-0.48px]">
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
          {/*<div>*/}
          {/*  <IcSharpAttachMoney />*/}
          {/*</div>*/}

          <div className="flex items-center gap-2">
            <button
              onClick={copyToClipboard}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Copy Text
            </button>
            <div
              ref={textRef}
              className="rounded border border-gray-300 bg-gray-100 p-2"
            >
              npm create sanity@latest
            </div>
          </div>

          {copySuccess && <p className="mt-2 text-green-500">{copySuccess}</p>}
        </div>
      </Container>
    </section>
  );
}
