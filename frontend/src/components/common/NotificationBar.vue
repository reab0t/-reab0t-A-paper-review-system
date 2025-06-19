<template>
  <div v-if="visible" class="notification-bar" :class="type">
    <span>{{ message }}</span>
    <button class="close-btn" @click="close">×</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const message = ref('')
const type = ref('info') // info, error, success, warning
let timer: any = null

function show(msg: string, t: string = 'info', duration = 3000) {
  message.value = msg
  type.value = t
  visible.value = true
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => visible.value = false, duration)
}
function close() {
  visible.value = false
}

defineExpose({ show })
</script>

<style scoped>
.notification-bar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;
  max-width: 400px;
  padding: 12px 24px;
  border-radius: 6px;
  color: #fff;
  z-index: 9999;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
}
.notification-bar.info { background: #409eff; }
.notification-bar.success { background: #67c23a; }
.notification-bar.error { background: #f56c6c; }
.notification-bar.warning { background: #e6a23c; }
.close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  margin-left: 16px;
}
</style> 