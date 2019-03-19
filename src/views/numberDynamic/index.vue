<template>
  <div>
    <Header :back="true">number dynamic</Header>

    <div :class="$style.number">
      <XNumberDynamic :number="number"></XNumberDynamic>
      <br>
      <span>数字为:123</span>
    </div>

    <div :class="$style.number">
      <XNumberDynamic :number="number1"></XNumberDynamic>
      <br>
      <span>随机生成数字</span>
    </div>
    <div :class="$style.number">
      <XNumberDynamic :number="number2" :totalDelay="3000" :intervalDelay="30"></XNumberDynamic>
      <br>
      <span>随机生成数字, 动态时间3000s,刷新速度30ms</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        number: 123,
        number1: 985,
        number2: 211
      }
    },
    mounted() {
      setInterval(() =>{
        this.number1 = +(Math.random() * 100 + '').substr(0, 2)
      }, 3000)

      setInterval(() =>{
        this.number2 = +(Math.random() * 10000 + '').substr(0, 2)
      }, 5000)
    }
  }
</script>
<style lang="stylus" module>
  .number
    padding 40px 0
    text-align center

    > span:first-child
      font-size 36px
      color $theme-color

</style>