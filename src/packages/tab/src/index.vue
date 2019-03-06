<template>
  <div>
    <div :class="$style.container">
      <ul :style="{width: itemsWidth + '%'}">
        <TabItem  v-for="(item, index) in items"
                  :item="item" :index="index" :textKey="textKey" :valueKey="valueKey" :active="index === currIndex"
                  :key="index" @tapItem="toggleItem"></TabItem>
      </ul>
    </div>

  </div>
</template>
<script>
  import TabItem from '../../tabItem/src'

  export default {
    name: 'XTab',
    props: {
      items: Array,
      valueKey: {
        type: String,
        default: 'value'
      },
      textKey: {
        type: String,
        default: 'text'
      },
      defaultIndex: {
        type: Number,
        default: 0
      },
      width: {
        type: String,
        default: '100%'
      }
    },
    data() {
      return {
        currIndex: this.defaultIndex
      }
    },
    computed: {
      itemsWidth() {
        const len = this.items.length;
        const num = Math.min(5, len);
        return 100 / (len >= 5 ? 4.5 : num) * len;
      }
    },
    methods: {
      toggleItem(index) {
        if (this.currIndex === index) return
        this.currIndex = index
        this.$emit('toggle', ...arguments)
      }
    },
    components: {
      TabItem
    }
  }
</script>
<style lang="stylus" module>
  .container
    overflow-x scroll
    background-color $light-color
    box-shadow $box-shadow
    -webkit-overflow-scrolling touch
    scroll-behavior smooth

    &::-webkit-scrollbar
      width 0
      height 0

    > ul
      display flex
      padding 0

      > li
        flex 1
        font-size 14px
        text-align center
        list-style none
</style>