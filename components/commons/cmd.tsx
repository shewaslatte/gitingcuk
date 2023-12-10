import { useEffect, useState } from "react"

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

type CmdProps = {
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

export function Cmd({ groups }: CmdProps) {
  const [open, setOpen] = useState(false)

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
    <CommandDialog open={open}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {groups && (
          <>
            {Object.entries(groups).map(([groupName, group]) => (
              <CommandGroup key={groupName} title={groupName}>
                {Object.entries(group.items).map(([itemName, item]) => (
                  <CommandItem key={itemName}>
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{itemName}</span>
                    <CommandShortcut>{item.shortcut}</CommandShortcut>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
            <CommandSeparator />
          </>
        )}
      </CommandList>
    </CommandDialog>
  )
}
