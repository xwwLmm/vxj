<template>
  <div>
    <Header :back="true">search</Header>
    <div style="margin-top: 10px">
      <XSearch @search="search">
        <span style="padding-left: 10px;line-height: 30px;" slot="left">left</span>
        <span style="padding-left: 10px;line-height: 30px;" slot="right">right</span>
      </XSearch>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      search(searchText) {
        // eslint-disable-next-line
        console.log(searchText)
      }
    }
  }
</script>
<style lang="stylus" module></style>