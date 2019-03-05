<template>
  <span :class="[$style.container, active ? $style.active : '']" :style="style" @click="$emit('toggle')">
  </span>
</template>
<script>
  export default {
    name: 'XSwitch',
    props: {
      width: {
        type: Number,
        default: 40
      },
      active: Boolean
    },
    computed: {
      style() {
        return {
          width: this.width + 'px'
        }
      }
    }
  }
</script>
<style lang="stylus" module>
  .container
    position relative
    display inline-block
    margin 0
    height 20px
    background-color $disabled-color
    border 1px solid $disabled-color
    border-radius 10px
    box-sizing border-box
    transition border-color .3s ease, background-color .3s ease
    transition-delay 4ms
    cursor pointer
    outline none
    overflow hidden

    &::after
      content ''
      position absolute
      left 1px
      top 1px
      width 16px
      height 16px
      background-color $light-color
      border-radius 8px
      transition all .3s ease

  .active
    background-color $theme-color
    border-color $theme-color

    &::after
      left 100%
      margin-left -17px

</style>