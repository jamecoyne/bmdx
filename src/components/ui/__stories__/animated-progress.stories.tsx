import type { Meta, StoryObj } from "@storybook/react";
import { AnimatedProgress } from "../animated-progress";

const meta: Meta<typeof AnimatedProgress> = {
  title: "Components/AnimatedProgress",
  component: AnimatedProgress,
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AnimatedProgress>;

export const Default: Story = {};
