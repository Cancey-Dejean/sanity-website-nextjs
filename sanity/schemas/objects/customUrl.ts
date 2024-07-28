import { IoIosLink } from "react-icons/io";
import { defineField, defineType } from "sanity";

export const customUrl = defineType({
  name: "customUrl",
  title: "Link",
  type: "object",
  icon: IoIosLink,
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: true,
        }),
    }),
    defineField({
      name: "newTab",
      type: "boolean",
      title: "Open in new tab?",
    }),
  ],
  initialValue: {
    label: "Link",
    newTab: false,
  },
  preview: {
    select: {
      title: "label",
      subtitle: "url",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Label needs to be set",
        subtitle: subtitle || "No URL present",
        media: IoIosLink,
      };
    },
  },
});
