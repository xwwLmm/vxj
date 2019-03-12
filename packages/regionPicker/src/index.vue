<template>
  <div :class="$style.container">
    <PickerItem :values="provinces" :defaultIndex="province" textKey="name" valueKey="code" @toggle="toggleProvince"></PickerItem>
    <div :class="$style.divider"><span></span></div>
    <PickerItem :values="cities" :defaultIndex="city" textKey="name" valueKey="code" @toggle="toggleCity"></PickerItem>
    <div :class="$style.divider"><span></span></div>
    <PickerItem :values="areas" :defaultIndex="area" textKey="name" valueKey="code" @toggle="toggleArea"></PickerItem>
  </div>
</template>
<script>
  import PickerItem from '../../pickerItem/src/index'
  import regions from 'liyun-regions'

  const formatRegion = function (region) {
    return Object.keys(regions[region]).map(code => {
      return {
        code,
        name: regions[region][code]
      }
    })
  }

  export default {
    name: 'XRegionPicker',
    data() {
      return {
        provinces: Object.keys(regions['100000']).map(code => {
          return {
            code,
            name: regions['100000'][code]
          }
        }),
        province: 0,
        city: 0,
        area: 0
      }
    },
    computed: {
      cities() {
        return formatRegion(this.provinces[this.province].code)
      },
      areas() {
        return formatRegion(this.cities[this.city].code)
      }
    },
    methods: {
      toggleProvince(index) {
        this.area = 0
        this.city = 0
        this.province = index
        this.toggle()
      },
      toggleCity(index) {
        this.area = 0
        this.city = index
        this.toggle()
      },
      toggleArea(index) {
        this.area = index
        this.toggle()
      },
      toggle() {
        const province = this.provinces[this.province]
        const city = this.cities[this.city]
        const area = this.areas[this.area]
        this.$emit('toggle', {
          code: [province.code, city.code, area.code],
          name: [province.name, city.name, area.name]
        })
      }
    },
    components: {
      PickerItem
    }
  }
</script>
<style lang="stylus" module>
  .container
    position relative
    display flex

    > :nth-child(odd)
      flex 1

  .divider
    position relative
    display flex
    align-items center
    width 10px
    background-color $light-color

    > span
      display inline-block
      width 15px
      height 2px
      background-color $remark-color
</style>