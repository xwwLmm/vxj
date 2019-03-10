<template>
  <div>
    <Header :back="true">switch</Header>

    <XCell style="margin-top: 50px">
      <span>switch</span>
      <XSwitch style="margin-right: 15px" :active="switchActive" @toggle="switchActive = !switchActive" slot="right"></XSwitch>
    </XCell>
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