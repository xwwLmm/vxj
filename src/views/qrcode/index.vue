<template>
  <div>
    <Header :back="true">qrcode</Header>
    <div :class="$style.tip">在输入框中修改二维码内容</div>
    <div :class="$style.input">
      <input v-model="value"/>
    </div>
    <div :class="$style.qr">
      <Xqrcode :value="value" tag="img"></Xqrcode>
      <br>
      <span>类型为img, 宽高80px</span>
    </div>

    <div :class="$style.qr">
      <Xqrcode :value="value"></Xqrcode>
      <br>
      <span>类型为canvas, 宽高80px</span>
    </div>

    <div :class="$style.qr">
      <Xqrcode :value="value" :width="100" :height="100" :options="{color: {dark: '#20a19fff', light: '#ffffffff'}}">
      </Xqrcode>
      <br>
      <span>类型为canvas, 宽高100px, 颜色#20a19f</span>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
       return {
         value: 'baidu.com'
       }
    }
  }
</script>
<style lang="stylus" module>
  .tip
    padding 15px 0 15px 15px
    font-size 14px

  .input
    padding 5px 15px
    background-color $light-color

    input
      width 100%
      padding 0 10px
      border 1px solid $border-color
      border-radius 15px
      line-height 20px
      height 30px
      background-color $bg-color


  .qr
    padding 10px
    text-align center
    font-size 14px
</style>