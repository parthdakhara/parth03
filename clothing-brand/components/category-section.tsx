import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    name: "Men",
    image: "/placeholder.svg?height=400&width=300",
    href: "/products?category=men",
  },
  {
    name: "Women",
    image: "/placeholder.svg?height=400&width=300",
    href: "/products?category=women",
  },
  {
    name: "Accessories",
    image: "/placeholder.svg?height=400&width=300",
    href: "/products?category=accessories",
  },
]

export default function CategorySection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link key={category.name} href={category.href} className="group relative overflow-hidden rounded-lg">
          <div className="relative aspect-[3/4]">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
