<template>
  <div>
    <Header :back="true">progress</Header>
    <XCell>
      <div :class="$style.container">
        <div :class="$style.left">
          <div>progress</div>
          <div>默认</div>
        </div>

        <XProgress ></XProgress>
      </div>
      <span slot="right"></span>
    </XCell>
    <XCell>
      <div :class="$style.container">
        <div :class="$style.left">
          <div>progress</div>
          <div>高度10px, 宽度30%</div>
        </div>

        <XProgress :value="30" :height="10"></XProgress>
      </div>
      <span slot="right"></span>
    </XCell>
    <XCell>
      <div :class="$style.container">
        <div :class="$style.left">
          <div>progress</div>
          <div>高度5px, 自定义颜色</div>
        </div>

        <XProgress :value="30" :height="5" color="#ff839f"></XProgress>
      </div>
      <span slot="right"></span>
    </XCell>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" module>
  .container
    display flex

    > :nth-child(2)
      flex 1
      padding 0 30px 0 10px

  .left
    width 120px
    padding-right 10px
    font-size 12px
</style>