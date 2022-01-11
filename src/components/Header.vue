<template>
  <div class="header d-flex justify-content-between align-items-center">
    <div style="margin-left: 2.2%">
      <img src="../../src/assets/CDPlogo.png" style="height: 30px" />
    </div>
    <div style="margin-right: 4.5%;width:100px" class="justify-content-between d-flex">
      <img src="../../src/assets/ring.png" style="height: 35px;" />
      <img src="../../src/assets/account.png" style="height: 35px" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  height: 100px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 7px 0px;
}
</style>
