<template>
  <div id="app" @click="onRouteChange">
    <router-link to="/">Home</router-link> |
    <router-link to="/page2">Page2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    // 子应用内部跳转时，通知侧边栏改变菜单状态
    onRouteChange() {
      if (window.eventCenterForAppNameVite) {
        // 发送全局数据，通知侧边栏修改菜单展示
        window.eventCenterForAppNameVite.setGlobalData({ name: 'child-vue' });
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
