<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="stylus" module>
  *
    margin 0

  body
    background #f8f8f8

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color #2c3e50

  .btns

    > span
      display inline-block
      margin-right 10px
      padding 10px

</style>
