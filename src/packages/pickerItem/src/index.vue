<template>
  <div :class="$style.container" :style="{height: contentHeight + 'px'}">
    <ul :style="activeTop" @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
      <li @click.prevent.stop="handleLetterClick(index)"
          v-for="(value, index) in values"
          :class="currentIndex === index ? $style.active : ''"
          :style="itemStyle" :key="index * 2">{{isObject(value) ? value[textKey] : value}}</li>
    </ul>
    <div :class="$style.border" :style="topBorder"></div>
    <div :class="$style.border" :style="bottomBorder"></div>
  </div>
</template>
<script>
  function isObject(val) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false
  }

  export default {
    name: 'XPickerItem',
    props: {
      defaultIndex: {
        type: Number,
        default: 0
      },
      values: {
        type: Array,
        required: true,
        validator: function (val) {
          return val.length > 0
        },
        textKey: {
          type: String,
          default: 'text'
        },
        valueKey: {
          type: String,
          default: 'value'
        }
      },
      itemHeight: {
        type: Number,
        default: 36
      },
      visibleCount: {
        type: Number,
        default: 5
      },
      minIndex: {
        type: Number,
        validator(val) {
          return val >= 0
        },
        default: 0
      }
    },
    data() {
      return {
        currentIndex: this.defaultIndex || this.minIndex,
        translateStartY: 0,
        translateY: 0
      }
    },
    computed: {
      contentHeight() {
        return this.itemHeight * this.visibleCount
      },
      itemStyle() {
        return {
          lineHeight: this.itemHeight + 'px',
          height: this.itemHeight + 'px'
        }
      },
      baseTop() {
        return Math.floor(this.visibleCount / 2) * this.itemHeight
      },
      activeTop() {
        const offset = `translateY(${this.baseTop - this.currentIndex * this.itemHeight + this.translateY}px)`
        return {
          transform: offset
        }
      },
      topBorder() {
        return {
          top: this.baseTop + 'px'
        }
      },
      bottomBorder() {
        return {
          top: this.baseTop + this.itemHeight + 'px'
        }
      }
    },
    watch: {
      defaultIndex(index) {
        this.currentIndex = index
      },
      minIndex(index) {
        this.currentIndex = index
      }
    },
    methods: {
      isObject(val) {
        return isObject(val)
      },
      handleTouchStart(e) {
        this.translateStartY = e.touches[0].clientY
      },
      handleTouchMove(e) {
        this.translateY = e.touches[0].clientY - this.translateStartY
      },
      handleTouchEnd() {
        const translateY = this.translateY
        const offset = Math.round(-translateY / this.itemHeight)
        if (offset < 0) {
          this.currentIndex = Math.max(0, this.minIndex, this.currentIndex + offset)
        } else {
          this.currentIndex = Math.min(this.values.length - 1, this.currentIndex + offset)
        }

        this.translateStartY = this.translateY = 0

        this.$emit('toggle', this.currentIndex, this.values[this.currentIndex])
      },
      handleLetterClick(index) {
        if (index < this.minIndex) return
        this.currentIndex = index
        this.$emit('toggle', this.currentIndex, this.values[this.currentIndex])
      }
    }
  }
</script>
<style lang="stylus" module>
  .container
    position relative
    height 100%
    padding 0
    overflow hidden
    background-color $light-color

    ul
      transition transform .3s ease-out
      padding 0

    li
      list-style none
      text-align center
      cursor pointer
      color $grey-color
      outline none

  .border
    position absolute
    border 1px solid $border-color
    width 100%
    transform scaleY(.7)

  .active
    color $primary-color!important
</style>