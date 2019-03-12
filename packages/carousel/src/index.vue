<template>
  <div>
    <div :class="$style.container" :style="{width}" v-if="images.length">
      <div :style="containerStyle">
        <img :src="img" v-for="(img, index) in imgs" :key="index" :style="itemStyle">
      </div>
      <template v-if="arrow">
        <div :class="$style.left" :style="{top: arrowTop}" @click="minus"></div>
        <div :class="$style.right" :style="{top: arrowTop}" @click="add"></div>
      </template>

      <div :class="$style.dots" v-if="hasDots && imgs.length > 2">
        <span v-for="i in (imgs.length - 1)"
              :class="(i - 1 === currentIndex) || (currentIndex === imgs.length - 1 && i === 1) ? $style.active : $style.inactive"
              :key="i"
        ></span>
      </div>
    </div>
  </div>
</template>
<script>
  const debounce = function (action, delay = 300, context) {
    let timeout
    function callback() {
      timeout = null
      action.apply(context, arguments)
    }

    return function () {
      context = context || this
      clearTimeout(timeout)
      timeout = setTimeout(callback, delay)
    }
  }
  export default {
    name: 'XCarousel',
    props: {
      images: Array,
      height: {
        type: Number,
        default: 180
      },
      duration: {
        type: Number,
        default: 1
      },
      arrow: {
        type: Boolean,
        default: true
      },
      hasDots: {
        type: Boolean,
        default: true
      }
    },
    data() {
      let imgs = this.images ? this.images.slice() : []
      if (imgs && imgs.length) {
        imgs.push(imgs[0])
      }
      return {
        imgs,
        currentIndex: 0,
        width: '100%',
        timer: null
      }
    },
    computed: {
      containerStyle() {
        return {
          width: 100 * this.imgs.length + '%',
          transition: this.currentIndex !== (this.imgs.length) ? `transform ${this.duration}s ease` : null,
          transform: `translate3d(${
          -(this.currentIndex >= this.imgs.length ? 0 : this.currentIndex) * 100 / this.imgs.length + '%'
              },0, 0)`
        }
      },
      itemStyle() {
        return {
          width: 100 / this.imgs.length + '%',
          height: this.height + 'px'
        }
      },
      arrowTop() {
        return (this.height - 26) / 2 + 'px'
      }
    },
    mounted() {
      this.startTimer()
    },
    methods: {
      startTimer() {
        clearInterval(this.timer)
        if (this.imgs.length > 2) {
          this.timer = setInterval(() => {
            if (this.currentIndex === this.imgs.length - 1) {
              this.currentIndex++
              setTimeout(() => { this.currentIndex = 1 }, 100)
            } else {
              this.currentIndex++
            }
          }, 2500)
        }
      },
      minus: debounce(function () {
        if (this.currentIndex <= 0) return
        this.currentIndex--
        this.startTimer()
      }, 200),
      add: debounce(function () {
        if (this.currentIndex >= this.imgs.length - 2) return
        this.currentIndex++
        this.startTimer()
      }, 100)
    }
  }
</script>
<style lang="stylus" module>
  .container
    position relative
    overflow hidden
    font-size 0

  .left
    position absolute
    text-align center
    width 26px
    height 26px
    border-radius 13px
    background-color rgba(0,0,0, .3)
    color #e3e5d1
    left 10px

    &::after
      border 2px solid $light-color
      border-bottom-width 0
      border-left-width 0
      content ''
      top 50%
      left 10px
      position absolute
      width 7px
      height 7px
      transform translateY(-50%) rotate(-135deg)

  .right
    position absolute
    text-align center
    width 26px
    height 26px
    border-radius 13px
    background-color rgba(0,0,0, .3)
    color #e3e5d1
    right 10px

    &::after
      border 2px solid $light-color
      border-bottom-width 0
      border-left-width 0
      content ''
      top 50%
      right 10px
      position absolute
      width 7px
      height 7px
      transform translateY(-50%) rotate(45deg)

  .dots
    position absolute
    left 0
    right 0
    bottom 15px
    text-align center

    > span
      display inline-block
      width 8px
      height 8px
      margin 0 4px
      border-radius 4px
      opacity .4

  .active
    background $dark-color
    transition background .5s, opacity .5s
    opacity 1!important

  .inactive
    background $light-color
    transition background .5s, opacity .5s
    opacity 1!important
</style>