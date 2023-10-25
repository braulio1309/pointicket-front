<template>
    <div>
        <HeaderFour showHeaderTop="true" />
        <Hero />
        <KindergartenAbout />
        <Course />
        <Activities />
        <FAQ />
        <Event />
        <Blog />
        <SubscriptionForm />
        <FooterKindergarten />
        <ScrollToTop />
    </div>
</template>

<script lang="ts">
import FooterKindergarten from '../footer/FooterKindergarten.vue';
import HeaderFour from '../header/HeaderFour.vue';
import Activities from './Activities.vue';
import Blog from './Blog.vue';
import Course from './Course.vue';
import Event from './Event.vue';
import FAQ from './FAQ.vue';
import Hero from './Hero.vue';
import SubscriptionForm from './SubscriptionForm.vue';
import ScrollToTop from '../footer/ScrollToTop.vue';
import KindergartenAbout from './KindergartenAbout.vue';


export default {
    name: "app",
    components: {
    FooterKindergarten,
    Hero,
    Course,
    Activities,
    FAQ,
    Event,
    Blog,
    SubscriptionForm,
    HeaderFour,
    ScrollToTop,
    KindergartenAbout
},
    
};
</script>

<style scoped></style>
