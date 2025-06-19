<template>
  <aside class="sidebar">
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/papers">论文列表</router-link></li>
      <li><router-link to="/papers/upload">上传论文</router-link></li>
      <li><router-link to="/reviews">评审列表</router-link></li>
      <li><router-link to="/login">登录</router-link></li>
      <li><router-link to="/register">注册</router-link></li>
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
  display: block;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;
}
.sidebar a:hover {
  background-color: #e0e0e0;
}
.sidebar a.router-link-active {
  background-color: #409eff;
  color: white;
}
</style>
