<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    // router
  },
}
</script>

<style lang="less">
html,body,h3{
  margin: 0;
  padding: 0;
}
button{
    padding: 4px 10px;
    margin-left: 9px;
    font-size: 12px;
    box-sizing: border-box;
    // border: 0.5px solid rgb(224, 223, 222);
    border-radius: 6px;
    // color: rgb(232, 122, 44);
    color:#409EFF;
    border: none;
}
</style>
