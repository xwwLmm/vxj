<template>
  <div>
    <Header :back="true">carousel</Header>
    <div style="margin-top: 50px">
      <XCarousel :images="images"></XCarousel>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        images: new Array(5).fill(0).map((v, i) => `http://lorempixel.com/400/${200 - i}/`),
      }
    }
  }
</script>