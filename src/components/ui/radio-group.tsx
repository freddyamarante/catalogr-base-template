"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  children,
  hideIndicator = false,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> & { hideIndicator?: boolean }) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-8 shrink-0 rounded-sm border shadow-xs transition-[color,box-shadow] focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      {!hideIndicator && <RadioGroupPrimitive.Indicator
          data-slot="radio-group-indicator"
          className="relative flex items-center justify-center fill-current w-full h-full z-50"
        >
          <div className="rounded-full bg-border absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 brightness-90" />
      </RadioGroupPrimitive.Indicator>}
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
