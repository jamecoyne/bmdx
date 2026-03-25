import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../input";
import { Label } from "../label";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "Let's be friends!",
    type: "text",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "url"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Email: Story = {
  args: { type: "email", placeholder: "you@example.com" },
};

export const Password: Story = {
  args: { type: "password", placeholder: "Enter password" },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled input" },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 max-w-sm">
      <Label htmlFor="email-story">Email</Label>
      <Input id="email-story" type="email" placeholder="Let's be friends!" />
    </div>
  ),
};

export const WithValue: Story = {
  args: { defaultValue: "hello@blackmath.com" },
};
