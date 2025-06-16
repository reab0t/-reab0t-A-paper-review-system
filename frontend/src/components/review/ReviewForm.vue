<template>
  <div class="review-form-container">
    <el-form :model="reviewForm">
      <!-- 论文标题（只读） -->
      <el-form-item label="论文标题">
        <el-input v-model="reviewForm.title" :disabled="true" />
      </el-form-item>

      <!-- 评审分数 -->
      <el-form-item label="评审分数">
        <el-rate v-model="reviewForm.score" :max="5" show-score />
      </el-form-item>

      <!-- 评审意见 -->
      <el-form-item label="评审意见">
        <el-input
          v-model="reviewForm.comment"
          type="textarea"
          :rows="4"
          placeholder="请输入评审意见"
        />
      </el-form-item>

      <!-- 提交按钮 -->
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">提交评审</el-button>
        <el-button @click="backToList">返回列表</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { submitReview } from '@/api/review'; // 确保路径正确

const route = useRoute();
const router = useRouter();

const reviewForm = ref({
  title: '',
  score: 0,
  comment: '',
});

const handleSubmit = async () => {
  try {
    // 使用 submitReview 进行提交操作
    await submitReview(route.params.id, reviewForm.value);
    // 提交成功后的逻辑
    router.push({ name: 'ReviewList' });
  } catch (error) {
    console.error('提交评审失败:', error);
    // 处理错误情况
  }
};

const backToList = () => {
  router.push({ name: 'ReviewList' });
};
</script>

<style scoped>
.review-form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.el-form-item {
  margin-bottom: 20px;
}
</style>
