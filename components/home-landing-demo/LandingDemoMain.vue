<template>
    <div>
        <HeaderLanding />
        <Hero />

        <!-- <FunFact /> -->

        <HomeDemo />

        <LearnWith />

        <CourseLayout />

        <ShopLayout />

        <Features />

        <InnerPages />

        <FooterLanding />
        <ScrollToTop />
    </div>
</template>

<script lang="ts">
import FooterLanding from '../footer/FooterLanding.vue';
import CourseLayout from './CourseLayout.vue';
import Hero from './Hero.vue';
import HomeDemo from './HomeDemo.vue';
import LearnWith from './LearnWith.vue';
import ShopLayout from './ShopLayout.vue';
import Features from './Features.vue';
import InnerPages from './InnerPages.vue';
import HeaderLanding from '../header/HeaderLanding.vue';
import ScrollToTop from '../footer/ScrollToTop.vue';


export default {
    name: "app",
    components: {
    FooterLanding,
    Hero,
    HomeDemo,
    LearnWith,
    CourseLayout,
    Features,
    ShopLayout,
    InnerPages,
    HeaderLanding,
    ScrollToTop
},
    
};
</script>

<style scoped></style>
