<template>
  <div>
    <PickerItem :values="provinces" textKey="name" valueKey="code"></PickerItem>
  </div>
</template>
<script>
  import PickerItem from '../../pickerItem/src'
  import regions from 'liyun-regions'
  export default {
    name: 'XRegionPicker',
    data() {
      return {
        provinces: Object.keys(regions['100000']).map(code => {
          return {
            code,
            name: regions['100000'][code]
          }
        })
      }
    },
    components: {
      PickerItem
    }
  }
</script>
<style lang="stylus" module></style>