<template>
  <div class="review-list">
    <h2>评审列表</h2>
    <el-table :data="reviews" style="width: 100%">
      <el-table-column prop="paperTitle" label="论文标题" />
      <el-table-column prop="reviewer" label="评审人" />
      <el-table-column prop="status" label="评审状态" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button link type="primary" @click="$router.push(`/reviews/${scope.row.id}`)">
            查看详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
// 模拟数据，后续需要替换为实际的API调用
const reviews = [
  {
    id: 1,
    paperTitle: '示例论文1',
    reviewer: '评审人1',
    status: '进行中'
  },
  {
    id: 2,
    paperTitle: '示例论文2',
    reviewer: '评审人2',
    status: '已完成'
  }
]
</script>

<style scoped>
.review-list {
  padding: 20px;
}
</style>