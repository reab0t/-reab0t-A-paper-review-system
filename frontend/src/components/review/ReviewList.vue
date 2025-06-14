<template>
  <div class="review-form-container">
    <!-- 论文标题（只读） -->
    <el-form-item label="论文标题" prop="paperTitle">
      <el-input v-model="reviewForm.paperTitle" disabled></el-input>
    </el-form-item>

    <!-- 评审等级（五星评分） -->
    <el-form-item label="评审等级" prop="rating">
      <el-rate
        v-model="reviewForm.rating"
        :max="5"
        show-score
        text-color="#ff9900"
        allow-half
      ></el-rate>
    </el-form-item>

    <!-- 创新性评分 -->
    <el-form-item label="创新性" prop="innovation">
      <el-rate
        v-model="reviewForm.innovation"
        :max="5"
        text-color="#ff9900"
        allow-half
      ></el-rate>
    </el-form-item>

    <!-- 技术性评分 -->
    <el-form-item label="技术性" prop="technicality">
      <el-rate
        v-model="reviewForm.technicality"
        :max="5"
        text-color="#ff9900"
        allow-half
      ></el-rate>
    </el-form-item>

    <!-- 可读性评分 -->
    <el-form-item label="可读性" prop="readability">
      <el-rate
        v-model="reviewForm.readability"
        :max="5"
        text-color="#ff9900"
        allow-half
      ></el-rate>
    </el-form-item>

    <!-- 评审意见 -->
    <el-form-item label="评审意见" prop="comments">
      <el-input
        v-model="reviewForm.comments"
        type="textarea"
        :rows="4"
        placeholder="请输入您的评审意见"
      ></el-input>
    </el-form-item>

    <!-- 主要问题 -->
    <el-form-item label="主要问题" prop="issues">
      <el-input
        v-model="reviewForm.issues"
        type="textarea"
        :rows="4"
        placeholder="请列出论文的主要问题"
      ></el-input>
    </el-form-item>

    <!-- 修改建议 -->
    <el-form-item label="修改建议" prop="suggestions">
      <el-input
        v-model="reviewForm.suggestions"
        type="textarea"
        :rows="4"
        placeholder="请提供修改建议"
      ></el-input>
    </el-form-item>

    <!-- 表单操作按钮 -->
    <div class="form-actions">
      <el-button @click="resetForm">重置</el-button>
      <el-button type="primary" @click="submitReviewForm">提交评审</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useReviewStore } from '@/stores/review';
import { ElMessage } from 'element-plus';

// 引入API接口
import { submitReview } from '@/api/review';

// 定义表单数据
const reviewForm = ref({
  paperId: null,
  paperTitle: '',
  rating: 0,
  innovation: 0,
  technicality: 0,
  readability: 0,
  comments: '',
  issues: '',
  suggestions: '',
});

// 表单验证规则
const rules = {
  paperTitle: [{ required: true, message: '请输入论文标题', trigger: 'blur' }],
  rating: [{ required: true, message: '请选择评审等级', trigger: 'change' }],
  innovation: [{ required: true, message: '请评价创新性', trigger: 'change' }],
  technicality: [{ required: true, message: '请评价技术性', trigger: 'change' }],
  readability: [{ required: true, message: '请评价可读性', trigger: 'change' }],
  comments: [{ required: true, message: '请输入评审意见', trigger: 'blur' }],
};

// 引用表单
const reviewFormRef = ref(null);

// 获取路由和路由器实例
const route = useRoute();
const router = useRouter();

// 获取评审状态管理
const reviewStore = useReviewStore();

// 组件挂载时执行
onMounted(() => {
  // 从路由参数获取论文ID
  const paperId = route.params.id;
  if (paperId) {
    reviewForm.value.paperId = paperId;
    // 这里可以添加加载论文标题的逻辑
    // 例如：调用API获取论文详情并设置reviewForm.value.paperTitle
  }
});

// 提交评审
const submitReviewForm = async () => {
  try {
    // 验证表单
    await reviewFormRef.value.validate();

    // 调用API提交评审
    const response = await submitReview(reviewForm.value);

    // 提交成功
    ElMessage.success('评审提交成功！');

    // 更新store中的评审数据
    reviewStore.addReview(response.data);

    // 返回评审列表
    router.push('/reviews');
  } catch (error) {
    console.error('提交评审失败:', error);
    ElMessage.error('提交评审失败，请重试！');
  }
};

// 重置表单
const resetForm = () => {
  reviewFormRef.value.resetFields();
};
</script>

<style scoped>
.review-form-container {
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.review-form {
  margin-top: 20px;
}

.form-actions {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.el-rate {
  display: block;
  margin-top: 10px;
}

textarea {
  resize: vertical;
}
</style>
