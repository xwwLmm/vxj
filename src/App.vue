<template>
  <div id="app">
    <div :class="$style.btns">
      <span @click="showLoading = true"> loading </span>
      <span @click="showAlert = true"> alert </span>
      <span @click="showToast = true"> toast </span>
      <span @click="showConfirm = true"> confirm </span>
    </div>
    <div>
      <span style="margin-left: 10px">
        <XSwitch :active="switchActive" @toggle="switchActive = !switchActive"></XSwitch>
      </span>
    </div>
    <XCell @onClick="clickCell" title="111">222</XCell>
    <div style="margin-top: 10px">
      <XTab :items="items" @toggle="toggleTab"></XTab>
    </div>
    <div style="margin-top: 10px">
      <XCarousel :images="images"></XCarousel>
    </div>

    <div style="margin-top: 10px">
      <XSearch @search="search">
        <span style="padding-left: 10px;line-height: 30px;" slot="left">1111</span>
        <span style="padding-left: 10px;line-height: 30px;" slot="right">222</span>
      </XSearch>
    </div>
    <Loading :showMask="true" @click.native="showLoading = false" v-if="showLoading"></Loading>
    <Alert @confirm="showAlert = false" v-if="showAlert" text="你确定吗兄弟????"></Alert>
    <Toast text="成功啦！！" v-if="showToast" @close="showToast = false"></Toast>
    <Confirm @close="showConfirm = false"
             @confirm="showConfirm = false"
             text="你确定要这样做吗？" v-if="showConfirm"></Confirm>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      showLoading: false,
      showAlert: false,
      showToast: false,
      showConfirm: false,
      switchActive: false,
      items: '测试看看嫩嗯嗯嗯嗯呢'.split('').map(v => v),
      images: new Array(5).fill(0).map((v, i) => `http://lorempixel.com/400/${200 - i}/`)
    }
  },
  methods: {
    clickCell() {
      // eslint-disable-next-line
      console.log('xxx')
    },
    toggleTab() {
      // eslint-disable-next-line
      console.log(arguments)
    },
    search(searchText) {
      // eslint-disable-next-line
      console.log(searchText)
    }
  }
}
</script>
<style lang="stylus" module>
  *
    margin 0

  body
    background #f8f8f8

  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color #2c3e50

  .btns

    > span
      display inline-block
      margin-right 10px
      padding 10px

</style>
