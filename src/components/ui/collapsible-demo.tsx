"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./collapsible";
import { Button } from "./button";

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="max-w-md space-y-2">
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
