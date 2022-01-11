<template>
  <Header />
  <div id="nav" class="d-flex">
    <LeftNav class="col-2" />
    <router-view></router-view>
  </div>
</template>

<script>
import LeftNav from "../src/components/LeftNav.vue";
import Header from "../src/components/Header.vue";

export default {
  name: "App",
  components: {
    LeftNav,
    Header,
  },
  
};
</script>

<style>
.col-2 {
  width: 15%;
}
</style>
