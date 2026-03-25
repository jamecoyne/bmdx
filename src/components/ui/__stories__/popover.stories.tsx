import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverTrigger, PopoverContent } from "../popover";
import { Button } from "../button";
import { Input } from "../input";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-3">
          <h4 className="font-display text-sm font-medium">Newsletter</h4>
          <p className="text-xs text-bm-gray">Subscribe to get updates on our latest work.</p>
          <Input placeholder="Let's be friends!" />
          <Button size="sm" className="w-full">Subscribe</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Simple: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">Info</Button>
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <p className="text-sm text-bm-gray">
          A design & technology studio based in Boston, New York, Portland, Richmond, and Costa Rica.
        </p>
      </PopoverContent>
    </Popover>
  ),
};
