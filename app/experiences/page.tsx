import Link from "next/link"

import { ExperienceGrid } from "@/components/experience-grid"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-2">
            <h1 className="font-serif text-3xl tracking-tight">Experiences</h1>
            <p className="text-muted-foreground max-w-2xl text-sm text-balance">
              A gallery of curated moments. Each one is designed to complement
              your stay—quiet luxury, local flavor, and unhurried time.
            </p>
          </div>
          <Button asChild className="hidden lg:inline-flex">
            <Link href="/reserve">Reserve your stay</Link>
          </Button>
        </div>

        <div className="mt-8">
          <ExperienceGrid />
        </div>

        <div className="mt-8 lg:hidden">
          <Button asChild className="w-full">
            <Link href="/reserve">Reserve your stay</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
