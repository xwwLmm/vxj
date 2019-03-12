<template>
  <div>
    <div :class="$style.mask" v-if="showMask"></div>
    <div :class="$style.container">
      <div :class="$style.content">
        <div :class="$style.child" v-for="child in children" :key="child">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Loading',
    props: {
      showMask: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        children: new Array(12).fill().map((val, index) => index + 1)
      }
    }
  }
</script>
<style lang="stylus" module>
  .container
    position fixed
    left 50%
    top 50%
    transform translate3d(-50%, -50%, 0)
    width 75px
    height 75px
    z-index 600
    background-color rgba(0, 0, 0, .5)
    border-radius 5px

  .content
    position absolute
    left 50%
    top 50%
    transform translate3d(-50%, -50%, 0)
    width 50px
    height 50px

    for i in 2..12
        > div:nth-child({i})
            transform rotate((30 * i - 30)deg)

        > div:nth-child({i})::before
            animation-delay ((-12 + i - 1) / 10)s

  .child
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    absolute(left, top)
    z-index 200

  .child:before
    content ''
    display block
    margin 0 auto
    width 16%
    height 16%
    background-color $light-color
    border-radius 100%
    animation loading-circleBounceDelay 1.2s infinite ease-in-out both

  @-webkit-keyframes loading-circleBounceDelay
    0%
      transform scale(.3)

    100%
      transform scale(1)

  @keyframes loading-circleBounceDelay
    0%
      transform scale(1)

    100%
      transform scale(.3)

  .mask
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    opacity .5
    background-color rgb(0, 0, 0)
</style>