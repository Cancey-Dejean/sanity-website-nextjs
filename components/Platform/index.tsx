"use client";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { Badge } from "@/components/ui/badge";
import {
  PlatformSectionApiIllustration,
  PlatformSectionIllustrationLayers,
  PlatformSectionStudioIllustration,
} from "@/components/ui/svgIcons";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import AnimatedTabs from "@/components/ui/animated-tabs";
import { tabs } from "@/constants/fakeData";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import TabContentDefault from "@/components/Platform/TabContentDefault";
import TabContentCase from "@/components/Platform/TabContentCase";

export default function Platform() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <section className="bg-black text-white">
      <Container>
        <div className="mb-12 text-center">
          <p className="heading-md font-inter font-extrabold leading-none text-red-400">
            Platform overview
          </p>

          <SectionTitle size="display-md" className="font-light leading-[1.2]">
            Sanity Composable Content Cloud
          </SectionTitle>
        </div>
      </Container>

      <div className="relative">
        <div className="mx-auto grid max-w-[1036px] grid-cols-[1fr_240px_1fr] grid-rows-3 gap-12">
          <Image
            src="/images/platform-section-left.svg"
            alt="Platform illustration"
            width={214}
            height={473}
            className="absolute left-0 h-full"
          />

          <Image
            src="/images/platform-section-right.svg"
            alt="Platform illustration"
            width={254}
            height={473}
            className="absolute right-0 h-full"
          />

          {/* SVGs */}
          <div className="col-start-2 row-span-3 grid gap-6">
            <PlatformSectionStudioIllustration />

            <PlatformSectionApiIllustration />

            <PlatformSectionIllustrationLayers />
          </div>

          {/* Text 1 */}
          <div className="col-start-3">
            <TextGroup
              title="Studio"
              description="A fully customizable content workspace that mirrors your business and unleashes velocity and creativity."
            />
          </div>

          {/* Text 2 */}
          <div className="row-start-2">
            <TextGroup
              alignment="right"
              title="APIs"
              description="Powerful and intuitive interfaces that are the fabric of your composable content architecture."
            />
          </div>

          {/* Text 3 */}
          <div className="col-start-3 row-start-3">
            <TextGroup
              title="Content Lake"
              description="A no-ops storage and distribution layer that syncs content and data for use by teams across your organization."
            />
          </div>
        </div>
      </div>

      <Container>
        {/*<h2 className="heading-md font-inter font-extrabold leading-none">*/}
        {/*  {tabs.find((tab) => tab.id === activeTab)?.heading}*/}
        {/*</h2>*/}

        <div
          role="tablist"
          aria-label="News categories"
          className="flex space-x-1 rounded-full bg-red-400 p-1"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`${tab.id}-panel`}
              id={`${tab.id}-tab`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              className={`${
                activeTab === tab.id ? "" : "hover:opacity-75"
              } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-red-400 transition focus-visible:outline`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-white"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10 mix-blend-exclusion">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-4">
          <AnimatePresence mode="wait">
            {tabs.map((tab) => {
              if (tab.id === activeTab) {
                return (
                  <motion.div
                    key={tab.id}
                    role="tabpanel"
                    id={`${tab.id}-panel`}
                    aria-labelledby={`${tab.id}-tab`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TabContentDefault
                    // title={tab.title}
                    // description={tab.description}
                    // items={tab.items}
                    // buttons={tab.buttons}
                    // img={tab.img}
                    // imgAlt={tab.imgAlt}
                    />
                  </motion.div>
                );
              }
              return null;
            })}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

function TextGroup({
  title,
  description,
  alignment = "left",
}: {
  title: string;
  description: string;
  alignment?: "left" | "right";
}) {
  return (
    <div className={twMerge(alignment === "left" ? "text-left" : "text-right")}>
      <Badge className="mb-3 hover:bg-gray-800">{title}</Badge>
      <p>{description}</p>
    </div>
  );
}
