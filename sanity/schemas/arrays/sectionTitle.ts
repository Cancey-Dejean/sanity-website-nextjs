import { defineType } from "sanity";

export const sectionTitle = defineType({
  name: "sectionTitle",
  type: "array",
  description: "Italic will highlight the text and bold will bold the text.",
  validation: (Rule) => Rule.required(),
  of: [
    {
      type: "block",
      title: "Block",
      styles: [
        { title: "Heading 1", value: "h1" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
        { title: "Heading 5", value: "h5" },
        { title: "Heading 6", value: "h6" },
      ], // Only allow bold and italic
      lists: [], // Disallow lists
      marks: {
        decorators: [{ title: "Bold", value: "strong" }],
        annotations: [],
      },
    },
  ],
});
