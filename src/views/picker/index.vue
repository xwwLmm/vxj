<template>
  <div>
    <Header :back="true">picker</Header>

    <XPickerItem :values="months" :default-index="monthIndex" @toggle="toggleMonth"></XPickerItem>
    <div :class="$style.result">当前选中: {{month}}</div>

    <XDatePicker @toggle="toggleDate"></XDatePicker>
    <div :class="$style.result">当前选中: {{date}}</div>

    <XRegionPicker @toggle="toggleRegion"></XRegionPicker>
    <div :class="$style.result">当前选中: {{area}}</div>
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
        month,
        date: moment().format('YYYY.MM.DD'),
        area: '北京市'
      }
    },
    methods: {
      toggleMonth(index) {
        this.month = index + 1
      },
      toggleDate(date) {
        this.date = moment(date).format('YYYY.MM.DD')
      },
      toggleRegion(region) {
        this.area = region.name.join('-')
      }
    }
  }
</script>
<style lang="stylus" module>
  .result
    padding 15px 15px 30px
    font-size 12px
</style>