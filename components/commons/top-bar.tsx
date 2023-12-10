"use client"

import React from "react"
import { SettingsIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

const topbarItems = [
  {
    id: 0,
    name: "Settings",
    icon: SettingsIcon,
    className: "px-2",
    variant: "outline" as any,
    size: "icon" as any,
    action: () => {},
  },
]

export default function TopBar() {
  return (
    <header className="bg-secondary flex w-full">
      {topbarItems?.map((item, index) => (
        <Button
          key={index}
          size={item.size}
          variant={item.variant}
          className={item.className}
          onClick={item.action}
        >
          <item.icon className="h-5 w-5" />
        </Button>
      ))}
    </header>
  )
}
