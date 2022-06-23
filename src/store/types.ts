// Product
export type Product = {
  _id: string
  title: string
  description: string
  img: string
  categories?: Array<String>
  price: string
  createdAt?: string
  updatedAt?: string
  __v: number
}
export type initialStateNewProduct = {
  product: Product[]
  loading: boolean
  error: string
}
// Product

// ==============================

// Category

export type Category = {
  _id: string
  title: string
  link: string
  img: string
}

export type initialStateCategory = {
  error: string
  loading: boolean
  category: Category[]
}
// Category

// ===============================
