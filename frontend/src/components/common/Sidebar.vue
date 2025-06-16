<template>
  <aside class="sidebar">
    <ul>
      <li><a href="/">首页</a></li>
      <li><a href="/papers">论文列表</a></li>
      <li><a href="/papers/upload">上传论文</a></li>
      <li><a href="/reviews">评审列表</a></li>
      <li><a href="/login">登录</a></li>
      <li><a href="/register">注册</a></li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 20px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  margin-bottom: 10px;
}
.sidebar a {
  text-decoration: none;
  color: #333;
}
</style>
