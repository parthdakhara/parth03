"use client"

import type React from "react"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"

// Mock reviews data
const mockReviews = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2023-05-15",
    comment:
      "Absolutely love this product! The quality is exceptional and it fits perfectly. Will definitely be purchasing more items from this brand.",
  },
  {
    id: "2",
    name: "Sam Taylor",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "2023-04-22",
    comment:
      "Great product overall. The material is high quality and comfortable. The only reason I'm giving 4 stars instead of 5 is because the color is slightly different from what's shown in the pictures.",
  },
  {
    id: "3",
    name: "Jamie Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2023-03-10",
    comment:
      "This is my second purchase from this brand and I'm just as impressed as I was with the first. The attention to detail is amazing and the shipping was super fast!",
  },
]

export default function ProductReviews({ productId }: { productId: string }) {
  const [reviews] = useState(mockReviews)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [hoverRating, setHoverRating] = useState(0)
  const { toast } = useToast()

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()

    if (rating === 0) {
      toast({
        title: "Please select a rating",
        variant: "destructive",
      })
      return
    }

    if (!comment.trim()) {
      toast({
        title: "Please enter a review comment",
        variant: "destructive",
      })
      return
    }

    // In a real app, you would submit the review to your backend
    toast({
      title: "Review submitted",
      description: "Thank you for your feedback!",
    })

    // Reset form
    setRating(0)
    setComment("")
  }

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5" fill={star <= averageRating ? "currentColor" : "none"} />
          ))}
        </div>
        <span className="font-medium">{averageRating.toFixed(1)} out of 5</span>
        <span className="text-muted-foreground">Based on {reviews.length} reviews</span>
      </div>

      <div className="space-y-6 mb-10">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-0">
            <div className="flex items-center gap-4 mb-2">
              <Avatar>
                <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{review.name}</div>
                <div className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</div>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4" fill={star <= review.rating ? "currentColor" : "none"} />
              ))}
            </div>
            <p className="text-muted-foreground">{review.comment}</p>
          </div>
        ))}
      </div>

      <div className="border rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Write a Review</h3>
        <form onSubmit={handleSubmitReview}>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Rating</label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="text-2xl focus:outline-none"
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                >
                  <Star className="w-6 h-6" fill={(hoverRating || rating) >= star ? "currentColor" : "none"} />
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="review-comment" className="block mb-2 font-medium">
              Review
            </label>
            <Textarea
              id="review-comment"
              placeholder="Share your thoughts about this product..."
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <Button type="submit">Submit Review</Button>
        </form>
      </div>
    </div>
  )
}
