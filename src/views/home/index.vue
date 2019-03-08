<template>
  <div>
    <Header>Basic</Header>

    <XCell @onClick="$router.push('/tips')">tips</XCell>
    <XCell @onClick="$router.push('/loading')">loading</XCell>

    <Header>Nav</Header>

    <XCell @onClick="$router.push('/tab')">tab</XCell>

    <Header>Form</Header>
    <XCell @onClick="$router.push('/switch')">switch</XCell>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" module></style>