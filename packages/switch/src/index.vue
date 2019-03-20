<template>
  <span :class="[$style.container, active ? $style.active : '', disabled ? $style.disabled : '']" @click="!disabled && $emit('toggle')" :style="style">
    <span :class="$style.bg"></span>
    <span></span>
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
      active: Boolean,
      disabled: Boolean
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
    border-radius 10px
    box-sizing border-box

    > span:last-child

      &::after
        content ''
        position absolute
        left 2px
        top 2px
        width 16px
        height 16px
        background-color $light-color
        border-radius 8px
        transition all .3s ease

  .bg
    display inline-block
    width 100%
    height 100%
    background-color $theme-color
    border-radius 10px
    box-sizing border-box
    transition transform .2s ease
    transition-delay 4ms
    cursor pointer
    outline none
    overflow hidden
    transform scale(0)

  .active

    > span:first-child
      transform scale(1)

    > span:last-child

      &::after
        left 100%
        margin-left -18px

  .disabled
    cursor not-allowed
</style>