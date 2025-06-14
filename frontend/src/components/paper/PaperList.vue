<template>
  <div class="paper-list">
    <h2>论文</h2>
    <div class="filters">
      <input v-model="searchQuery" placeholder="搜索论文..." class="search-input" />
      <select v-model="statusFilter" class="status-filter">
        <option value="">所有状态</option>
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

// 存储所有论文数据
const papers = ref<Paper[]>([])

// 搜索关键词
const searchQuery = ref('')

// 状态筛选
const statusFilter = ref('')

// 获取所有论文状态
const paperStatuses = Object.values(PaperStatus)

// 计算过滤后的论文列表
const filteredPapers = computed(() => {
  return papers.value.filter(paper => {
    // 检查是否匹配搜索关键词
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         paper.abstract.toLowerCase().includes(searchQuery.value.toLowerCase())
    // 检查是否匹配状态筛选
    const matchesStatus = !statusFilter.value || paper.status === statusFilter.value
    return matchesSearch && matchesStatus
  })
})

// TODO: 从 API 获取论文数据
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
