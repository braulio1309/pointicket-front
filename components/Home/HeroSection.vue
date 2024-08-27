<template>
  <div class="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-estadio">
    <div class="container">
      <h1 class="title" style="font-size:xx-large;color:white;margin-bottom: 60px !important; ">{{ $t('Home.title') }}</h1>

      <div class="breadcrumb-inner" >

        <div class="row" >

          <div class="col-sm-10" >

            <div>
              <input v-model="data" :placeholder="$t('Home.search_events')" style="border-radius: 10px; padding: 0 25px;">

            </div>
          </div>
          <div class="col-sm-2">
            <a @click="saveSearch" class="edu-btn btn-large" >{{ $t('Home.search') }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MouseMove from '../animation/MouseMove.vue';

export default {
  name: "app",
  components: {
    MouseMove
  },
  data() {
    return {
      data: ''
    }
  },
  methods: {
    saveSearch() {
      window.localStorage.setItem('search', this.data);
      this.$router.push('/compra-entradas-de-futbol');
    }
  }
};
</script>
<style>
.hero-style-1 .banner-thumbnail .shape-group li.shape-3.circle-shape span {
  width: 41px;
  height: 41px;
  background: var(--color-tertiary);
  border-radius: 100%;
}
</style>