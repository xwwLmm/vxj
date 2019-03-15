<template>
  <div>
    <Header :back="true">dateRangePicker</Header>
    <Buttons>
      <Button @onClick="showDateRange = true">点击弹出 date range picker</Button>
    </Buttons>
    <XDateRangePicker @close="showDateRange = false" :show="showDateRange" mode="week"></XDateRangePicker>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showDateRange: false
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