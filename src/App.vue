<template>
  <div id="app">

    <div style="margin-top: 10px">
      <XCarousel :images="images"></XCarousel>
    </div>

    <div style="margin-top: 10px">
      <XSearch @search="search">
        <span style="padding-left: 10px;line-height: 30px;" slot="left">1111</span>
        <span style="padding-left: 10px;line-height: 30px;" slot="right">222</span>
      </XSearch>
    </div>

    <div :class="$style.btns">
      <span @click="showDateRange = true"> date range pick </span>
    </div>


    <XDateRangePicker @close="showDateRange = false" mode="single" v-if="showDateRange"></XDateRangePicker>
    <router-view></router-view>
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
      images: new Array(5).fill(0).map((v, i) => `http://lorempixel.com/400/${200 - i}/`),
      showDateRange: false
    }
  },
  methods: {
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
