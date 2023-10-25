<template>
    <div>
        <HeaderOne showHeaderTop="true" />
        <Hero />
        <Features />
        <KitchenAbout />
        <Logo />
        <Course />
        <TestimonialSix />
        <FunFact />
        <Instructor />
        <FAQ />
        <CTA />
        <Blog />
        <Instagram />
        <FooterKitchen />
        <ScrollToTop />
    </div>
</template>

<script lang="ts">
import FooterKitchen from '../footer/FooterKitchen.vue';
import Hero from './Hero.vue';
import Features from './Features.vue';
import Logo from './Logo.vue';
import Course from './Course.vue';
import Instructor from './Instructor.vue';
import FAQ from './FAQ.vue';
import CTA from './CTA.vue';
import Blog from './Blog.vue';
import Instagram from './Instagram.vue';
import HeaderOne from '../header/HeaderOne.vue';
import TestimonialSix from '../testimonial/TestimonialSix.vue';
import FunFact from './FunFact.vue';
import ScrollToTop from '../footer/ScrollToTop.vue';
import KitchenAbout from './KitchenAbout.vue';



export default {
    name: "app",
    components: {
    FooterKitchen,
    Hero,
    Features,
    Logo,
    Course,
    Instructor,
    FAQ,
    CTA,
    Blog,
    Instagram,
    HeaderOne,
    TestimonialSix,
    FunFact,
    ScrollToTop,
    KitchenAbout
},
    
};
</script>

<style scoped></style>
