import Link from "next/link"

import { BookingWidget } from "@/components/booking-widget"
import { ExperienceGrid } from "@/components/experience-grid"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { experiences } from "@/lib/experiences"

export function SiteHome() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2400&auto=format&fit=crop"
              alt="Stone house interior"
              className="h-full w-full object-cover"
            />
            <div className="from-background via-background/60 to-background absolute inset-0 bg-linear-to-b" />
          </div>

          <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
            <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 border px-2 py-1 text-xs">
                  <span className="text-muted-foreground">Rustic luxury</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Slow travel</span>
                </div>

                <h1 className="font-serif text-3xl tracking-tight text-balance sm:text-5xl">
                  A quiet house in the hills—crafted for rest, light, and simple
                  comfort.
                </h1>

                <p className="text-muted-foreground max-w-xl text-base text-balance sm:text-lg">
                  Discover warm textures, stone walls, and an elegant stay with a
                  seamless path to booking.
                </p>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild>
                    <Link href="#booking">Check availability</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/experiences">Explore experiences</Link>
                  </Button>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <Card className="bg-background/70">
                    <CardHeader className="gap-1">
                      <CardTitle className="font-serif text-base">
                        Prime location
                      </CardTitle>
                      <CardDescription>
                        Walk to viewpoints and cafés.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="bg-background/70">
                    <CardHeader className="gap-1">
                      <CardTitle className="font-serif text-base">
                        Thoughtful rooms
                      </CardTitle>
                      <CardDescription>
                        Linen, wood, and soft lighting.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="bg-background/70">
                    <CardHeader className="gap-1">
                      <CardTitle className="font-serif text-base">
                        Local rituals
                      </CardTitle>
                      <CardDescription>
                        Tasting, trails, and calm.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>

              <div className="lg:sticky lg:top-20">
                <BookingWidget id="booking" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl tracking-tight">
                Experiences
              </h2>
              <p className="text-muted-foreground max-w-2xl text-sm text-balance">
                Curated moments that fit your stay: slow food, simple nature,
                and the kind of luxury you can feel.
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:inline-flex">
              <Link href="/experiences">View all</Link>
            </Button>
          </div>

          <div className="mt-6">
            <ExperienceGrid items={experiences.slice(0, 3)} />
          </div>

          <div className="mt-6 sm:hidden">
            <Button variant="outline" asChild className="w-full">
              <Link href="/experiences">View all experiences</Link>
            </Button>
          </div>
        </section>

        <section className="bg-muted/20 border-y">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div className="space-y-3">
                <h2 className="font-serif text-2xl tracking-tight">
                  From discovery to reservation
                </h2>
                <p className="text-muted-foreground text-sm text-balance">
                  This mock demonstrates a clear journey: select dates, review
                  stay details, then confirm. You can later connect payments and
                  availability.
                </p>
              </div>
              <div>
                <BookingWidget compact />
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <div className="text-muted-foreground flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
            <div>Casa do Canto</div>
            <div className="flex gap-4">
              <Link className="hover:text-foreground" href="/experiences">
                Experiences
              </Link>
              <Link className="hover:text-foreground" href="/reserve">
                Reserve
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
