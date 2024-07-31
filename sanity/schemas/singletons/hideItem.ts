import { defineType } from "sanity";

export const hideItem = defineType({
  name: "hideItem",
  title: "Hide",
  type: "boolean",
  description: "If true, this item will be hidden",
  initialValue: false,
});
