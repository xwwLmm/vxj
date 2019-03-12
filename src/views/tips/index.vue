<template>
  <div>
    <Header :back="true">tips</Header>
    <Buttons>
      <Button @onClick="showAlert = true">点击弹出 alert</Button>
      <Button @onClick="showToast = true">点击弹出 toast</Button>
      <Button @onClick="showConfirm = true">点击弹出 confirm</Button>
    </Buttons>

    <Alert @confirm="showAlert = false" :show="showAlert" text="你确定吗兄弟????"></Alert>
    <Toast text="成功啦！！" :show="showToast" @close="showToast = false"></Toast>
    <Confirm @close="showConfirm = false"
             @confirm="showConfirm = false"
             :show="showConfirm"
             text="你确定要这样做吗？"></Confirm>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showAlert: false,
        showToast: false,
        showConfirm: false
      }
    }
  }
</script>