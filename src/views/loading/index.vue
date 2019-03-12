<template>
  <div>
    <Header :back="true">loading</Header>
    <Buttons>
      <Button @onClick="showLoading = true">点击展示 loading</Button>
    </Buttons>
    <Loading :showMask="true" :show="showLoading" @click.native="showLoading = false"></Loading>
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