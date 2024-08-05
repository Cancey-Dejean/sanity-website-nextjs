"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortableTextBlock } from "next-sanity";
import { Tab } from "@/types";

export default function AnimatedTabs({ tabs }: { tabs: Tab[] }) {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="mx-auto w-full max-w-2xl">
      <h2 className="heading-md font-inter font-extrabold leading-none">
        {tabs.find((tab) => tab.id === activeTab)?.heading}
      </h2>
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
                  {tab.content}
                </motion.div>
              );
            }
            return null;
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
