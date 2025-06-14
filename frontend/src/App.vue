<template>
  <div id="app">
    <Header />
    <div class="main-content">
      <Sidebar />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Header from './components/common/Header.vue'
import Sidebar from './components/common/Sidebar.vue'
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.router-view {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
