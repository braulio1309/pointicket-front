<template>
    <div>
        <HeaderTwo showHeaderTop="true" />
        <Hero />
        <Features />
        <UniversityAbout />
        <FunFact />
        <Course />
        <Campus />
        <TestimonialThree />
        <Video />
        <ContactInfo />
        <EventSectionOne extraClass="event-area-1 gap-large-text" />
        <LogoTwo />
        <CTAOne addClassName="university-cta-wrapper" btnClass="btn-secondary" />
        <FooterThree />
        <ScrollToTop />
    </div>
</template>

<script lang="ts">
import Campus from './Campus.vue';
import Course from './Course.vue';
import Features from './Features.vue';
import Hero from './Hero.vue';
import Video from './Video.vue'
import ContactInfo from './ContactInfo.vue'
import LogoTwo from '../logo/LogoTwo.vue';
import FooterThree from '../footer/FooterThree.vue';
import CTAOne from '../cta/CTAOne.vue';
import EventSectionOne from '../event/EventSectionOne.vue';
import HeaderTwo from '../header/HeaderTwo.vue';
import TestimonialThree from '../testimonial/TestimonialThree.vue';
import FunFact from './FunFact.vue';
import ScrollToTop from '../footer/ScrollToTop.vue';
import UniversityAbout from './UniversityAbout.vue';


export default {
    name: "app",
    components: {
    Hero,
    Features,
    Course,
    Campus,
    Video,
    ContactInfo,
    LogoTwo,
    FooterThree,
    CTAOne,
    EventSectionOne,
    HeaderTwo,
    TestimonialThree,
    FunFact,
    ScrollToTop,
    UniversityAbout
},
    
};
</script>

<style scoped></style>
