<template>
  <div class="review-list-container">
    <h2>评审列表</h2>
    
    <!-- 筛选器 -->
    <div class="filters">
      <el-input
        v-model="searchQuery"
        placeholder="搜索论文标题..."
        style="width: 300px; margin-right: 16px;"
      />
      <el-select v-model="statusFilter" placeholder="选择状态" style="width: 150px;">
        <el-option label="全部" value="" />
        <el-option label="待评审" value="PENDING" />
        <el-option label="评审中" value="IN_PROGRESS" />
        <el-option label="已完成" value="COMPLETED" />
      </el-select>
    </div>

    <!-- 评审列表 -->
    <el-table :data="filteredReviews" style="width: 100%; margin-top: 20px;">
      <el-table-column prop="paperTitle" label="论文标题" min-width="200" />
      <el-table-column prop="author" label="作者" width="120" />
      <el-table-column prop="status" label="状态" width="100">
        <template #default="scope">
          <el-tag :type="getStatusType(scope.row.status)">
            {{ getStatusText(scope.row.status) }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="assignDate" label="分配时间" width="150" />
      <el-table-column prop="deadline" label="截止时间" width="150" />
      <el-table-column label="操作" width="200" fixed="right">
        <template #default="scope">
          <el-button 
            size="small" 
            type="primary" 
            @click="startReview(scope.row)"
            v-if="scope.row.status === 'PENDING'"
          >
            开始评审
          </el-button>
          <el-button 
            size="small" 
            type="success" 
            @click="viewReview(scope.row)"
            v-if="scope.row.status === 'COMPLETED'"
          >
            查看评审
          </el-button>
          <el-button 
            size="small" 
            @click="continueReview(scope.row)"
            v-if="scope.row.status === 'IN_PROGRESS'"
          >
            继续评审
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getReviews } from '@/api/review';
import { ElMessage } from 'element-plus';

const router = useRouter();

// 数据
const reviews = ref([]);
const searchQuery = ref('');
const statusFilter = ref('');
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);

// 计算过滤后的评审列表
const filteredReviews = computed(() => {
  return reviews.value.filter(review => {
    const matchesSearch = review.paperTitle.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesStatus = !statusFilter.value || review.status === statusFilter.value;
    return matchesSearch && matchesStatus;
  });
});

// 获取状态类型
const getStatusType = (status) => {
  const types = {
    'PENDING': 'warning',
    'IN_PROGRESS': 'primary',
    'COMPLETED': 'success',
    'REJECTED': 'danger'
  };
  return types[status] || 'info';
};

// 获取状态文本
const getStatusText = (status) => {
  const texts = {
    'PENDING': '待评审',
    'IN_PROGRESS': '评审中',
    'COMPLETED': '已完成',
    'REJECTED': '已拒绝'
  };
  return texts[status] || status;
};

// 开始评审
const startReview = (review) => {
  router.push(`/reviews/new?paperId=${review.paperId}`);
};

// 查看评审
const viewReview = (review) => {
  router.push(`/reviews/${review.id}`);
};

// 继续评审
const continueReview = (review) => {
  router.push(`/reviews/new?paperId=${review.paperId}&reviewId=${review.id}`);
};

// 分页处理
const handleSizeChange = (val) => {
  pageSize.value = val;
  loadReviews();
};

const handleCurrentChange = (val) => {
  currentPage.value = val;
  loadReviews();
};

// 加载评审数据
const loadReviews = async () => {
  try {
    const response = await getReviews();
    reviews.value = response.data || [];
    total.value = reviews.value.length;
  } catch (error) {
    console.error('加载评审列表失败:', error);
    ElMessage.error('加载评审列表失败');
  }
};

onMounted(() => {
  loadReviews();
});
</script>

<style scoped>
.review-list-container {
  padding: 20px;
}

.filters {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>