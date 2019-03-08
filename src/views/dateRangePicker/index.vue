<template>
  <div>
    <Header>dateRangePicker</Header>
    <div :class="$style.btns">
      <span @click="showDateRange = true"> date range pick </span>
    </div>
    <XDateRangePicker @close="showDateRange = false" mode="single" v-if="showDateRange"></XDateRangePicker>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showDateRange: false
      }
    }
  }
</script>