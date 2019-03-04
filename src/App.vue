<template>
  <div id="app">
    <div :class="$style.btns">
      <span @click="showLoading = true"> loading </span>
      <span @click="showAlert = true"> alert </span>
      <span @click="showToast = true"> toast </span>
      <span @click="showConfirm = true"> confirm </span>
    </div>
    <Loading :showMask="true" @click.native="showLoading = false" v-if="showLoading"></Loading>
    <Alert @confirm="showAlert = false" v-if="showAlert" text="你确定吗兄弟????"></Alert>
    <Toast text="成功啦！！" v-if="showToast" @close="showToast = false"></Toast>
    <Confirm @close="showConfirm = false" @confirm="showConfirm = false" text="你确定要这样做吗？" v-if="showConfirm"></Confirm>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      showLoading: false,
      showAlert: false,
      showToast: false,
      showConfirm: false
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
