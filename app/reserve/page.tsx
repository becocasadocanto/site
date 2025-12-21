import { Suspense } from "react"

import { SiteHeader } from "@/components/site-header"

import { ReserveClient } from "@/app/reserve/reserve-client"

export default function ReservePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <Suspense
        fallback={
          <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <div className="text-muted-foreground text-sm">A carregar…</div>
          </main>
        }
      >
        <ReserveClient />
      </Suspense>
    </div>
  )
}
