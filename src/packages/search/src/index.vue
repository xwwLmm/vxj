<template>
  <div :class="$style.container">
    <div v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <div :class="$style.content">
      <div>
        <img :src="require('./assets/搜索.svg')">
        <input v-model="searchText" :placeholder="placeholder" @focus="focus = true"/>
        <span @click="$emit('search', searchText)" v-if="focus">搜索</span>
      </div>
      <div v-if="focus" @click="focus = false">取消</div>
    </div>
    <div v-if="$slots.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'XSearch',
    props: {
      placeholder: String
    },
    data() {
      return {
        focus: false,
        searchText: ''
      }
    }
  }
</script>
<style lang="stylus" module>
  .container
    display flex
    padding 10px 0
    background-color $light-color
    box-shadow $box-shadow

  .content
    display flex
    flex 1
    align-items center
    padding 0 10px
    font-size 14px

    > div:first-child
      display flex
      flex 1
      padding 0 10px
      border-radius 15px
      background-color $bg-color
      align-items center
      line-height 30px

      > input
        flex 1
        padding 0 5px
        background-color $bg-color
        outline none
        border 0
        height 30px

      > img
        width 20px
        height 20px

      > span
        color $theme-color

    > div:nth-child(2)
      padding 0 10px
      color $theme-color

</style>