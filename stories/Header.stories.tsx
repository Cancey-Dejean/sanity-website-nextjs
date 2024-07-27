import type { Meta, StoryObj } from "@storybook/react";
import Header from "../components/Header";
import HeaderWrapper from "@/components/Header/HeaderContent";

const meta = {
  title: "Components/Header",
  component: Header,
  args: {},
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Navigation: Story = {
  render: (args) => {
    return <Header {...args} />;
  },
};
