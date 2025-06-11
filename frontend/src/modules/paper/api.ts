import type { Paper } from './types'

const API_URL = '/api/papers'

export const fetchPapers = async (): Promise<Paper[]> => {
  const response = await fetch(API_URL)
  return response.json()
}

export const fetchPaper = async (id: string): Promise<Paper> => {
  const response = await fetch(`${API_URL}/${id}`)
  return response.json()
} 