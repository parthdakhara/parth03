import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Story</h1>
        <p className="text-xl text-muted-foreground">
          Crafting premium clothing with passion, sustainability, and style since 2010.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg mb-4">
            At StyleVibe, we believe that clothing is more than just fabric—it's a form of self-expression, a statement
            of identity, and a reflection of values.
          </p>
          <p className="text-lg mb-4">
            Our mission is to create timeless, high-quality garments that empower individuals to express their unique
            style while minimizing environmental impact. We're committed to ethical manufacturing practices, sustainable
            materials, and transparent business operations.
          </p>
          <p className="text-lg">
            Every piece in our collection is thoughtfully designed to blend contemporary trends with enduring style,
            ensuring that our customers look and feel their best while making responsible choices.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=800&width=600" alt="Our workshop" fill className="object-cover" />
        </div>
      </div>

      <Separator className="my-16" />

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-muted-foreground">
              We never compromise on quality. Each garment is crafted with premium materials and meticulous attention to
              detail.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
            <p className="text-muted-foreground">
              Environmental responsibility is at our core. We use eco-friendly materials and ethical production methods.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m16 10-4 4-4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
            <p className="text-muted-foreground">
              We design for everybody. Our collections embrace diversity in sizes, styles, and expressions.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=800&width=600" alt="Our team" fill className="object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <p className="text-lg mb-4">
            Behind every StyleVibe creation is a team of passionate individuals dedicated to excellence. Our designers,
            artisans, and support staff bring diverse backgrounds and perspectives, united by a shared commitment to our
            mission.
          </p>
          <p className="text-lg mb-4">
            We foster a culture of creativity, collaboration, and continuous improvement, ensuring that we remain at the
            forefront of sustainable fashion innovation.
          </p>
          <p className="text-lg">
            Our team members are not just employees—they're advocates for positive change in the fashion industry,
            working tirelessly to redefine what stylish, responsible clothing can be.
          </p>
        </div>
      </div>

      <div className="bg-muted rounded-lg p-8 text-center mb-20">
        <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          We're more than a clothing brand—we're a community of style-conscious individuals who believe in the power of
          thoughtful consumption. Join us as we continue to evolve and innovate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/products">Shop Collection</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
