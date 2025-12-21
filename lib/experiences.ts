export type Experience = {
  id: string
  title: string
  description: string
  location: string
  duration: string
  imageUrl: string
}

export const experiences: Experience[] = [
  {
    id: "vineyard",
    title: "Prova na vinha",
    description:
      "Uma prova privada com produtores locais — harmonizações sazonais e vinhos de pequenas produções.",
    location: "Vale do Douro",
    duration: "2–3 horas",
    imageUrl:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "hike",
    title: "Passeio ao nascer do sol",
    description:
      "Caminhada guiada por trilhos de pinhal e miradouros — café, pastelaria e ar fresco.",
    location: "Serra",
    duration: "90 min",
    imageUrl:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "cooking",
    title: "Oficina de cozinha rústica",
    description:
      "Cozinhe um menu regional reconfortante com ervas da horta e partilhe-o em mesa familiar.",
    location: "Cozinha da Casa",
    duration: "3 horas",
    imageUrl:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "boat",
    title: "Fim de tarde no rio",
    description:
      "Golden hour na água — mantas suaves, pequeno piquenique e regresso calmo sob as luzes.",
    location: "Cais do Rio",
    duration: "2 horas",
    imageUrl:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1800&auto=format&fit=crop",
  },
]
