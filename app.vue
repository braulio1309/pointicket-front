<template>
  <NuxtPage></NuxtPage>
</template>

<script setup>
const route = useRoute()

useHead({
  titleTemplate:() => `${route.meta.title}`,
  description:() => `${route.meta.description}`,
})
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init()
})
</script>

