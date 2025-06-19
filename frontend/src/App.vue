<template>
  <NotificationBar ref="notificationBarRef" />
  <div id="app">
    <Header />
    <div class="main-content">
      <Sidebar />
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from './components/common/Header.vue'
import Sidebar from './components/common/Sidebar.vue'
import NotificationBar from '@/components/common/NotificationBar.vue'

const notificationBarRef = ref()
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
