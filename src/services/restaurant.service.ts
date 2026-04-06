import { api } from '@/server/api'
import type { Restaurant, Product, Category, Tag } from '@/interfaces/restaurants'

export async function getRestaurant(): Promise<Restaurant> {
  try {
    const { data } = await api.get<Restaurant>('')
    return data
  } catch (error) {
    console.error('Error to find restaurant', error)
    throw error
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    const { data } = await api.get<Product[]>('/products')
    return data
  } catch (error) {
    console.error('Error to find products', error)
    throw error
  }
}

export async function getProduct(id: number): Promise<Product> {
  try {
    const { data } = await api.get<Product>(`/product/${id}`)
    return data
  } catch (error) {
    console.error(`Error to find product ${id}`, error)
    throw error
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const { data } = await api.get<Category[]>('/categories')
    return data
  } catch (error) {
    console.error('Error to find categories', error)
    throw error
  }
}

export async function getTags(): Promise<Tag[]> {
  try {
    const { data } = await api.get<Tag[]>('/tags')
    return data
  } catch (error) {
    console.error('Error to find tags', error)
    throw error
  }
}
