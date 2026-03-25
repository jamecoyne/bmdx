import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../label";
import { Input } from "../input";
import { Checkbox } from "../checkbox";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  args: {
    children: "Label text",
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithInput: Story = {
  render: () => (
    <div className="space-y-2 max-w-sm">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Your name" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-3">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className="text-bm-white">Accept terms and conditions</Label>
    </div>
  ),
};
