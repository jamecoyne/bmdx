import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "../separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      <p className="text-sm text-bm-white">Identity</p>
      <Separator />
      <p className="text-sm text-bm-white">Content</p>
      <Separator />
      <p className="text-sm text-bm-white">Creative Technology</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <span className="text-bm-white">Work</span>
      <Separator orientation="vertical" />
      <span className="text-bm-white">About</span>
      <Separator orientation="vertical" />
      <span className="text-bm-white">Contact</span>
    </div>
  ),
};
