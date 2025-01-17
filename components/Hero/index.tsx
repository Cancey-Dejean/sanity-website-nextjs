"use client";
import Container from "@/components/Container";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  IcSharpAttachMoney,
  MaterialSymbolsLightCheck,
  PhCopyDuotone,
} from "@/components/ui/svgIcons";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import SectionTitle from "@/components/SectionTitle";
import { PortableText, PortableTextBlock } from "next-sanity";
import Link from "next/link";
import { LinkItem } from "@/types";
import ButtonGroup from "@/components/ButtonGroup";

export default function Hero({
  heading,
  subHeading,
  buttons,
  copyPasteText,
  hide,
}: {
  heading: PortableTextBlock;
  subHeading?: string;
  copyPasteText?: string;
  buttons: [];
  hide: boolean;
}) {
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
    <section
      className={twMerge(
        "flex h-[85dvh] min-h-[575px] animate-fade-in items-center justify-center",
        hide && "hidden",
      )}
    >
      <Container className="flex flex-col items-center py-12">
        <div className="flex flex-col items-center gap-8">
          <SectionTitle
            size="display-lg"
            className="text-center tracking-[-.025em]"
          >
            <PortableText value={heading || "Heading"} />
          </SectionTitle>

          <div className="mx-auto max-w-[50rem] text-balance text-center text-2xl tracking-[-0.48px]">
            <p>{subHeading}</p>
          </div>

          {buttons && buttons.length > 0 && <ButtonGroup buttons={buttons} />}
        </div>

        {copyPasteText && (
          <div className="mt-5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={copyToClipboard}
                className="group relative flex size-10 items-center justify-center text-cyan-200"
              >
                <IcSharpAttachMoney className="size-5 scale-100 text-[currentColor] transition-all duration-300 ease-in-out group-hover:scale-0" />

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

              <p
                ref={textRef}
                className="font-jetBrainsMono text-sm text-gray-700"
              >
                {copyPasteText}
              </p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
