<template>
  <div>
    <Header :back="true">picker</Header>

    <XPickerItem :values="months"></XPickerItem>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        months: new Array(12).fill(0).map((v, i) => i + 1)
      }
    }
  }
</script>