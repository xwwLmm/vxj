<template>
  <div :class="$style.wrapper">
    <div :class="$style.content" @click.stop="$emit('onClick')">
      <div v-if="$slots.default">
        <slot name="default"></slot>
      </div>
      <div v-else>{{title}}</div>
      <slot name="right" v-if="$slots.right">
      </slot>
      <div :class="$style.right" v-else>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'XCell',
    props: {
      title: String
    }
  }
</script>
<style lang="stylus" module>
  .wrapper
    padding-left 20px
    background-color $light-color

  .content
    position relative
    display flex
    border-top 1px solid $border-color
    align-items center
    min-height 50px

    > div:first-child
      flex 1
      overflow hidden
      white-space nowrap
      text-overflow ellipsis

  .right
    &::after
      border 2px solid #c8c8cd
      border-bottom-width: 0
      border-left-width 0
      content ''
      top 50%
      right 15px
      position absolute
      width 7px
      height 7px
      transform translateY(-50%) rotate(45deg)

</style>