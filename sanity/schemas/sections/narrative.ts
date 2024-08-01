import { FaRegImage } from "react-icons/fa6";
import { defineField, defineType } from "sanity";

export const narrativeSection = defineType({
  name: "narrative",
  type: "object",
  title: "Narrative",
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
    },
    {
      name: "subHeading",
      type: "array",
      title: "Subheading",
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
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
            ],
          },
        },
      ],
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
      name: "hide",
      type: "hideItem",
    },
  ],
  preview: {
    select: {
      title: "Narrative",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Narrative",
        media: FaRegImage,
      };
    },
  },
});
