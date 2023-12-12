<template>
  <NuxtPage></NuxtPage>
</template>

<script setup>
const route = useRoute()

useHead({
  titleTemplate:() => `${route.meta.title}`,
  meta: () => [
    { name: 'description', content: `${route.meta.description}` }
  ],
})
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init()
})
</script>

