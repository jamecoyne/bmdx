import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "../radio-group";
import { Label } from "../label";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="boston">
      <div className="flex items-center space-x-3">
        <RadioGroupItem value="boston" id="r-boston" />
        <Label htmlFor="r-boston" className="text-bm-white">Boston</Label>
      </div>
      <div className="flex items-center space-x-3">
        <RadioGroupItem value="nyc" id="r-nyc" />
        <Label htmlFor="r-nyc" className="text-bm-white">New York</Label>
      </div>
      <div className="flex items-center space-x-3">
        <RadioGroupItem value="portland" id="r-portland" />
        <Label htmlFor="r-portland" className="text-bm-white">Portland</Label>
      </div>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="identity" className="flex gap-6">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="identity" id="rh-id" />
        <Label htmlFor="rh-id" className="text-bm-white">Identity</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="content" id="rh-co" />
        <Label htmlFor="rh-co" className="text-bm-white">Content</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="tech" id="rh-tech" />
        <Label htmlFor="rh-tech" className="text-bm-white">Technology</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <RadioGroup defaultValue="boston">
      <div className="flex items-center space-x-3">
        <RadioGroupItem value="boston" id="rd-boston" />
        <Label htmlFor="rd-boston" className="text-bm-white">Boston</Label>
      </div>
      <div className="flex items-center space-x-3">
        <RadioGroupItem value="nyc" id="rd-nyc" disabled />
        <Label htmlFor="rd-nyc" className="text-bm-white opacity-50">New York (unavailable)</Label>
      </div>
      <div className="flex items-center space-x-3">
        <RadioGroupItem value="portland" id="rd-portland" />
        <Label htmlFor="rd-portland" className="text-bm-white">Portland</Label>
      </div>
    </RadioGroup>
  ),
};
