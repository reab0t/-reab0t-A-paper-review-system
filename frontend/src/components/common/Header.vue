<template>
  <header class="header">
    <h1>论文评审系统</h1>
    <nav>
      <a href="/">首页</a>
      <a href="/papers">论文列表</a>
      <a href="/reviews">评审列表</a>
      <a href="/login">登录</a>
      <a href="/register">注册</a>
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
</style>
