<template>
  <div>
    <Header :back="true">dateRangePicker</Header>
    <Buttons>
      <Button @onClick="showDateRange = true">点击弹出 date range picker</Button>
    </Buttons>
    <XDateRangePicker @close="showDateRange = false" :show="showDateRange" @confirm="confirm" mode="week"></XDateRangePicker>
    <div :class="$style.tip">
      当前选中时间为: {{time}}
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showDateRange: false,
        time: ''
      }
    },
    methods: {
      confirm(data) {
        this.time = data.startTime + '至' + data.endTime
        this.showDateRange = false
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

  .tip
    padding 15px 20px
</style>