"use client"

import Link from "next/link"
import Image from "next/image"
import { getFeaturedProducts } from "@/lib/products"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"
import { useToast } from "@/hooks/use-toast"
import { ShoppingBag } from "lucide-react"

export default function FeaturedProducts() {
  const products = getFeaturedProducts()
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product: any) => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <Link href={`/products/${product.id}`} className="block relative aspect-square">
            <Image
              src={product.image || "/placeholder.svg?height=400&width=400"}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </Link>
          <CardContent className="p-4">
            <Link href={`/products/${product.id}`}>
              <h3 className="font-medium hover:text-primary transition-colors">{product.name}</h3>
            </Link>
            <div className="mt-2 font-bold">${product.price.toFixed(2)}</div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button onClick={() => handleAddToCart(product)} variant="outline" className="w-full">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
