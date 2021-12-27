<template>
  <div id="app">
    <div>
      <router-link to="/">Go to 首页</router-link>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to ElementUI</router-link>
    </div>
    <!-- 承载路由，路由匹配到的组件显示在这里 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
