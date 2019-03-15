<template>
  <div :class="$style.container">
    <Header>Basic</Header>

    <XCell @onClick="$router.push('/tips')">
      <span>
        <span class="iconfont iconalert"></span>
        tips
      </span></XCell>
    <XCell @onClick="$router.push('/loading')">
      <span>
        <span class="iconfont iconjiazaizhong"></span>
        loading
      </span>
    </XCell>

    <Header>Nav</Header>

    <XCell @onClick="$router.push('/tab')">
      <span >
        <span class="iconfont iconnav-cw"></span>
        tab
      </span>
    </XCell>

    <Header>Picker</Header>

    <XCell @onClick="$router.push('/picker')">picker</XCell>
    <XCell @onClick="$router.push('/date-range-picker')">
      <span>
        <span class="iconfont iconrili"></span>
        dateRangePicker
      </span>
    </XCell>

    <Header>Form</Header>
    <XCell @onClick="$router.push('/switch')">
      <span >
        <span class="iconfont iconswitchers"></span>
        switch
      </span>
    </XCell>
    <XCell @onClick="$router.push('/search')">
      <span>
        <span class="iconfont iconsearch"></span>
        search
      </span>
    </XCell>
    <XCell @onClick="$router.push('/progress')">
      <span>
        <span class="iconfont iconprogress"></span>
        progress
      </span>
    </XCell>

    <Header>Others</Header>
    <XCell @onClick="$router.push('/carousel')">
      <span>
        <span class="iconfont iconcarouselimage"></span>
        carousel
      </span>
    </XCell>
    <XCell @onClick="$router.push('/qrcode')">
      <span>
        <span class="iconfont iconqrcode"></span>
        qrcode
      </span>
    </XCell>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" module>
  .container
    :global
      .iconfont
        display inline-block
        width 25px
        color $theme-color
</style>