<template>
  <div>
    <div :class="$style.mask" v-if="showMask"></div>
    <div :class="$style.container">
      <div :class="$style.content">{{text}}</div>
      <div :class="$style.footer" @click="$emit('confirm')">{{confirmText}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Alert',
    props: {
      text: String,
      confirmText: {
        type: String,
        default: '确定'
      },
      showMask: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
<style lang="stylus" module>
  .container
    position fixed
    left 50%
    top 50%
    transform translate3d(-50%,-50%,0)
    width 240px
    background-color $light-color
    border 1px solid rgba(0,0,0,.2)
    border-radius 5px
    box-shadow 0 3px 9px rgba(0,0,0,.5)
    background-clip padding-box
    outline 0
    font-size 14px

  .mask
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    opacity .5
    background-color rgb(0, 0, 0)

  .content
    padding 24px 10px
    text-align center

  .footer
    padding 12px
    color $theme-color
    border-top 1px solid $border-color
    cursor pointer
    text-align center
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
</style>