import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="identity">
      <TabsList>
        <TabsTrigger value="identity">Identity</TabsTrigger>
        <TabsTrigger value="content">Content</TabsTrigger>
        <TabsTrigger value="technology">Technology</TabsTrigger>
      </TabsList>
      <TabsContent value="identity">
        <p className="text-sm text-bm-gray max-w-xl">
          Brand identity is the visual and conceptual foundation of any great company.
        </p>
      </TabsContent>
      <TabsContent value="content">
        <p className="text-sm text-bm-gray max-w-xl">
          Content creation that moves people. From motion design to photography.
        </p>
      </TabsContent>
      <TabsContent value="technology">
        <p className="text-sm text-bm-gray max-w-xl">
          Creative technology bridges the gap between design vision and digital reality.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const TwoTabs: Story = {
  render: () => (
    <Tabs defaultValue="work">
      <TabsList>
        <TabsTrigger value="work">Work</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        <p className="text-sm text-bm-gray">Selected projects and case studies.</p>
      </TabsContent>
      <TabsContent value="about">
        <p className="text-sm text-bm-gray">A design & technology studio.</p>
      </TabsContent>
    </Tabs>
  ),
};
