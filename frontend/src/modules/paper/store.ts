import { ref } from 'vue'
import type { Paper } from './types'

export const papers = ref<Paper[]>([])

export const addPaper = (paper: Paper) => {
  papers.value.push(paper)
}

export const updatePaper = (updatedPaper: Paper) => {
  const index = papers.value.findIndex(p => p.id === updatedPaper.id)
  if (index !== -1) {
    papers.value[index] = updatedPaper
  }
} 