<template>
  <div class="login-form">
    <h2>登录</h2>
    <form @submit.prevent="login">
      <div>
        <label>用户名：</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label>密码：</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref()
const router = useRouter()

const login = () => {
  // 模拟登录逻辑
  console.log('登录成功')
  router.push('/')
}
</script>

<style scoped>
.login-form {
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
