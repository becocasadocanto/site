import Link from "next/link"

import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="bg-background/80 supports-backdrop-filter:backdrop-blur-md sticky top-0 z-50 border-b">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-lg tracking-tight">Casa do Canto</span>
          <span className="text-muted-foreground hidden text-xs sm:inline">
            Casa de turismo
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link href="/experiences">Experiências</Link>
          </Button>
          <Button asChild>
            <Link href="/#booking">Ver disponibilidade</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
