<template>
  <div id="main-wrapper" class="main-wrapper">
    <HomeMainVue />
  </div>
</template>
<script>
definePageMeta({
  title: 'Compra entradas del Real Madrid en el Bernabéu | Pointickets',
  description: 'Compra y vende tus entradas para los mejores partidos de fútbol en el Bernabéu con Pointickets, la plataforma líder en venta de entradas deportivas. '                
})
import HomeMainVue from "~~/components/Home/HomeMain.vue";

export default {
  name: "Inicio",
  components: {
    HomeMainVue,
  },
  head() {
    return {
      title: 'Inicio',
      meta: [
        {
          hid: 'Compra entradas del Real Madrid en el Bernabéu | Pointickets',
          name: 'Compra entradas del Real Madrid en el Bernabéu | Pointickets',
          content: 'Compra y vende tus entradas para los mejores partidos de fútbol en el Bernabéu con Pointickets, la plataforma líder en venta de entradas deportivas.'
        }
      ]
    }
  }
};
</script>

<style scoped></style>