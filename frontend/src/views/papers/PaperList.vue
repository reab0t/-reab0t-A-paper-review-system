<template>
  <div class="paper-list">
    <h2>Papers</h2>
    <div class="filters">
      <input v-model="searchQuery" placeholder="Search papers..." class="search-input" />
      <select v-model="statusFilter" class="status-filter">
        <option value="">All Status</option>
        <option v-for="status in paperStatuses" :key="status" :value="status">
          {{ status }}
        </option>
      </select>
    </div>
    <div class="papers">
      <div v-for="paper in filteredPapers" :key="paper.id" class="paper-item">
        <h3>{{ paper.title }}</h3>
        <p class="abstract">{{ paper.abstract }}</p>
        <div class="meta">
          <span class="status">{{ paper.status }}</span>
          <span class="date">{{ paper.submissionDate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Paper, PaperStatus } from '@/modules/paper/types'

const papers = ref<Paper[]>([])
const searchQuery = ref('')
const statusFilter = ref('')

const paperStatuses = Object.values(PaperStatus)

const filteredPapers = computed(() => {
  return papers.value.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         paper.abstract.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesStatus = !statusFilter.value || paper.status === statusFilter.value
    return matchesSearch && matchesStatus
  })
})

// TODO: Fetch papers from API
</script>

<style scoped>
.paper-list {
  padding: 2rem;
}

.filters {
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
}

.search-input,
.status-filter {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.search-input {
  flex: 1;
}

.papers {
  display: grid;
  gap: 1rem;
}

.paper-item {
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.paper-item h3 {
  margin: 0;
  color: #333;
}

.abstract {
  margin: 0.5rem 0;
  color: #666;
}

.meta {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.status {
  padding: 0.25rem 0.5rem;
  background-color: #f0f0f0;
  border-radius: 4px;
}

.date {
  color: #999;
}
</style> 