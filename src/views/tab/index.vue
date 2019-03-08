<template>
  <div>
    <Header>tab</Header>
    <div style="margin-top: 10px">
      <XTab :items="items" @toggle="toggleTab"></XTab>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: '测试看看嫩嗯嗯嗯嗯呢'.split('').map(v => v)
      }
    },
    methods: {
      toggleTab() {
        // eslint-disable-next-line
        console.log(arguments)
      }
    }
  }
</script>
<style lang="stylus" module>

</style>