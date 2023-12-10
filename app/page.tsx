import { ModeToggle } from "@/components/commons/mode-toggle"

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <ModeToggle />
      <span>v0.1.0-alpha</span>
    </div>
  )
}
