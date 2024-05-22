<template>
  <div id="app" @click="onRouteChange">
    <router-link to="/">Home</router-link> |
    <router-link to="/page2">Page2</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
// 子应用内部跳转时，通知侧边栏改变菜单状态
const onRouteChange = () => {
  if (window.eventCenterForAppNameVite) {
    // 发送全局数据，通知侧边栏修改菜单展示
    window.eventCenterForAppNameVite.setGlobalData({ name: 'child-vite' });
  }
};
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
