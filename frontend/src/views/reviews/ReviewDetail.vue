<template>
  <div class="review-detail">
    <h2>评审详情</h2>
    <el-descriptions :column="1" border>
      <el-descriptions-item label="论文标题">示例论文标题</el-descriptions-item>
      <el-descriptions-item label="评审人">示例评审人</el-descriptions-item>
      <el-descriptions-item label="评审状态">进行中</el-descriptions-item>
      <el-descriptions-item label="评审意见">
        这里是评审意见的详细内容，包括论文的优点、缺点和改进建议等。
      </el-descriptions-item>
      <el-descriptions-item label="评分">85</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
.review-detail {
  padding: 20px;
}
</style> 