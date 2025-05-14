import Link from "next/link"
import Image from "next/image"
import { getRelatedProducts } from "@/lib/products"

export default function RelatedProducts({ currentProductId }: { currentProductId: string }) {
  const products = getRelatedProducts(currentProductId)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="group">
            <div className="relative aspect-square mb-2 overflow-hidden rounded-md">
              <Image
                src={product.image || "/placeholder.svg?height=300&width=300"}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium group-hover:text-primary transition-colors">{product.name}</h3>
            <div className="mt-1 font-bold">${product.price.toFixed(2)}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
