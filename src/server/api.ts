import axios from 'axios'
import type { Restaurant, Product, Category, Tag } from '@/interfaces/restaurants'

export type { Restaurant, Product, Category, Tag }

const http = axios.create({
  baseURL: import.meta.env.DEV
    ? '/api/santa-marta-barra'
    : 'https://bynosplates.fabriciorocha.com/api/santa-marta-barra',
  timeout: 10000,
})

async function get<T>(path: string): Promise<T> {
  const response = await http.get<T>(path)
  return response.data
}

export const api = {
  getRestaurant: (): Promise<Restaurant> =>
    get<Restaurant>(''),

  getProducts: (): Promise<Product[]> =>
    get<Product[]>('/products'),

  getProduct: (id: number): Promise<Product> =>
    get<Product>(`/product/${id}`),

  getCategories: (): Promise<Category[]> =>
    get<Category[]>('/categories'),

  getTags: (): Promise<Tag[]> =>
    get<Tag[]>('/tags'),
}
