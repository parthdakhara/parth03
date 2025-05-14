import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto py-16 px-4 text-center max-w-2xl">
      <div className="flex justify-center mb-6">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="text-muted-foreground mb-8">
        Your order has been placed successfully. We've sent a confirmation email with your order details.
      </p>

      <div className="border rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Order Information</h2>
        <div className="grid grid-cols-2 gap-4 text-left">
          <div>
            <p className="text-muted-foreground">Order Number:</p>
            <p className="font-medium">#ORD12345678</p>
          </div>
          <div>
            <p className="text-muted-foreground">Date:</p>
            <p className="font-medium">{new Date().toLocaleDateString()}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Payment Method:</p>
            <p className="font-medium">Credit Card</p>
          </div>
          <div>
            <p className="text-muted-foreground">Shipping Method:</p>
            <p className="font-medium">Standard Shipping</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/account/orders">View My Orders</Link>
        </Button>
      </div>
    </div>
  )
}
