import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "../slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {};

export const Range: Story = {
  args: { defaultValue: [25, 75] },
};

export const SmallStep: Story = {
  args: { defaultValue: [30], step: 10 },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: [40] },
};
