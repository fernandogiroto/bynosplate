export interface Restaurant {
  id: number
  name: string
  slug: string
  description?: string
  phone?: string
  address?: string
  city?: string
  wifi_name?: string
  wifi_password?: string
  opening_hours?: string
  [key: string]: unknown
}

export interface Product {
  id: number
  name: string
  description?: string
  price: number
  category_id?: number
  tags?: Tag[]
  [key: string]: unknown
}

export interface Category {
  id: number
  name: string
  slug?: string
  [key: string]: unknown
}

export interface Tag {
  id: number
  name: string
  [key: string]: unknown
}
