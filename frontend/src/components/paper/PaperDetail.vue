<template>
  <div>
    <h2>论文详情</h2>
    <p>标题：{{ paper.title }}</p>
    <p>作者：{{ paper.author }}</p>
    <p>内容：{{ paper.content }}</p>
    <el-button @click="back">返回</el-button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const paper = ref({});

onMounted(() => {
  // 通过 API 获取论文详情
  paper.value = {
    id: route.params.id,
    title: '论文标题',
    author: '作者名',
    content: '论文内容……'
  };
});

const back = () => {
  router.push('/papers');
};
</script>
