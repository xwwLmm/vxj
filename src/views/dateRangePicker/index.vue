<template>
  <div>
    <Header :back="true">dateRangePicker</Header>
    <div :class="$style.btns">
      <span @click="showDateRange = true"> date range pick </span>
    </div>
    <XDateRangePicker @close="showDateRange = false" mode="single" v-if="showDateRange"></XDateRangePicker>
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