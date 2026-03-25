import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "../aspect-ratio";

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  argTypes: {
    ratio: {
      control: { type: "number", min: 0.1, max: 4, step: 0.1 },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const SixteenByNine: Story = {
  args: { ratio: 16 / 9 },
  render: (args) => (
    <AspectRatio ratio={args.ratio}>
      <div className="flex h-full w-full items-center justify-center bg-bm-dark-gray border border-bm-gray/20">
        <span className="text-sm text-bm-gray">16:9</span>
      </div>
    </AspectRatio>
  ),
};

export const ThreeByTwo: Story = {
  render: () => (
    <AspectRatio ratio={3 / 2}>
      <div className="flex h-full w-full items-center justify-center bg-bm-dark-gray border border-bm-gray/20">
        <span className="text-sm text-bm-gray">3:2</span>
      </div>
    </AspectRatio>
  ),
};

export const Square: Story = {
  render: () => (
    <AspectRatio ratio={1}>
      <div className="flex h-full w-full items-center justify-center bg-bm-dark-gray border border-bm-gray/20">
        <span className="text-sm text-bm-gray">1:1</span>
      </div>
    </AspectRatio>
  ),
};

export const AllRatios: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {[
        { ratio: 16 / 9, label: "16:9" },
        { ratio: 3 / 2, label: "3:2" },
        { ratio: 1, label: "1:1" },
      ].map(({ ratio, label }) => (
        <div key={label}>
          <p className="text-xs text-bm-gray mb-2">{label}</p>
          <AspectRatio ratio={ratio}>
            <div className="flex h-full w-full items-center justify-center bg-bm-dark-gray border border-bm-gray/20">
              <span className="text-xs text-bm-gray">{label}</span>
            </div>
          </AspectRatio>
        </div>
      ))}
    </div>
  ),
};
