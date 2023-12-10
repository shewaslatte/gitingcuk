"use client"

import { useEffect, useState } from "react"

import { defaultCmdOptions } from "@/lib/view"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

type AsyncCmdProps = {
  onSearch: any
  groups?: {
    [key: string]: {
      items: {
        [key: string]: {
          icon: any
          shortcut?: string
        }
      }
    }
  }
}

export function AsyncCmd({ onSearch }: AsyncCmdProps) {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [results, setResults] =
    useState<AsyncCmdProps["groups"]>(defaultCmdOptions)

  const search = async (query: string) => {
    setLoading(true)
    const results = await onSearch(query)
    setResults({ ...defaultCmdOptions, ...results })
    setLoading(false)
    console.log("Jalan")
  }

  useEffect(() => {
    if (open) {
      setQuery("")
      setResults({})
    }
  }, [open])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        itemType="search"
        value={query}
        onValueChange={(value) => {
          setQuery(value)
          search(value)
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            search(query)
          }
        }}
        placeholder="Type a command or search..."
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <>
          {Object.entries(results || defaultCmdOptions).map(
            ([groupName, group]) => (
              <CommandGroup key={groupName} heading={groupName}>
                {Object.entries(group.items).map(([itemName, item]) => (
                  <CommandItem key={itemName}>
                    <item.icon className="mr-2.5 h-4 w-4 text-primary" />
                    <span className="text-zinc-300">{itemName}</span>
                    <CommandShortcut>{item.shortcut}</CommandShortcut>
                  </CommandItem>
                ))}
              </CommandGroup>
            )
          )}
          <CommandSeparator />
        </>
      </CommandList>
    </CommandDialog>
  )
}
