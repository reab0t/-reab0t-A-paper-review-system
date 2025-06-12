<template>
  <div class="paper-detail">
    <h2>论文详情</h2>
    <el-descriptions :column="1" border>
      <el-descriptions-item label="标题">示例论文标题</el-descriptions-item>
      <el-descriptions-item label="作者">示例作者</el-descriptions-item>
      <el-descriptions-item label="提交时间">2024-01-01</el-descriptions-item>
      <el-descriptions-item label="状态">待评审</el-descriptions-item>
      <el-descriptions-item label="摘要">
        这是一个示例论文摘要，描述了论文的主要内容和研究成果。
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
.paper-detail {
  padding: 20px;
}
</style> 