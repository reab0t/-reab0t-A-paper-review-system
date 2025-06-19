<template>
  <header class="header">
    <h1>论文评审系统</h1>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/papers">论文列表</router-link>
      <router-link to="/reviews">评审列表</router-link>
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav a {
  color: white;
  margin-left: 15px;
  text-decoration: none;
}
nav a.router-link-active {
  color: #409eff;
  font-weight: bold;
}
</style>
