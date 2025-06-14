<template>
  <div class="paper-upload">
    <h2>上传论文</h2>
    <input type="file" @change="handleFileChange" />
    <button @click="uploadPaper">上传</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios'; // 假设你已经安装了 axios

const selectedFile = ref<File | null>(null);

function handleFileChange(event: Event): void {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    selectedFile.value = target.files[0];
  }
}

async function uploadPaper(): Promise<void> {
  if (!selectedFile.value) {
    alert('请选择要上传的文件！');
    return;
  }

  const formData = new FormData();
  formData.append('file', selectedFile.value);

  try {
    await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    alert('上传成功！');
  } catch (error) {
    console.error('上传失败:', error);
    alert('上传失败！');
  }
}
</script>

<style scoped>
.paper-upload {
  margin: 20px;
}
</style>
