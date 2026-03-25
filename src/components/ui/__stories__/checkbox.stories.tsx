import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../checkbox";
import { Label } from "../label";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-3">
      <Checkbox id="cb" defaultChecked />
      <Label htmlFor="cb" className="text-bm-white">Identity</Label>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Checkbox id="id" defaultChecked />
        <Label htmlFor="id" className="text-bm-white">Identity</Label>
      </div>
      <div className="flex items-center space-x-3">
        <Checkbox id="co" />
        <Label htmlFor="co" className="text-bm-white">Content</Label>
      </div>
      <div className="flex items-center space-x-3">
        <Checkbox id="ct" />
        <Label htmlFor="ct" className="text-bm-white">Creative Technology</Label>
      </div>
    </div>
  ),
};
