// Product
export type Product = {
  _id: string
  title: string | null
  description: string | null
  img: string | null
  categories?: Array<String>
  price: string
  createdAt?: string
  updatedAt?: string
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

export interface initialStateCategory {
  error: string
  loading: boolean
  category: Category[]
}
// Category

// ===============================

// Login

// ===============================

export interface IUser {
  username: String
  token: String
  role?: Array<any>
}

export interface LoginState {
  isLogin: boolean
  user: IUser
  isLoading: boolean
  error: string
}

// Login

// ================================
