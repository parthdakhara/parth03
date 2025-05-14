"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useWishlist } from "./wishlist-provider"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

type Product = {
  id: string
  name: string
  price: number
  description?: string
  image?: string
}

export default function AddToWishlistButton({ product }: { product: Product }) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const { toast } = useToast()

  const inWishlist = isInWishlist(product.id)

  const handleToggleWishlist = () => {
    if (inWishlist) {
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

  return (
    <Button onClick={handleToggleWishlist} variant="outline" className={cn("flex-1", inWishlist && "bg-primary/10")}>
      <Heart className={cn("h-4 w-4 mr-2", inWishlist && "fill-primary")} />
      {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
    </Button>
  )
}
