// Mock product data
const products = [
  {
    id: "1",
    name: "Classic Cotton T-Shirt",
    price: 29.99,
    description: "A comfortable and versatile cotton t-shirt that's perfect for everyday wear.",
    image: "/placeholder.svg?height=600&width=600",
    category: "men",
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 59.99,
    description: "Modern slim fit jeans with a touch of stretch for maximum comfort.",
    image: "/placeholder.svg?height=600&width=600",
    category: "men",
  },
  {
    id: "3",
    name: "Oversized Hoodie",
    price: 49.99,
    description: "A cozy oversized hoodie made from premium cotton blend.",
    image: "/placeholder.svg?height=600&width=600",
    category: "women",
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    price: 89.99,
    description: "Elegant leather crossbody bag with adjustable strap and multiple compartments.",
    image: "/placeholder.svg?height=600&width=600",
    category: "accessories",
  },
  {
    id: "5",
    name: "Wool Blend Coat",
    price: 149.99,
    description: "A timeless wool blend coat that combines style and warmth.",
    image: "/placeholder.svg?height=600&width=600",
    category: "women",
  },
  {
    id: "6",
    name: "Canvas Sneakers",
    price: 39.99,
    description: "Classic canvas sneakers with rubber sole for everyday comfort.",
    image: "/placeholder.svg?height=600&width=600",
    category: "men",
  },
  {
    id: "7",
    name: "Silk Scarf",
    price: 34.99,
    description: "Luxurious silk scarf with a vibrant print to elevate any outfit.",
    image: "/placeholder.svg?height=600&width=600",
    category: "accessories",
  },
  {
    id: "8",
    name: "Denim Jacket",
    price: 79.99,
    description: "A versatile denim jacket that never goes out of style.",
    image: "/placeholder.svg?height=600&width=600",
    category: "women",
  },
]

export function getProducts({ category, search }: { category?: string | null; search?: string | null } = {}) {
  let filteredProducts = [...products]

  if (category) {
    filteredProducts = filteredProducts.filter((product) => product.category === category)
  }

  if (search) {
    const searchLower = search.toLowerCase()
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchLower) || product.description.toLowerCase().includes(searchLower),
    )
  }

  return filteredProducts
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id)
}

export function getFeaturedProducts() {
  // In a real app, you might have a "featured" flag on products
  // For this example, we'll just return the first 4 products
  return products.slice(0, 4)
}

export function getRelatedProducts(currentProductId: string) {
  const currentProduct = getProductById(currentProductId)

  if (!currentProduct) {
    return []
  }

  // Get products in the same category, excluding the current product
  return products
    .filter((product) => product.category === currentProduct.category && product.id !== currentProductId)
    .slice(0, 4)
}
