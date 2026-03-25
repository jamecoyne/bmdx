import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "../scroll-area";
import { Separator } from "../separator";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const clients = [
  "Aleo", "TransMedics", "Bai", "Reebok", "Chime", "Meta",
  "Nike", "Spotify", "Dropbox", "Slack", "Figma", "Stripe",
  "Vercel", "Linear", "Notion", "Supabase",
];

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-48 w-full max-w-md border border-bm-gray/20 p-4">
      <div className="space-y-0">
        {clients.map((client, i) => (
          <div key={client}>
            <div className="text-sm text-bm-white py-3">{client}</div>
            {i < clients.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 border border-bm-gray/20">
      <div className="flex gap-4 p-4 w-max">
        {clients.map((client) => (
          <div
            key={client}
            className="flex h-20 w-32 shrink-0 items-center justify-center bg-bm-dark-gray text-sm text-bm-white"
          >
            {client}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const LongContent: Story = {
  render: () => (
    <ScrollArea className="h-64 max-w-lg border border-bm-gray/20 p-6">
      <div className="space-y-4">
        <h4 className="font-display text-lg font-medium text-bm-white">About Black Math</h4>
        {Array.from({ length: 8 }).map((_, i) => (
          <p key={i} className="text-sm text-bm-gray leading-relaxed">
            Black Math is a design & technology studio. Our work in Identity, Content, and Creative Technology always starts with art. We believe in the power of creative exploration to transform brands, products, and experiences.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
};
