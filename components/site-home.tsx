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
              src="https://hdceo9s7rn.ufs.sh/f/omhVEzh0nq06FL9kCkiesR8KQJPMY5cu1mTIqpr3k2gGVvOhttps://hdceo9s7rn.ufs.sh/f/omhVEzh0nq06FL9kCkiesR8KQJPMY5cu1mTIqpr3k2gGVvOLL"
              alt="jardim"
              className="h-full w-full object-cover"
            />
            <div className="from-background via-background/60 to-background absolute inset-0 bg-linear-to-b" />
          </div>

          <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
            <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 border px-2 py-1 text-xs">
                  <span className="text-muted-foreground">Luxo rústico</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Slow travel</span>
                </div>

                <h1 className="font-serif text-3xl tracking-tight text-balance sm:text-5xl">
                  Uma casa tranquila nas colinas — pensada para descanso, luz e
                  conforto simples.
                </h1>

                <p className="text-muted-foreground max-w-xl text-base text-balance sm:text-lg">
                  Descubra texturas quentes, paredes de pedra e uma estadia
                  elegante com um percurso simples até à reserva.
                </p>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild>
                    <Link href="#booking">Ver disponibilidade</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/experiences">Explorar experiências</Link>
                  </Button>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <Card className="bg-background/70">
                    <CardHeader className="gap-1">
                      <CardTitle className="font-serif text-base">
                        Localização privilegiada
                      </CardTitle>
                      <CardDescription>
                        A poucos passos de miradouros e cafés.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="bg-background/70">
                    <CardHeader className="gap-1">
                      <CardTitle className="font-serif text-base">
                        Quartos cuidados
                      </CardTitle>
                      <CardDescription>
                        Linho, madeira e luz suave.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  <Card className="bg-background/70">
                    <CardHeader className="gap-1">
                      <CardTitle className="font-serif text-base">
                        Rituais locais
                      </CardTitle>
                      <CardDescription>
                        Provas, trilhos e tranquilidade.
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
                Experiências
              </h2>
              <p className="text-muted-foreground max-w-2xl text-sm text-balance">
                Momentos curados que completam a estadia: slow food, natureza
                simples e o tipo de luxo que se sente.
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:inline-flex">
              <Link href="/experiences">Ver todas</Link>
            </Button>
          </div>

          <div className="mt-6">
            <ExperienceGrid items={experiences.slice(0, 3)} />
          </div>

          <div className="mt-6 sm:hidden">
            <Button variant="outline" asChild className="w-full">
              <Link href="/experiences">Ver todas as experiências</Link>
            </Button>
          </div>
        </section>

        <section className="bg-muted/20 border-y">
          <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div className="space-y-3">
                <h2 className="font-serif text-2xl tracking-tight">
                  Do descobrimento à reserva
                </h2>
                <p className="text-muted-foreground text-sm text-balance">
                  Esta demonstração apresenta um percurso claro: selecionar
                  datas, rever detalhes da estadia e confirmar. Mais tarde pode
                  ligar pagamentos e disponibilidade reais.
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
                Experiências
              </Link>
              <Link className="hover:text-foreground" href="/reserve">
                Reserva
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
