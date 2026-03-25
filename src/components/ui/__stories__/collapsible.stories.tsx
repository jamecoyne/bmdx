"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "../collapsible";
import { Button } from "../button";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

function CollapsibleExample() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-bm-white">3 locations available</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="border border-bm-gray/20 px-4 py-2 text-sm text-bm-white">
        Boston
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="border border-bm-gray/20 px-4 py-2 text-sm text-bm-white">
          New York
        </div>
        <div className="border border-bm-gray/20 px-4 py-2 text-sm text-bm-white">
          Portland
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export const Default: Story = {
  render: () => <CollapsibleExample />,
};

function CollapsibleOpenExample() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-bm-white">Services</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="border border-bm-gray/20 px-4 py-2 text-sm text-bm-white">
        Identity
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="border border-bm-gray/20 px-4 py-2 text-sm text-bm-white">
          Content
        </div>
        <div className="border border-bm-gray/20 px-4 py-2 text-sm text-bm-white">
          Creative Technology
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export const DefaultOpen: Story = {
  render: () => <CollapsibleOpenExample />,
};
