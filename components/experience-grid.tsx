"use client"

import * as React from "react"
import Link from "next/link"

import { experiences, type Experience } from "@/lib/experiences"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ExperienceGrid({
  items = experiences,
  density = "default",
}: {
  items?: Experience[]
  density?: "default" | "compact"
}) {
  const gridClassName =
    density === "compact"
      ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"

  return (
    <div className={gridClassName}>
      {items.map((x) => (
        <Card key={x.id} className="overflow-hidden">
          <div className="bg-muted relative aspect-4/3 w-full overflow-hidden">
            <img
              src={x.imageUrl}
              alt={x.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <CardHeader className="gap-1">
            <CardTitle className="font-serif text-base">{x.title}</CardTitle>
            <CardDescription>
              {x.location} • {x.duration}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-balance">
            {x.description}
          </CardContent>
          <CardFooter className="gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="flex-1">
                  Ver detalhes
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent size="sm" className="max-w-md">
                <AlertDialogHeader>
                  <AlertDialogTitle className="font-serif">
                    {x.title}
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {x.location} • {x.duration}
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <div className="bg-muted overflow-hidden">
                  <img
                    src={x.imageUrl}
                    alt={x.title}
                    className="aspect-video w-full object-cover"
                  />
                </div>

                <p className="text-sm text-balance">{x.description}</p>

                <AlertDialogFooter>
                  <AlertDialogCancel>Fechar</AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <Link href="/reserve">Reservar estadia</Link>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Button asChild className="flex-1">
              <Link href="/experiences">Ver tudo</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
