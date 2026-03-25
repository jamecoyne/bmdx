import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "identity", "content", "creative", "success", "destructive"],
    },
  },
  args: {
    children: "Badge",
    variant: "default",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Outline: Story = {
  args: { variant: "outline", children: "Outline" },
};

export const Identity: Story = {
  args: { variant: "identity", children: "Identity" },
};

export const Content: Story = {
  args: { variant: "content", children: "Content" },
};

export const Creative: Story = {
  args: { variant: "creative", children: "Creative" },
};

export const Success: Story = {
  args: { variant: "success", children: "Success" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Destructive" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Badge>Default</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="identity">Identity</Badge>
      <Badge variant="content">Content</Badge>
      <Badge variant="creative">Creative</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
};
