import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../switch";
import { Label } from "../label";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-3">
      <Switch id="dm" defaultChecked />
      <Label htmlFor="dm" className="text-bm-white">Dark Mode</Label>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Switch id="s1" defaultChecked />
        <Label htmlFor="s1" className="text-bm-white">Dark Mode</Label>
      </div>
      <div className="flex items-center space-x-3">
        <Switch id="s2" />
        <Label htmlFor="s2" className="text-bm-white">Notifications</Label>
      </div>
      <div className="flex items-center space-x-3">
        <Switch id="s3" disabled />
        <Label htmlFor="s3" className="text-bm-white opacity-50">Beta features</Label>
      </div>
    </div>
  ),
};
