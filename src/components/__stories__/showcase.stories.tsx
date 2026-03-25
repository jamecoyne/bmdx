import type { Meta, StoryObj } from "@storybook/react";
import { Showcase } from "../showcase";

const meta: Meta<typeof Showcase> = {
  title: "Pages/Showcase",
  component: Showcase,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Showcase>;

export const Default: Story = {};
