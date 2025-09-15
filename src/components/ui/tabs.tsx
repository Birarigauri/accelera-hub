import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-16 items-center justify-center rounded-3xl bg-white/85 backdrop-blur-xl border border-gray-200/60 p-2 text-gray-700 shadow-xl shadow-blue-500/15 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/8 before:via-purple-500/8 before:to-pink-500/8 before:rounded-3xl gap-1",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative inline-flex items-center justify-center whitespace-nowrap rounded-2xl px-8 py-4 text-sm font-semibold transition-all duration-500 ease-out hover:bg-white/95 hover:text-blue-700 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 hover:backdrop-blur-lg data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:via-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-blue-500/30 data-[state=active]:-translate-y-0.5 data-[state=active]:border data-[state=active]:border-blue-400/40 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/30 before:to-transparent before:opacity-0 hover:before:opacity-100 data-[state=active]:before:opacity-100 after:absolute after:inset-0 after:rounded-2xl after:ring-2 after:ring-blue-500/20 after:opacity-0 hover:after:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 disabled:pointer-events-none disabled:opacity-50 z-10",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
