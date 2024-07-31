import { FaRegImage } from "react-icons/fa6";
import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: "heading",
      type: "array",
      title: "Heading",
      description:
        "Italic will highlight the text and bold will bold the text.",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "block",
          title: "Block",
          styles: [{ title: "Heading 1", value: "h1" }], // Only allow bold and italic
          lists: [], // Disallow lists
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [],
          },
        },
      ],
    },
    {
      name: "subHeading",
      type: "text",
      title: "Subheading",
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [
        {
          type: "button",
        },
      ],
      validation: (rule) => rule.max(2),
    },
    {
      name: "copyPasteText",
      type: "string",
      title: "Copy Paste Text",
    },
    {
      name: "hide",
      type: "hideItem",
    },
  ],
  initialValue: {
    subHeading: "Change to desired subheading",
    copyPasteText: "Change to desired text",
  },
  preview: {
    select: {
      title: "Hero",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Hero",
        media: FaRegImage,
      };
    },
  },
});
