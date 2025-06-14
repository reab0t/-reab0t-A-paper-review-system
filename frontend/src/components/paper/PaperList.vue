<template>
  <div>
    <h2>论文列表</h2>
    <el-table :data="papers" border style="width: 100%">
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="author" label="作者" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button @click="viewPaper(scope.row.id)">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const papers = ref([
  { id: 1, title: '论文一', author: '张三' },
  { id: 2, title: '论文二', author: '李四' },
]);

const router = useRouter();

const viewPaper = (id) => {
  router.push(`/papers/${id}`);
};
</script>
