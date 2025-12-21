"use client"

import * as React from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type ReservationState = {
  name: string
  email: string
  phone: string
  notes: string
}

export function ReserveClient() {
  const params = useSearchParams()

  const checkIn = params.get("checkIn") ?? ""
  const checkOut = params.get("checkOut") ?? ""
  const guests = params.get("guests") ?? "2"

  const [state, setState] = React.useState<ReservationState>({
    name: "",
    email: "",
    phone: "",
    notes: "",
  })

  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "submitted"
  >("idle")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("submitting")

    window.setTimeout(() => {
      setStatus("submitted")
    }, 600)
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div className="space-y-2">
          <h1 className="font-serif text-3xl tracking-tight">Reserva</h1>
          <p className="text-muted-foreground max-w-xl text-sm text-balance">
            Esta é uma etapa de confirmação fictícia. O objetivo é um fluxo sem fricção,
            do descobrimento à reserva.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Badge variant="secondary">Check-in: {checkIn || "—"}</Badge>
            <Badge variant="secondary">Check-out: {checkOut || "—"}</Badge>
            <Badge variant="secondary">Hóspedes: {guests}</Badge>
          </div>
        </div>

        <Card>
          <CardHeader className="gap-1">
            <CardTitle className="font-serif text-lg">Dados do hóspede</CardTitle>
            <CardDescription>
              Usaremos esta informação para confirmar a reserva.
            </CardDescription>
          </CardHeader>

          <form onSubmit={onSubmit}>
            <CardContent className="space-y-4">
              <FieldGroup className="grid gap-3">
                <Field>
                  <FieldLabel>Nome completo</FieldLabel>
                  <Input
                    value={state.name}
                    onChange={(e) =>
                      setState((s) => ({ ...s, name: e.target.value }))
                    }
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    type="email"
                    value={state.email}
                    onChange={(e) =>
                      setState((s) => ({ ...s, email: e.target.value }))
                    }
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel>Telefone</FieldLabel>
                  <Input
                    value={state.phone}
                    onChange={(e) =>
                      setState((s) => ({ ...s, phone: e.target.value }))
                    }
                  />
                </Field>

                <Field>
                  <FieldLabel>Notas</FieldLabel>
                  <Textarea
                    value={state.notes}
                    onChange={(e) =>
                      setState((s) => ({ ...s, notes: e.target.value }))
                    }
                    placeholder="Hora de chegada, pedidos especiais, etc."
                  />
                </Field>
              </FieldGroup>

              <div className="bg-muted/40 border-border grid gap-2 border p-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Estadia</span>
                  <span className="font-medium">Casa do Canto</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total estimado</span>
                  <span className="font-medium">€—</span>
                </div>
                <div className="text-muted-foreground text-xs">
                  O valor é omitido de forma intencional nesta demonstração.
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
              <Button
                type="submit"
                className="w-full"
                disabled={status !== "idle"}
              >
                {status === "idle" && "Confirmar reserva"}
                {status === "submitting" && "A confirmar…"}
                {status === "submitted" && "Pedido enviado"}
              </Button>

              <Button variant="outline" asChild className="w-full">
                <Link href="/">Voltar ao início</Link>
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  )
}
