import type { Meta, StoryObj } from "@storybook/react";
import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "../toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    children: <Bold className="h-4 w-4" />,
    "aria-label": "Toggle bold",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: <Italic className="h-4 w-4" />,
    "aria-label": "Toggle italic",
  },
};

export const WithText: Story = {
  args: {
    children: "Bold",
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Underline className="h-4 w-4" />,
    "aria-label": "Toggle underline",
  },
};

export const FormattingToolbar: Story = {
  render: () => (
    <div className="flex gap-1">
      <Toggle aria-label="Bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Underline">
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};
