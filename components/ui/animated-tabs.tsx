"use client";
import { useState } from "react";
import { motion } from "framer-motion";

let tabs = [
  {
    id: "world",
    label: "World",
    heading: "Heading 1",
    content: "Content 1",
  },
  {
    id: "ny",
    label: "N.Y.",
    heading: "Heading 2",
    content: "Content 2",
  },
  {
    id: "business",
    label: "Business",
    heading: "Heading 3",
    content: "Content 3",
  },
  {
    id: "arts",
    label: "Arts",
    heading: "Heading 4",
    content: "Content 4",
  },
  {
    id: "science",
    label: "Science",
    heading: "Heading 5",
    content: "Content 5",
  },
];

export default function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
            }}
            className={`${
              activeTab === tab.id ? "" : "hover:opacity-50"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-2 outline-red-400 transition focus-visible:outline`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 rounded-full bg-white"
                style={{
                  borderRadius: "9999",
                }}
                transition={{
                  type: "spring",
                  duration: 0.6,
                }}
              />
            )}

            <span className="relative z-10 mix-blend-exclusion">
              {" "}
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
