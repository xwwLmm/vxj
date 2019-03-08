<template>
  <div>
    <Header>tips</Header>
    <div :class="$style.btns">
      <span @click="showAlert = true"> alert </span>
      <span @click="showToast = true"> toast </span>
      <span @click="showConfirm = true"> confirm </span>
    </div>
    <Alert @confirm="showAlert = false" v-if="showAlert" text="你确定吗兄弟????"></Alert>
    <Toast text="成功啦！！" v-if="showToast" @close="showToast = false"></Toast>
    <Confirm @close="showConfirm = false"
             @confirm="showConfirm = false"
             text="你确定要这样做吗？" v-if="showConfirm"></Confirm>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showAlert: false,
        showToast: false,
        showConfirm: false
      }
    }
  }
</script>
<style lang="stylus" module>
  .btns

    > span
      display inline-block
      margin-right 10px
      padding 10px
</style>