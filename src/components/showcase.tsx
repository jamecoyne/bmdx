"use client";

import { Bold, Italic, Underline, ChevronDown, Settings, User, LogOut, Plus, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { AnimatedProgress } from "@/components/ui/animated-progress";
import { CollapsibleDemo } from "@/components/ui/collapsible-demo";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <h2 className="font-display text-2xl font-medium text-bm-white tracking-tight">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function ColorSwatch({ name, className, textClass = "text-bm-black" }: { name: string; className: string; textClass?: string }) {
  return (
    <div className="space-y-2">
      <div className={`h-16 w-full ${className} flex items-end p-2`}>
        <span className={`text-xs font-medium ${textClass}`}>{name}</span>
      </div>
    </div>
  );
}

const clients = ["Aleo", "TransMedics", "Bai", "Reebok", "Chime", "Meta", "Nike", "Spotify", "Dropbox", "Slack", "Figma", "Stripe"];

export function Showcase() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-bm-black">
        {/* Header */}
        <header className="border-b border-bm-gray/10">
          <div className="mx-auto max-w-6xl px-8 py-12">
            <h1 className="font-display text-5xl font-medium tracking-tight text-bm-white">
              BMDX
            </h1>
            <p className="mt-3 text-lg text-bm-gray">
              A design system and component library inspired by{" "}
              <a href="https://blackmath.com" target="_blank" rel="noopener noreferrer" className="text-bm-white transition-colors hover:text-bm-blue">
                Black Math
              </a>
            </p>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-bm-green via-bm-blue via-50% to-bm-lavender" />
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-8 py-16 space-y-20">

          {/* ─── Typography ─── */}
          <Section title="Typography">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-bm-gray mb-4">PP Valve — Display Font</p>
                <h1 className="font-display text-6xl font-medium tracking-tight text-bm-white">Always starts with art.</h1>
                <h2 className="font-display text-4xl font-medium tracking-tight text-bm-white mt-2">A design & technology studio</h2>
                <h3 className="font-display text-2xl font-medium tracking-tight text-bm-white mt-2">Identity, Content, Creative Technology</h3>
              </div>
              <Separator />
              <div>
                <p className="text-xs uppercase tracking-widest text-bm-gray mb-4">PP Mori — Body Font</p>
                <p className="text-2xl text-bm-white leading-relaxed">Our work in Identity, Content, and Creative Technology always starts with art.</p>
                <p className="text-base text-bm-gray mt-3 leading-relaxed max-w-2xl">
                  Black Math is a design & technology studio. We believe in the power of art to transform brands, products, and experiences. Every project begins with creative exploration.
                </p>
                <p className="text-sm text-bm-gray mt-3">Small body text — captions and labels use PP Mori at smaller sizes.</p>
              </div>
            </div>
          </Section>

          {/* ─── Colors ─── */}
          <Section title="Colors">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              <ColorSwatch name="Black" className="bg-bm-black border border-bm-gray/20" textClass="text-bm-white" />
              <ColorSwatch name="White" className="bg-bm-white" />
              <ColorSwatch name="Gray" className="bg-bm-gray" />
              <ColorSwatch name="Dark Gray" className="bg-bm-dark-gray" textClass="text-bm-white" />
              <ColorSwatch name="Yellow" className="bg-bm-yellow" />
              <ColorSwatch name="Orange" className="bg-bm-orange" textClass="text-bm-white" />
              <ColorSwatch name="Blue" className="bg-bm-blue" textClass="text-bm-white" />
              <ColorSwatch name="Green" className="bg-bm-green" textClass="text-bm-white" />
              <ColorSwatch name="Lavender" className="bg-bm-lavender" />
              <ColorSwatch name="Pink" className="bg-bm-pink" />
              <ColorSwatch name="Beige" className="bg-bm-beige" />
              <ColorSwatch name="Red" className="bg-bm-red" textClass="text-bm-white" />
            </div>
            <div className="mt-4">
              <p className="text-xs uppercase tracking-widest text-bm-gray mb-2">Gradient</p>
              <div className="h-2 w-full bg-gradient-to-r from-bm-pink via-bm-yellow via-20% to-bm-orange" />
              <div className="h-2 w-full bg-gradient-to-r from-bm-orange via-bm-lavender via-50% to-bm-blue" />
              <div className="h-2 w-full bg-gradient-to-r from-bm-blue to-bm-green" />
            </div>
          </Section>

          {/* ─── Buttons ─── */}
          <Section title="Buttons">
            <div className="flex flex-wrap gap-4 items-center">
              <Button>Default</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="gradient">Gradient</Button>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Plus className="h-4 w-4" /></Button>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>Disabled Outline</Button>
            </div>
          </Section>

          {/* ─── Badges ─── */}
          <Section title="Badges">
            <div className="flex flex-wrap gap-3 items-center">
              <Badge>Default</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="identity">Identity</Badge>
              <Badge variant="content">Content</Badge>
              <Badge variant="creative">Creative</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </Section>

          {/* ─── Inputs & Forms ─── */}
          <Section title="Inputs & Forms">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Let's be friends!" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your project..." />
              </div>
            </div>
          </Section>

          {/* ─── Select ─── */}
          <Section title="Select">
            <div className="max-w-xs">
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
            </div>
          </Section>

          {/* ─── Checkbox & Radio ─── */}
          <Section title="Checkbox & Radio Group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-bm-gray">Checkboxes</p>
                <div className="flex items-center space-x-3">
                  <Checkbox id="sc-identity" defaultChecked />
                  <Label htmlFor="sc-identity" className="text-bm-white">Identity</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox id="sc-content" />
                  <Label htmlFor="sc-content" className="text-bm-white">Content</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox id="sc-tech" />
                  <Label htmlFor="sc-tech" className="text-bm-white">Creative Technology</Label>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-bm-gray">Radio Group</p>
                <RadioGroup defaultValue="boston">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="boston" id="sc-boston" />
                    <Label htmlFor="sc-boston" className="text-bm-white">Boston</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="nyc" id="sc-nyc" />
                    <Label htmlFor="sc-nyc" className="text-bm-white">New York</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="portland" id="sc-portland" />
                    <Label htmlFor="sc-portland" className="text-bm-white">Portland</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </Section>

          {/* ─── Switch ─── */}
          <Section title="Switch">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Switch id="sc-dark-mode" defaultChecked />
                <Label htmlFor="sc-dark-mode" className="text-bm-white">Dark Mode</Label>
              </div>
              <div className="flex items-center space-x-3">
                <Switch id="sc-notifications" />
                <Label htmlFor="sc-notifications" className="text-bm-white">Notifications</Label>
              </div>
            </div>
          </Section>

          {/* ─── Slider ─── */}
          <Section title="Slider">
            <div className="max-w-md space-y-6">
              <Slider defaultValue={[50]} max={100} step={1} />
              <Slider defaultValue={[25, 75]} max={100} step={1} />
            </div>
          </Section>

          {/* ─── Progress ─── */}
          <Section title="Progress">
            <div className="max-w-md space-y-4">
              <AnimatedProgress />
              <Progress value={33} />
              <p className="text-xs text-bm-gray">33% — static</p>
            </div>
          </Section>

          {/* ─── Tabs ─── */}
          <Section title="Tabs">
            <Tabs defaultValue="identity">
              <TabsList>
                <TabsTrigger value="identity">Identity</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
              </TabsList>
              <TabsContent value="identity">
                <p className="text-sm text-bm-gray max-w-xl">
                  Brand identity is the visual and conceptual foundation of any great company. We build identities that are distinctive, flexible, and built to last.
                </p>
              </TabsContent>
              <TabsContent value="content">
                <p className="text-sm text-bm-gray max-w-xl">
                  Content creation that moves people. From motion design to photography, we craft narratives that resonate and connect.
                </p>
              </TabsContent>
              <TabsContent value="technology">
                <p className="text-sm text-bm-gray max-w-xl">
                  Creative technology bridges the gap between design vision and digital reality. Interactive experiences, generative art, and custom tools.
                </p>
              </TabsContent>
            </Tabs>
          </Section>

          {/* ─── Accordion ─── */}
          <Section title="Accordion">
            <Accordion type="single" collapsible className="max-w-xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>What services does Black Math offer?</AccordionTrigger>
                <AccordionContent>
                  Identity, Content, and Creative Technology. Each discipline informs the others, creating cohesive brand experiences.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Where are you located?</AccordionTrigger>
                <AccordionContent>
                  Boston, New York, Portland, Richmond, and Costa Rica. Our distributed team brings diverse perspectives to every project.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What does &ldquo;starts with art&rdquo; mean?</AccordionTrigger>
                <AccordionContent>
                  Every project begins with creative exploration and artistic expression before moving into strategic and technical execution.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Section>

          {/* ─── Collapsible ─── */}
          <Section title="Collapsible">
            <CollapsibleDemo />
          </Section>

          {/* ─── Avatar ─── */}
          <Section title="Avatar">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback>BM</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback className="text-base">JC</AvatarFallback>
              </Avatar>
              <Avatar className="h-14 w-14">
                <AvatarFallback className="text-lg bg-bm-blue text-bm-white">AB</AvatarFallback>
              </Avatar>
            </div>
          </Section>

          {/* ─── Separator ─── */}
          <Section title="Separator">
            <div className="space-y-4 max-w-md">
              <div>
                <p className="text-sm text-bm-white">Identity</p>
                <Separator className="my-2" />
                <p className="text-sm text-bm-white">Content</p>
                <Separator className="my-2" />
                <p className="text-sm text-bm-white">Creative Technology</p>
              </div>
              <div className="flex h-5 items-center space-x-4 text-sm">
                <span className="text-bm-white">Work</span>
                <Separator orientation="vertical" />
                <span className="text-bm-white">About</span>
                <Separator orientation="vertical" />
                <span className="text-bm-white">Contact</span>
              </div>
            </div>
          </Section>

          {/* ─── Dialog ─── */}
          <Section title="Dialog">
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
          </Section>

          {/* ─── Alert Dialog ─── */}
          <Section title="Alert Dialog">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Project</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the project and all associated files.
                </AlertDialogDescription>
                <div className="mt-6 flex justify-end gap-3">
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Delete</AlertDialogAction>
                </div>
              </AlertDialogContent>
            </AlertDialog>
          </Section>

          {/* ─── Dropdown Menu ─── */}
          <Section title="Dropdown Menu">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Menu <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Section>

          {/* ─── Popover ─── */}
          <Section title="Popover">
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
          </Section>

          {/* ─── Hover Card ─── */}
          <Section title="Hover Card">
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
          </Section>

          {/* ─── Tooltip ─── */}
          <Section title="Tooltip">
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>More information</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Always starts with art</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </Section>

          {/* ─── Toggle & Toggle Group ─── */}
          <Section title="Toggle & Toggle Group">
            <div className="space-y-4">
              <div className="flex gap-2">
                <Toggle aria-label="Toggle bold">
                  <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle aria-label="Toggle italic">
                  <Italic className="h-4 w-4" />
                </Toggle>
                <Toggle aria-label="Toggle underline">
                  <Underline className="h-4 w-4" />
                </Toggle>
              </div>
              <ToggleGroup type="single" variant="outline">
                <ToggleGroupItem value="identity">Identity</ToggleGroupItem>
                <ToggleGroupItem value="content">Content</ToggleGroupItem>
                <ToggleGroupItem value="technology">Technology</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </Section>

          {/* ─── Scroll Area ─── */}
          <Section title="Scroll Area">
            <ScrollArea className="h-48 w-full max-w-md border border-bm-gray/20 p-4">
              <div className="space-y-4">
                {clients.map((client) => (
                  <div key={client} className="text-sm text-bm-white py-2 border-b border-bm-gray/10 last:border-0">
                    {client}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Section>

          {/* ─── Aspect Ratio ─── */}
          <Section title="Aspect Ratio">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
              <div>
                <p className="text-xs text-bm-gray mb-2">16:9</p>
                <AspectRatio ratio={16 / 9}>
                  <div className="flex h-full w-full items-center justify-center bg-bm-dark-gray border border-bm-gray/20">
                    <span className="text-sm text-bm-gray">16:9</span>
                  </div>
                </AspectRatio>
              </div>
              <div>
                <p className="text-xs text-bm-gray mb-2">3:2</p>
                <AspectRatio ratio={3 / 2}>
                  <div className="flex h-full w-full items-center justify-center bg-bm-dark-gray border border-bm-gray/20">
                    <span className="text-sm text-bm-gray">3:2</span>
                  </div>
                </AspectRatio>
              </div>
              <div>
                <p className="text-xs text-bm-gray mb-2">1:1</p>
                <AspectRatio ratio={1}>
                  <div className="flex h-full w-full items-center justify-center bg-bm-dark-gray border border-bm-gray/20">
                    <span className="text-sm text-bm-gray">1:1</span>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </Section>

        </main>

        {/* Footer */}
        <footer className="border-t border-bm-gray/10 mt-20">
          <div className="mx-auto max-w-6xl px-8 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="font-display text-lg font-medium text-bm-white">BMDX</p>
                <p className="text-sm text-bm-gray mt-1">Design system inspired by Black Math</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-bm-gray">
                <span>Boston</span>
                <div className="h-1 w-1 rounded-full bg-bm-gray" />
                <span>New York</span>
                <div className="h-1 w-1 rounded-full bg-bm-gray" />
                <span>Portland</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
