<template>
  <div :class="$style.container">
    <PickerItem :values="years" @toggle="toggleYear" :defaultIndex="year"></PickerItem>
    <div :class="$style.divider"><span></span></div>
    <PickerItem :values="months" @toggle="toggleMonth" :defaultIndex="month"></PickerItem>
    <div :class="$style.divider"><span></span></div>
    <PickerItem :values="days" @toggle="toggleDay" :defaultIndex="day"></PickerItem>
  </div>
</template>
<script>
  import moment from 'moment'
  import PickerItem from '../../pickerItem/src/index'

  export default {
    name: 'XDatePicker',
    props: {
      maxYear: {
        type: Number,
        default: 2050
      },
      minYear: {
        type: Number,
        default: 1900
      },
      defaultDate: String
    },
    data() {
      if (this.maxYear < this.minYear) {
        throw new Error('minYear must not bigger than maxYear')
      }
      const date = this.defaultDate ? moment(this.defaultDate) : moment()
      const years = new Array(this.maxYear - this.minYear + 1).fill(0).map((v, i) => i + this.minYear)
      const months = new Array(12).fill(0).map((v, i) => (i + 1 >= 10 ? '' : '0') + (i + 1))
      return {
        years ,
        months ,
        year: years.findIndex(year => year === +date.format('YYYY')),
        month: months.findIndex(month => month === date.format('MM')),
        day: +date.format('DD') - 1
      }
    },
    computed: {
      days() {
        const date = moment([this.years[this.year], this.months[this.month], '01'].join('-'))

        const days = date.daysInMonth()
        return new Array(days).fill(0).map((v, i) => (i + 1 >= 10 ? '' : '0') + (i + 1))
      }
    },
    methods: {
      toggleYear(index) {
        this.year = index
        this.day = 0
        this.toggle()
      },
      toggleMonth(index) {
        this.month = index
        this.day = 0
        this.toggle()
      },
      toggleDay(index) {
        this.day = index
        this.toggle()
      },
      toggle() {
        const date = [this.years[this.year], this.months[this.month], this.days[this.day]].join('-')
        this.$emit('toggle', date)
      }
    },
    components: {
      PickerItem
    }
  }
</script>
<style lang="stylus" module>
  .container
    position relative
    display flex

    > :nth-child(odd)
      flex 1

  .divider
    position relative
    display flex
    align-items center
    width 10px
    background-color $light-color

    > span
      display inline-block
      width 15px
      height 2px
      background-color $remark-color
</style>