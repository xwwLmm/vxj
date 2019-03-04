<template>
  <div id="app">
    <div :class="$style.btns">
      <span @click="showLoading = true"> loading </span>
      <span @click="showAlert = true"> alert </span>
      <span @click="showToast = true"> toast </span>
    </div>
    <Loading :showMask="true" @click.native="showLoading = false" v-if="showLoading"></Loading>
    <Alert @confirm="showAlert = false" v-if="showAlert" text="你确定吗兄弟????"></Alert>
    <Toast text="成功啦！！" v-if="showToast" @close="showToast = false"></Toast>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      showLoading: false,
      showAlert: false,
      showToast: false
    }
  }
}
</script>
<style lang="stylus" module>
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color #2c3e50

  .btns

    > span
      margin-right 10px
      padding: 10px

</style>
