<template>
  <div :class="$style.container">
    <div :class="$style.bg" :style="bgStyle">
      <div :class="$style.active" :style="active"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'XProgress',
    props: {
      value: Number,
      height: {
        type: Number,
        default: 3
      },
      color: String
    },
    computed: {
      bgStyle() {
        return {
          borderRadius: this.height / 2 + 'px',
          height: this.height + 'px'
        }
      },
      active() {
        return {
          width: this.value + '%',
          borderRadius: this.height / 2 + 'px',
          backgroundColor: this.color
        }
      }
    }
  }
</script>
<style lang="stylus" module>
  .container
    position relative
    display flex
    align-items center

  .bg
    position relative
    flex 1
    height 3px
    background-color $remark-color

  .active
    position absolute
    left 0
    top 0
    bottom 0
    background-color $theme-color
    transition width .3s ease-out

</style>