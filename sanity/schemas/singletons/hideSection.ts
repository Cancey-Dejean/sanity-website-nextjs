import { defineType } from "sanity";

export const hideSection = defineType({
  name: "hideSection",
  title: "Hide Section",
  type: "boolean",
  description: "If true, this section will be hidden",
  initialValue: false,
});
