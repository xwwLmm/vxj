<template>
  <div :class="$style.container">
    <span :class="$style.back" v-if="back">&lt;</span>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      back: Boolean,
      text: String
    }
  }
</script>
<style lang="stylus" module>
  .container
    position relative
    padding 15px
    font-size 18px
    text-align center

  .back
    position absolute
    padding 5px
    left 15px
    top 15px
</style>