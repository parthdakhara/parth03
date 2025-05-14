import Image from "next/image"
import { notFound } from "next/navigation"
import { getProductById } from "@/lib/products"
import AddToCartButton from "@/components/add-to-cart-button"
import AddToWishlistButton from "@/components/add-to-wishlist-button"
import ProductReviews from "@/components/product-reviews"
import RelatedProducts from "@/components/related-products"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg?height=600&width=600"}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="space-y-4 mb-6">
            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="border rounded-md px-3 py-1 hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex gap-2">
                {["Black", "White", "Blue", "Red"].map((color) => (
                  <button
                    key={color}
                    className="border rounded-full w-8 h-8 focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{ backgroundColor: color.toLowerCase() }}
                    aria-label={color}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <AddToCartButton product={product} />
            <AddToWishlistButton product={product} />
          </div>

          <Separator className="my-6" />

          <div className="space-y-4">
            <h3 className="font-semibold">Product Details</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Premium quality material</li>
              <li>Ethically sourced and produced</li>
              <li>Machine washable</li>
              <li>Designed for comfort and style</li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="my-16" />

      <ProductReviews productId={params.id} />

      <Separator className="my-16" />

      <RelatedProducts currentProductId={params.id} />
    </div>
  )
}
