"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type BookingState = {
  checkIn: string
  checkOut: string
  guests: string
}

export function BookingWidget({
  id,
  compact = false,
}: {
  id?: string
  compact?: boolean
}) {
  const router = useRouter()
  const [state, setState] = React.useState<BookingState>({
    checkIn: "",
    checkOut: "",
    guests: "2",
  })

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    const params = new URLSearchParams()
    if (state.checkIn) params.set("checkIn", state.checkIn)
    if (state.checkOut) params.set("checkOut", state.checkOut)
    if (state.guests) params.set("guests", state.guests)

    router.push(`/reserve?${params.toString()}`)
  }

  return (
    <Card id={id} className="w-full">
      <CardHeader className="gap-1">
        <CardTitle className="font-serif text-lg">Book your stay</CardTitle>
        <CardDescription>
          A clean, fast path from dates to confirmation.
        </CardDescription>
      </CardHeader>

      <form onSubmit={onSubmit} className="w-full">
        <CardContent className="space-y-4">
          <FieldGroup
            className={
              compact
                ? "grid gap-3 sm:grid-cols-3"
                : "grid gap-3 sm:grid-cols-2"
            }
          >
            <Field>
              <FieldLabel>Check-in</FieldLabel>
              <Input
                type="date"
                value={state.checkIn}
                onChange={(e) =>
                  setState((s) => ({ ...s, checkIn: e.target.value }))
                }
              />
            </Field>

            <Field>
              <FieldLabel>Check-out</FieldLabel>
              <Input
                type="date"
                value={state.checkOut}
                onChange={(e) =>
                  setState((s) => ({ ...s, checkOut: e.target.value }))
                }
              />
            </Field>

            <Field className={compact ? "sm:col-span-1" : "sm:col-span-2"}>
              <FieldLabel>Guests</FieldLabel>
              <Select
                value={state.guests}
                onValueChange={(v) => setState((s) => ({ ...s, guests: v }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="1">1 guest</SelectItem>
                    <SelectItem value="2">2 guests</SelectItem>
                    <SelectItem value="3">3 guests</SelectItem>
                    <SelectItem value="4">4 guests</SelectItem>
                    <SelectItem value="5">5 guests</SelectItem>
                    <SelectItem value="6">6 guests</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>

          <div className="bg-muted/40 border-border grid gap-3 border p-3">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="text-muted-foreground">From</div>
                <div className="font-medium">
                  {state.checkIn ? state.checkIn : "Select date"}
                </div>
              </div>
              <div>
                <div className="text-muted-foreground">To</div>
                <div className="font-medium">
                  {state.checkOut ? state.checkOut : "Select date"}
                </div>
              </div>
            </div>
            <div className="text-muted-foreground text-xs">
              This is a mock booking flow—wire it to your channel manager later.
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full">
            Continue to reservation
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
