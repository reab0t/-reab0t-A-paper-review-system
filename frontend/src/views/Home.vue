<template>
  <div class="home">
    <h1>Paper Review System</h1>
    <div class="dashboard">
      <div class="stats">
        <div class="stat-item">
          <h3>Papers</h3>
          <p>{{ stats.papers }}</p>
        </div>
        <div class="stat-item">
          <h3>Reviews</h3>
          <p>{{ stats.reviews }}</p>
        </div>
        <div class="stat-item">
          <h3>Users</h3>
          <p>{{ stats.users }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const stats = ref({
  papers: 0,
  reviews: 0,
  users: 0
})

// TODO: Fetch actual stats from API
</script>

<style scoped>
.home {
  padding: 2rem;
}

.dashboard {
  margin-top: 2rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-item {
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  text-align: center;
}

.stat-item h3 {
  margin: 0;
  color: #666;
}

.stat-item p {
  margin: 0.5rem 0 0;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}
</style> 