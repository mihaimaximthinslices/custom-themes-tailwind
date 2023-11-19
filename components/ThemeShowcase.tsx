"use client";
import CustomThemeProvider from "@/hooks/CustomThemeProvider";
import { forwardRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/utils";

export default function ThemeShowcase({
  initialTheme,
}: {
  initialTheme?: string;
}) {
  const [selectedTheme, setSelectedTheme] = useState<string>(
    initialTheme ?? "light",
  );

  return (
    <CustomThemeProvider themeClass={selectedTheme}>
      <section className="p-6 bg-bg-color-2 flex flex-col gap-4 rounded-md">
        <div className="flex gap-2 flex-col md:flex-row">
          <h1 className="text-t-color-2">
            You can have multiple themes for different components
          </h1>
          <select
            onChange={(e) => {
              const theme = e.target!.value;
              setSelectedTheme(theme);
            }}
            value={selectedTheme}
            className="bg-bg-color-2 text-t-color-2"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="green">Green</option>
          </select>
        </div>
        <div className="bg-ic-color-3 p-4 rounded-md border border-bs-color-3">
          <p className="text-t-color-2 ">A themed paragraph</p>
        </div>
        <div className="p-4 w-full flex justify-center gap-6 flex-col">
          <AccordionDemo />
          <div className="shadow-md h-fit rounded-md">
            <button className="focusable h-fit text-t-color-2 border border-bs-color-3 bg-ic-color-2 p-2 rounded-md">
              This is a custom button with focus styles and shadow
            </button>
          </div>
        </div>
      </section>
    </CustomThemeProvider>
  );
}

const AccordionDemo = () => (
  <Accordion.Root
    className="bg-bg-color-1 rounded-md shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and
        feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

const AccordionItem = forwardRef(
  (
    {
      children,
      className,
      ...props
    }: {
      children: React.ReactNode;
      className?: string;
      value: string;
    },
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) => (
    <Accordion.Item
      className={cn(
        "focus-within:shadow-t-color-2 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  ),
);

const AccordionTrigger = forwardRef(
  (
    {
      children,
      className,
      ...props
    }: {
      children: React.ReactNode;
      className?: string;
    },
    forwardedRef: React.ForwardedRef<HTMLButtonElement>,
  ) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={cn(
          "text-t-color-2 shadow-bg-color-1 hover:bg-bg-color-2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-ic-color-2 px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="text-t-color-2 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);

const AccordionContent = forwardRef(
  (
    {
      children,
      className,
      ...props
    }: {
      children: React.ReactNode;
      className?: string;
    },
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) => (
    <Accordion.Content
      className={cn(
        "text-t-color-2 bg-bg-color-2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  ),
);
