<template>
  <div id="app">
    <Header />
    <Sidebar />
    <router-view />
  </div>
</template>

<script setup>
import Header from './components/common/Header.vue';
import Sidebar from './components/common/Sidebar.vue';
</script>
