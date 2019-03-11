<template>
  <div>
    <Header :back="true">picker</Header>

    <XPickerItem :values="months" :default-index="monthIndex" @toggle="toggleMonth"></XPickerItem>

    <div :class="$style.result">当前选中: {{month}}</div>

    <XDatePicker></XDatePicker>
  </div>
</template>
<script>
  import moment from 'moment'
  export default {
    data() {
      const month = +moment().format('MM')
      return {
        months: new Array(12).fill(0).map((v, i) => i + 1),
        monthIndex: month - 1,
        month
      }
    },
    methods: {
      toggleMonth(index) {
        this.month = index + 1
      }
    }
  }
</script>
<style lang="stylus" module>
  .result
    padding 15px
    font-size 12px
</style>