import axios from 'axios'

export const api = axios.create({
  baseURL: '/api/santa-marta-barra',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
})
