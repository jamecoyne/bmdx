import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "../dialog";
import { Button } from "../button";
import { Input } from "../input";
import { Textarea } from "../textarea";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Get in Touch</DialogTitle>
        <DialogDescription>
          Tell us about your project and we&apos;ll get back to you within 24 hours.
        </DialogDescription>
        <div className="mt-6 space-y-4">
          <Input placeholder="Your email" />
          <Textarea placeholder="Project details..." />
          <Button className="w-full">Send Message</Button>
        </div>
      </DialogContent>
    </Dialog>
  ),
};

export const Simple: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Info</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>About Black Math</DialogTitle>
        <DialogDescription>
          A design & technology studio. Our work in Identity, Content, and Creative Technology always starts with art.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  ),
};
