<template>
  <div class="paper-viewer">
    <h1>论文查看器</h1>
    <p v-if="!paperContent">暂无论文内容。</p>
    <div v-else v-html="paperContent"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 模拟论文内容
const paperContent = ref('');
</script>

<style scoped>
.paper-viewer {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.paper-viewer h1 {
  color: #333;
}

.paper-viewer p {
  color: #666;
}
</style>
