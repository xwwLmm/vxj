<template>
  <div>
    <Header>loading</Header>
    <div :class="$style.btns">
      <span @click="showLoading = true"> loading </span>
    </div>
    <Loading :showMask="true" @click.native="showLoading = false" v-if="showLoading"></Loading>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showLoading: false
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