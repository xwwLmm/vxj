<template>
  <li @click="tapItem" :class="[$style.container, active ? $style.active : '']">
    <span>{{text}}</span>
  </li>
</template>
<script>
  /**
   * 获取输入值的真实类型
   *
   * @param value       需要判断的值
   * @returns {string}  类型字符串
   */
  const trueType = value => [].slice.call({}.toString.call(value), 8, -1).join('')

  const trueTypeFunc = type => value => type === trueType(value)

  export default {
    name: 'XTabItem',
    props: {
      item: {
        type: [String, Object],
        required: true
      },
      index: Number,
      valueKey: String,
      textKey: String,
      active: Boolean
    },
    data() {
      const {item} = this;
      const objected = trueTypeFunc('Object')(item);
      const value = objected ? item[this.valueKey] : this.index;
      const text = objected ? item[this.textKey] : item;
      const params = [item];
      objected && params.unshift(value, text);
      return {
        params,
        value,
        text
      };
    },
    methods: {
      tapItem() {
        const {text, value} = this
        this.$emit('tapItem', this.index, {
          value,
          text
        });
      }
    }
  }
</script>
<style lang="stylus" module>
  .container
    position relative

    > span
      display inline-block
      line-height: 40px

  .active
    color $theme-color

    &::after
      content ''
      position absolute
      left 3px
      right 3px
      bottom 0
      height 1px
      background-color $theme-color

</style>