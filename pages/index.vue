<template>
  <div id="main-wrapper" class="main-wrapper">
    <HomeMainVue />
  </div>
</template>
<script>
import HomeMainVue from "~~/components/Home/HomeMain.vue";

export default {
  name: "home",
  components: {
    HomeMainVue,
  }
};
</script>

<style scoped></style>