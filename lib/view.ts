import {
  BlocksIcon,
  BookCopyIcon,
  BriefcaseIcon,
  FolderGit2Icon,
  FolderPlusIcon,
  GithubIcon,
  KeyboardIcon,
  MonitorXIcon,
  Settings2Icon,
  SettingsIcon,
  ShellIcon,
  TerminalSquareIcon,
} from "lucide-react"

export const defaultCmdOptions = {
  ["Commands"]: {
    items: {
      "New Repository": {
        icon: FolderPlusIcon,
        shortcut: "ctrl+n",
      },
      "Open Repository": {
        icon: FolderGit2Icon,
        shortcut: "ctrl+o",
      },
      "Clone Repository": {
        icon: BookCopyIcon,
        shortcut: "ctrl+shift+o",
      },
      "Add New Command": {
        icon: TerminalSquareIcon,
        shortcut: "ctrl+shift+o",
      },
    },
  },
  ["Others"]: {
    items: {
      "My Workspaces": {
        icon: BriefcaseIcon,
        shortcut: "ctrl+shift+o",
      },
      ["Preferences"]: {
        icon: Settings2Icon,
        shortcut: "ctrl+shift+o",
      },
      "Keyboard Shortcuts": {
        icon: KeyboardIcon,
        shortcut: "ctrl+shift+o",
      },
      Settings: {
        icon: SettingsIcon,
        shortcut: "ctrl+shift+o",
      },
      Developer: {
        icon: GithubIcon,
        shortcut: "ctrl+shift+o",
      },
      Extensions: {
        icon: BlocksIcon,
        shortcut: "ctrl+shift+o",
      },
      About: {
        icon: ShellIcon,
        shortcut: "ctrl+shift+o",
      },
      "Close Window": {
        icon: MonitorXIcon,
        shortcut: "ctrl+shift+o",
      },
    },
  },
}
