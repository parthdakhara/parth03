import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import CategorySection from "@/components/category-section"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Hero background"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">Elevate Your Style</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            Discover the latest trends in fashion with our premium collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base">
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Collection</h2>
        <FeaturedProducts />
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-muted">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <CategorySection />
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Newsletter />
      </section>
    </div>
  )
}
