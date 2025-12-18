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
    title: "Vineyard Tasting",
    description:
      "A private tasting with local producers—seasonal pairings and small-batch wines.",
    location: "Douro Valley",
    duration: "2–3 hours",
    imageUrl:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "hike",
    title: "Sunrise Ridge Walk",
    description:
      "Guided walk through pine trails and viewpoints—coffee, pastries, and fresh air.",
    location: "Serra",
    duration: "90 min",
    imageUrl:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "cooking",
    title: "Rustic Cooking Class",
    description:
      "Cook a comforting regional menu with herbs from the garden, then share it family-style.",
    location: "Casa Kitchen",
    duration: "3 hours",
    imageUrl:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "boat",
    title: "River Boat Evening",
    description:
      "Golden hour on the water—soft blankets, a small picnic, and a calm return under lights.",
    location: "River Dock",
    duration: "2 hours",
    imageUrl:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1800&auto=format&fit=crop",
  },
]
