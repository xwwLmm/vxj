<template>
  <button :class="$style.container" @click="$emit('onClick')">
    <slot></slot>
  </button>
</template>
<script>
  export default {}
</script>
<style lang="stylus" module>
  .container
    position relative
    width 100%
    margin-bottom 20px
    padding 12px
    background-color #f6f8fa
    border 1px solid #b8bbbf
    font-size 16px
    border-radius 3px
    outline none
</style>