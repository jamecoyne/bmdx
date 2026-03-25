import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  decorators: [
    (Story) => (
      <div className="max-w-xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What services does Black Math offer?</AccordionTrigger>
        <AccordionContent>
          Identity, Content, and Creative Technology. Each discipline informs the others, creating cohesive brand experiences.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Where are you located?</AccordionTrigger>
        <AccordionContent>
          Boston, New York, Portland, Richmond, and Costa Rica.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What does &ldquo;starts with art&rdquo; mean?</AccordionTrigger>
        <AccordionContent>
          Every project begins with creative exploration and artistic expression before moving into strategic and technical execution.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Identity</AccordionTrigger>
        <AccordionContent>
          Brand strategy, visual identity systems, naming, and brand guidelines.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Content</AccordionTrigger>
        <AccordionContent>
          Motion design, photography, video production, and content strategy.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Creative Technology</AccordionTrigger>
        <AccordionContent>
          Web development, interactive experiences, generative art, and custom tools.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Already open</AccordionTrigger>
        <AccordionContent>
          This accordion item starts in the open state.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Click to open</AccordionTrigger>
        <AccordionContent>
          This one is closed by default.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
