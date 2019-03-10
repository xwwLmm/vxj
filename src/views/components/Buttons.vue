<template>
  <div :class="$style.container">
    <slot></slot>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" module>
  .container
    position absolute
    top 40%
    width 100%
    padding 20px
    transform translateY(-50%)
</style>