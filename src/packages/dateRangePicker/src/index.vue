<template>
  <div>
    <div :class="$style.mask"></div>
    <div :class="$style.container">
      <div :class="$style.title">
        <div>
          <span @click.stop="closeModal">取消</span>
        </div>
        <div :class="$style.confirm">
          <span @click.stop="confirmModal">确定</span>
        </div>
      </div>

      <div :class="$style.header">
        <div :class="$style.arrow">
          <span :class="$style.arrowAvailable" @click.stop="minusYear"> &lt; </span>
          <span>{{year}}年</span>
          <span :class="$style.arrowAvailable" @click.stop="addYear"> &gt; </span>
        </div>
        <div :class="$style.arrow">
          <span :class="$style.arrowAvailable" @click.stop="minusMonth"> &lt; </span>
          <span>{{month}}月</span>
          <span :class="$style.arrowAvailable" @click.stop="addMonth"> &gt; </span>
        </div>
      </div>

      <div :class="$style.weekText">
        <span v-for="text in weekText" :key="text">{{text}}</span>
      </div>

      <div :class="$style.days">
        <div v-for="left in monthLeft" :key="year + '-' + month + '-' + left">&nbsp;</div>
        <div :class="[day.checked && (day.moment === startTime || day.moment === endTime) ? $style.terminal : '']"
             v-for="day in days" :key="day.moment">
          <span :class="day.available ? '' : $style.unavailable"
                :style="{backgroundColor: day.checked ? ((day.moment === startTime || day.moment === endTime) ? weightColor : lightColor) : ''}"
                @click.stop="toggleCheck(day)">
            <template v-if="['week', 'range'].includes(mode)">
              <div v-if="day.checked && startTime === day.moment">开始</div>
              <div v-else-if="day.checked && endTime === day.moment">结束</div>
              <div v-else>{{ day.moment | formatDate}}</div>
            </template>
            <div v-else>{{ day.moment | formatDate}}</div>

          </span>

          <span :style="leftPadding"
                v-if="day.checked && day.moment === endTime && index > 0 && days[index - 1].checked"></span>
          <span :style="rightPadding"
                v-if="day.checked && day.moment === startTime && index < days.length - 1 && days[index + 1].checked"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'

  const DATE_FORMAT = 'YYYY-MM-DD'

  const hex2RGB = (hex) => {
    let sColor = hex.toLowerCase()
    // 十六进制颜色值的正则表达式
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    // 如果是16进制颜色
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = '#'
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
        }

        sColor = sColorNew
      }
      // 处理六位的颜色值
      const sColorChange = []
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
      }
      return sColorChange
    }
  }

  export default {
    name: 'XDateRangePicker',
    props: {
      defaultStartTime: String,
      defaultEndTime: String,
      availableStartDate: String,
      availableEndDate: String,
      mode: {
        type: String,
        default: 'range' // ['single', 'range', 'week']
      }
    },
    data() {
      const {defaultStartTime, defaultEndTime, availableStartDate, availableEndDate} = this

      if (availableStartDate && availableEndDate && (availableStartDate > availableEndDate)) {
        throw new Error('availableStartDate must no more than availableEndDate')
      }
      return {
        startTime: defaultStartTime || availableStartDate,
        endTime: defaultEndTime || availableEndDate,
        year: moment().format('YYYY'),
        month: moment().format('MM'),
        days: []
      }
    },
    computed: {
      weekText() {
        return this.mode === 'week'
            ? ['一', '二', '三', '四', '五', '六', '日']
            : ['日', '一', '二', '三', '四', '五', '六']
      },
      monthLeft() {
        const month = moment(this.year + '-' + this.month + '-' + '01')
        return (month.isoWeekday() - (this.mode === 'week' ? 1 : 0)) % 7
      },
      weightColor() {
        return '#20a19f'
      },
      lightColor() {
        return 'rgba(' + hex2RGB(this.weightColor).join(',') + ', 0.4)'
      },
      leftPadding() {
        return {
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '8px',
          backgroundColor: this.lightColor
        }
      },
      rightPadding() {
        return {
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '8px',
          backgroundColor: this.lightColor
        }
      }
    },
    created() {
      this.resetMonth()
    },
    methods: {
      resetMonth() {
        const {availableStartDate, availableEndDate} = this
        const firstDayOfMonth = this.year + '-' + this.month + '-' + '01'
        const currentMoment = moment(firstDayOfMonth)
        const dayNum = moment(currentMoment).daysInMonth()
        const days = []
        const {startTime, endTime} = this
        for (let i = 1; i <= dayNum; i++) {
          const date = moment(currentMoment).date(i).format('YYYY-MM-DD')
          let checked = false
          if (startTime && endTime) {
            if (date >= startTime && date <= endTime) checked = true
          } else if (startTime) {
            if (date === startTime) checked = true
          }

          days.push({
            checked,
            available: (!availableStartDate || (moment(availableStartDate).format(DATE_FORMAT)) <= date) &&
                (!availableEndDate || moment(availableEndDate).format(DATE_FORMAT) >= date),
            moment: date
          })
        }
        this.days = days
      },
      minusMonth() {
        const preMonth = moment([this.year, this.month, '01'].join('-')).add(-1, 'months')
        this.month = preMonth.format('MM')
        this.year = preMonth.format('YYYY')
        this.resetMonth()
      },
      addMonth() {
        const nextMonth = moment([this.year, this.month, '01'].join('-')).add(1, 'months')
        this.month = nextMonth.format('MM')
        this.year = nextMonth.format('YYYY')
        this.resetMonth()
      },
      minusYear() {
        const preYear = moment([this.year, this.month, '01'].join('-')).add(-1, 'years')
        this.month = preYear.format('MM')
        this.year = preYear.format('YYYY')
        this.resetMonth()
      },
      addYear() {
        const preYear = moment([this.year, this.month, '01'].join('-')).add(1, 'years')
        this.month = preYear.format('MM')
        this.year = preYear.format('YYYY')
        this.resetMonth()
      },
      toggleCheck(day) {
        if (!day.available) return

        if (this.mode === 'week') {
          this.startTime = moment(day.moment).startOf('isoWeek').format(DATE_FORMAT)
          this.endTime = moment(day.moment).endOf('isoWeek').format(DATE_FORMAT)
        } else if (this.mode === 'range') {
          if (!this.startTime && !this.endTime) {
            this.startTime = day.moment
          } else if (!this.endTime) {
            if (this.startTime > day.moment) {
              const temp = this.startTime
              this.startTime = day.moment
              this.endTime = temp
            } else if (this.startTime < day.moment) {
              this.endTime = day.moment
            }
          } else {
            this.startTime = day.moment
            this.endTime = null
          }
        } else {
          this.startTime = day.moment
          this.endTime = null
        }

        this.resetMonth()
      },
      closeModal() {
        this.$emit('close')
      },
      confirmModal() {
        if (!this.startTime) return
        this.$emit('confirm', {
          startTime: this.startTime,
          endTime: this.endTime || this.startTime
        })
      }
    },
    filters: {
      formatDate(date) {
        return moment(date).format('D')
      }
    }
  }
</script>
<style lang="stylus" module>
  .mask
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    opacity .5
    background-color rgb(0, 0, 0)

  .container
    position fixed
    bottom 0
    left 0
    right 0
    z-index 500

    *
      box-sizing border-box

  .title
    display flex
    background-color $bg-color
    border-bottom 1px solid $border-color

    > div
      flex 1

      > span
        display inline-block
        padding 10px 20px
        color $grey-color

    > div:last-child
      text-align right

  .header
    display flex
    padding-top 6px
    background-color $light-color

    > div
      flex 1
      display flex
      padding 8px 30px
      text-align center

      > span
        flex 1
        white-space nowrap

      > span:first-child
        text-align left
        color $grey-color

      > span:last-child
        text-align right
        color $grey-color

  .confirm

    > span
      color $theme-color!important

  .weekText
    background-color $light-color

    > span
      display inline-block
      width 14%
      text-align center

    > span:nth-child(7n+0), span:nth-child(7n+1)
      width 15%

  .days
    transform translate3d(0, 0, 0)
    font-size 0
    background-color $light-color

    > div
      position relative
      display inline-block
      font-size 14px
      width 14%
      height 44px
      line-height 44px
      text-align center

      > span
        display block
        line-height 44px
        height 44px

    > div:nth-child(7n+0), > div:nth-child(7n+1)
      width 15%

  .terminal
    padding 0 4px

    > span:first-child
      color $light-color
      border-radius 4px

  .unavailable
    color $remark-color

  .arrow-available
    color $disabled-color!important

</style>