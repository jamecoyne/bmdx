import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator } from "../select";
import { Label } from "../label";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  decorators: [
    (Story) => (
      <div className="max-w-xs">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a service" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="identity">Identity</SelectItem>
        <SelectItem value="content">Content</SelectItem>
        <SelectItem value="creative">Creative Technology</SelectItem>
        <SelectItem value="strategy">Strategy</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <Label>Service</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose one..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="identity">Identity</SelectItem>
          <SelectItem value="content">Content</SelectItem>
          <SelectItem value="creative">Creative Technology</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>East Coast</SelectLabel>
          <SelectItem value="boston">Boston</SelectItem>
          <SelectItem value="nyc">New York</SelectItem>
          <SelectItem value="richmond">Richmond</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>West Coast</SelectLabel>
          <SelectItem value="portland">Portland</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>International</SelectLabel>
          <SelectItem value="costa-rica">Costa Rica</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger>
        <SelectValue placeholder="Disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Option A</SelectItem>
      </SelectContent>
    </Select>
  ),
};
