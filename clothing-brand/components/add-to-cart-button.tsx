"use client"

import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"
import { useToast } from "@/hooks/use-toast"

type Product = {
  id: string
  name: string
  price: number
  description?: string
  image?: string
}

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <Button onClick={handleAddToCart} className="flex-1">
      <ShoppingBag className="h-4 w-4 mr-2" />
      Add to Cart
    </Button>
  )
}
