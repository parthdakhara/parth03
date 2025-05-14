import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
        Subscribe to our newsletter to receive updates on new arrivals, special offers, and exclusive content.
      </p>
      <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
        <Input placeholder="Your email address" type="email" required className="flex-1" />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  )
}
