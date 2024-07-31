import { FaRegHandPointer } from "react-icons/fa6";
import { defineField, defineType } from "sanity";

export const button = defineType({
  name: "button",
  title: "Button",
  type: "object",
  icon: FaRegHandPointer,
  fields: [
    defineField({
      name: "cta",
      title: "Button",
      type: "customUrl",
    }),
    defineField({
      name: "variant",
      type: "string",
      title: "Variant",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Secondary", value: "secondary" },
          { title: "Secondary (Outline)", value: "secondary-outline" },
          { title: "Destructive", value: "destructive" },
          { title: "Outline", value: "outline" },
          { title: "Ghost", value: "ghost" },
          { title: "Link", value: "link" },
        ],
      },
    }),
    defineField({
      name: "size",
      type: "string",
      title: "Size",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Small", value: "sm" },
          { title: "Medium", value: "md" },
          { title: "Large", value: "lg" },
          { title: "Icon", value: "icon" },
        ],
      },
    }),
    defineField({
      name: "hide",
      type: "hideItem",
    }),
  ],
  options: {
    collapsible: true,
  },
  initialValue: {
    cta: {
      label: "Button",
      url: "#",
      newTab: false,
    },
    variant: "default",
    size: "sm",
  },
  preview: {
    select: {
      title: "cta.label",
      subtitle: "cta.url",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title || "Label needs to be set",
        subtitle: subtitle || "No URL present",
        media: FaRegHandPointer, // Use the imported icon here
      };
    },
  },
});
