"use client"

import Link from "next/link"
import Image from "next/image"
import { useWishlist } from "@/components/wishlist-provider"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product: any) => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
        <p className="text-muted-foreground mb-8">Your wishlist is currently empty.</p>
        <Button asChild>
          <Link href="/products">Explore Products</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-10">Your Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden group">
            <div className="relative aspect-square">
              <Image
                src={product.image || "/placeholder.svg?height=400&width=400"}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md hover:bg-red-50"
                aria-label="Remove from wishlist"
              >
                <Trash2 className="h-5 w-5 text-red-500" />
              </button>
            </div>

            <div className="p-4">
              <Link href={`/products/${product.id}`}>
                <h2 className="font-semibold text-lg mb-1 hover:text-primary">{product.name}</h2>
              </Link>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">${product.price.toFixed(2)}</span>
                <Button size="sm" onClick={() => handleAddToCart(product)}>
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
