import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../textarea";
import { Label } from "../label";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  args: {
    placeholder: "Tell us about your project...",
  },
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 max-w-md">
      <Label htmlFor="msg">Message</Label>
      <Textarea id="msg" placeholder="Tell us about your project..." />
    </div>
  ),
};

export const WithValue: Story = {
  args: { defaultValue: "We're looking for a full rebrand including identity, content strategy, and a new website." },
};
