import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../hover-card";
import { Avatar, AvatarFallback } from "../avatar";

const meta: Meta<typeof HoverCard> = {
  title: "Components/HoverCard",
  component: HoverCard,
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer text-bm-blue underline underline-offset-4 transition-colors hover:text-bm-white">
          @blackmath
        </span>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-4">
          <Avatar>
            <AvatarFallback>BM</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-medium text-bm-white">Black Math</h4>
            <p className="text-xs text-bm-gray">A design & technology studio. Always starts with art.</p>
            <p className="text-xs text-bm-gray/60">Boston / New York / Portland</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const LinkPreview: Story = {
  render: () => (
    <p className="text-sm text-bm-gray">
      Check out{" "}
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#" className="text-bm-blue underline underline-offset-4 hover:text-bm-white">
            our latest case study
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-bm-white">Aleo — Brand Identity</h4>
            <p className="text-xs text-bm-gray">Building a brand through creative iteration. A comprehensive identity system for the blockchain platform.</p>
          </div>
        </HoverCardContent>
      </HoverCard>
      {" "}for Aleo.
    </p>
  ),
};
