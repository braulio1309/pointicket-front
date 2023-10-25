<template>
    <div>
        <HeaderOne />
        <Hero />
        <Categories />
        <DistantAbout />
        <Course />
        <Video />
        <FunFact />
        <TestimonialTwo />
        <Logo />
        <FAQ />
        <Blog />
        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<script lang="ts">
import FooterOne from '../footer/FooterOne.vue';
import HeaderOne from '../header/HeaderOne.vue';
import TestimonialTwo from '../testimonial/TestimonialTwo.vue';
import Blog from './Blog.vue';
import Categories from './Categories.vue';
import Course from './Course.vue';
import FAQ from './FAQ.vue';
import Hero from './Hero.vue';
import Logo from './Logo.vue';
import Video from './Video.vue';
import FunFact from './FunFact.vue';
import ScrollToTop from '../footer/ScrollToTop.vue';
import DistantAbout from './DistantAbout.vue';


export default {
    name: "app",
    components: {
    Hero,
    Categories,
    Course,
    Video,
    Logo,
    FAQ,
    Blog,
    FooterOne,
    HeaderOne,
    TestimonialTwo,
    FunFact,
    ScrollToTop,
    DistantAbout
},
    
};
</script>

<style scoped></style>
