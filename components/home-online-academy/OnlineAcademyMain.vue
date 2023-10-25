<template>
    <div>
        <HeaderThree showHeaderTop="true" />
        <Hero />
        <Categories />
        <Course />
        <LogoOne />
        <Instructor />
        <FunFact />
        <FAQ />
        <EventSectionOne extraClass="event-area-2" />
        <ContactInfo />
        <Blog />
        <CTAOne addClassName="online-academy-cta-wrapper" />
        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<script lang="ts">
import CTAOne from '../cta/CTAOne.vue';
import EventSectionOne from '../event/EventSectionOne.vue';
import FooterOne from '../footer/FooterOne.vue';
import HeaderThree from '../header/HeaderThree.vue';
import LogoOne from '../logo/LogoOne.vue';
import Blog from './Blog.vue';
import Categories from './Categories.vue';
import ContactInfo from './ContactInfo.vue';
import Course from './Course.vue';
import FAQ from './FAQ.vue';
import Hero from './Hero.vue';
import Instructor from './Instructor.vue';
import FunFact from './FunFact.vue';
import ScrollToTop from '../footer/ScrollToTop.vue';


export default {
    name: "app",
    components: {
    FooterOne,
    Hero,
    Categories,
    Course,
    FAQ,
    Instructor,
    Blog,
    CTAOne,
    EventSectionOne,
    LogoOne,
    ContactInfo,
    HeaderThree,
    FunFact,
    ScrollToTop
},
    
};
</script>

<style scoped></style>
