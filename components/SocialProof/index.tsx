"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/Container";
import { twMerge } from "tailwind-merge";

type SocialProofProps = {
  images: [];
  hide?: boolean;
};

export default function SocialProof({ images, hide }: SocialProofProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <div
      className={twMerge("animate-fade-in", hide && "hidden")}
      ref={containerRef}
    >
      <Container>
        <motion.div
          className={`grid grid-cols-8 gap-x-9 gap-y-8 transition-all duration-300 ease-in-out`}
          style={{
            opacity,
          }}
        >
          {images.map(
            ({ asset, alt }: { asset: any; alt: string }, index: number) => (
              <Image
                key={index}
                src={asset.url}
                alt={alt}
                width={asset.metadata.dimensions.width}
                height={asset.metadata.dimensions.height}
              />
            ),
          )}
        </motion.div>
      </Container>
    </div>
  );
}
