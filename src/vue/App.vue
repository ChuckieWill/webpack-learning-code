<template>
  <div>
    <h2 class="title">{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
        return {
          message: '我是.vue文件封装的APP组件',
        }
      }
  }
</script>

<style scoped>
  .title{
    color: green;
  }
</style>