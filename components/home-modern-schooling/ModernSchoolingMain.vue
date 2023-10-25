<template>
    <div>
        <HeaderOne />
        <Hero />
        <Logo />
        <Categories />
        <Course />
        <FAQ />
        <FunFact />
        <TestimonialFive />
        <CTA />
        <Blog />
        <FooterTwo />
        <ScrollToTop />
    </div>
</template>

<script lang="ts">
import FooterTwo from '../footer/FooterTwo.vue';
import HeaderOne from '../header/HeaderOne.vue';
import TestimonialFive from '../testimonial/TestimonialFive.vue';
import Blog from './Blog.vue';
import CTA from './CTA.vue';
import Categories from './Categories.vue';
import Course from './Course.vue';
import FAQ from './FAQ.vue';
import Hero from './Hero.vue';
import Logo from './Logo.vue';
import FunFact from './FunFact.vue';
import ScrollToTop from '../footer/ScrollToTop.vue';



export default {
    name: "app",
    components: {
    Hero,
    Logo,
    FooterTwo,
    Categories,
    Course,
    FAQ,
    CTA,
    Blog,
    HeaderOne,
    TestimonialFive,
    FunFact,
    ScrollToTop
},
};
</script>

<style scoped></style>
