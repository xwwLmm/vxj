<template>
  <div>
    <Header :back="true">switch</Header>
    <div>
      <span style="margin-left: 10px">
        <XSwitch :active="switchActive" @toggle="switchActive = !switchActive"></XSwitch>
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        switchActive: false
      }
    }
  }
</script>