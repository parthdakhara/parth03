"use client"

import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { getProducts } from "@/lib/products"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"
import { useToast } from "@/hooks/use-toast"
import { ShoppingBag, Heart } from "lucide-react"
import { useWishlist } from "./wishlist-provider"
import { cn } from "@/lib/utils"

export default function ProductList() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")
  const search = searchParams.get("search")

  const products = getProducts({ category, search })
  const { addToCart } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { toast } = useToast()

  const handleAddToCart = (product: any) => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleToggleWishlist = (product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      })
    } else {
      addToWishlist(product)
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      })
    }
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-2">No products found</h2>
        <p className="text-muted-foreground mb-6">
          Try adjusting your search or filter to find what you're looking for.
        </p>
        <Button asChild>
          <Link href="/products">View All Products</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <div className="relative">
            <Link href={`/products/${product.id}`} className="block relative aspect-square">
              <Image
                src={product.image || "/placeholder.svg?height=400&width=400"}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </Link>
            <button
              onClick={() => handleToggleWishlist(product)}
              className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md hover:bg-primary/10 transition-colors"
              aria-label={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart
                className={cn(
                  "h-5 w-5",
                  isInWishlist(product.id) ? "fill-primary text-primary" : "text-muted-foreground",
                )}
              />
            </button>
          </div>
          <CardContent className="p-4">
            <Link href={`/products/${product.id}`}>
              <h3 className="font-medium hover:text-primary transition-colors">{product.name}</h3>
            </Link>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
            <div className="mt-2 font-bold">${product.price.toFixed(2)}</div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button onClick={() => handleAddToCart(product)} className="w-full">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
