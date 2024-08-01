import { IoIosLink } from "react-icons/io";
import { defineField, defineType } from "sanity";

export const socialProofGroup = defineType({
  name: "socialProofGroup",
  title: "Social Proof Group",
  type: "object",
  icon: IoIosLink,
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "customImage",
        },
      ],
      validation: (rule) => rule.required().min(1).max(8),
    },
  ],
  preview: {
    select: {
      title: "Image Group",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: "Image Group",
        media: IoIosLink,
      };
    },
  },
});
