"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [priceRange, setPriceRange] = useState([0, 200])

  const handleFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (params.has(key) && params.get(key) === value) {
      params.delete(key)
    } else {
      params.set(key, value)
    }

    router.push(`/products?${params.toString()}`)
  }

  const handlePriceFilter = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("minPrice", priceRange[0].toString())
    params.set("maxPrice", priceRange[1].toString())
    router.push(`/products?${params.toString()}`)
  }

  const clearFilters = () => {
    router.push("/products")
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["category", "price", "size", "color"]}>
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="category-men"
                  checked={searchParams.get("category") === "men"}
                  onCheckedChange={() => handleFilter("category", "men")}
                />
                <Label htmlFor="category-men">Men</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="category-women"
                  checked={searchParams.get("category") === "women"}
                  onCheckedChange={() => handleFilter("category", "women")}
                />
                <Label htmlFor="category-women">Women</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="category-accessories"
                  checked={searchParams.get("category") === "accessories"}
                  onCheckedChange={() => handleFilter("category", "accessories")}
                />
                <Label htmlFor="category-accessories">Accessories</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider value={priceRange} min={0} max={200} step={10} onValueChange={setPriceRange} />
              <div className="flex justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <Button size="sm" onClick={handlePriceFilter} className="w-full">
                Apply
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="size">
          <AccordionTrigger>Size</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="size-xs"
                  checked={searchParams.get("size") === "xs"}
                  onCheckedChange={() => handleFilter("size", "xs")}
                />
                <Label htmlFor="size-xs">XS</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="size-s"
                  checked={searchParams.get("size") === "s"}
                  onCheckedChange={() => handleFilter("size", "s")}
                />
                <Label htmlFor="size-s">S</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="size-m"
                  checked={searchParams.get("size") === "m"}
                  onCheckedChange={() => handleFilter("size", "m")}
                />
                <Label htmlFor="size-m">M</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="size-l"
                  checked={searchParams.get("size") === "l"}
                  onCheckedChange={() => handleFilter("size", "l")}
                />
                <Label htmlFor="size-l">L</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="size-xl"
                  checked={searchParams.get("size") === "xl"}
                  onCheckedChange={() => handleFilter("size", "xl")}
                />
                <Label htmlFor="size-xl">XL</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="color">
          <AccordionTrigger>Color</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="color-black"
                  checked={searchParams.get("color") === "black"}
                  onCheckedChange={() => handleFilter("color", "black")}
                />
                <Label htmlFor="color-black" className="flex items-center">
                  <div className="w-4 h-4 bg-black rounded-full mr-2" />
                  Black
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="color-white"
                  checked={searchParams.get("color") === "white"}
                  onCheckedChange={() => handleFilter("color", "white")}
                />
                <Label htmlFor="color-white" className="flex items-center">
                  <div className="w-4 h-4 bg-white border rounded-full mr-2" />
                  White
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="color-blue"
                  checked={searchParams.get("color") === "blue"}
                  onCheckedChange={() => handleFilter("color", "blue")}
                />
                <Label htmlFor="color-blue" className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2" />
                  Blue
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="color-red"
                  checked={searchParams.get("color") === "red"}
                  onCheckedChange={() => handleFilter("color", "red")}
                />
                <Label htmlFor="color-red" className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-2" />
                  Red
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
