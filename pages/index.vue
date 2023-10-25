<template>
  <div id="main-wrapper" class="main-wrapper">
    <HomeMainVue />
  </div>
</template>
<script>
import HomeMainVue from "~~/components/Home/HomeMain.vue";
import Sell from "./sell.vue";

export default {
  name: "home",
  components: {
    HomeMainVue,
    Sell
  }
};
</script>
<style scoped></style>