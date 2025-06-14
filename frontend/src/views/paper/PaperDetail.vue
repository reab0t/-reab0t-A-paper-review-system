<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const paper = ref({});

onMounted(() => {
  // 模拟从 API 获取数据
  const id = route.params.id;
  paper.value = {
    id: id,
    title: '示例论文标题',
    author: '示例作者',
    submitTime: '2024-01-01',
    status: '待评审',
    abstract: '这是一个示例论文摘要，描述了论文的主要内容和研究成果。'
  };
});
</script>

<template>
  <div class="paper-detail">
    <h2>论文详情</h2>
    <el-descriptions :column="1" border>
      <el-descriptions-item label="标题">{{ paper.title }}</el-descriptions-item>
      <el-descriptions-item label="作者">{{ paper.author }}</el-descriptions-item>
      <el-descriptions-item label="提交时间">{{ paper.submitTime }}</el-descriptions-item>
      <el-descriptions-item label="状态">{{ paper.status }}</el-descriptions-item>
      <el-descriptions-item label="摘要">
        {{ paper.abstract }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
.paper-detail {
  padding: 20px;
}
</style>
