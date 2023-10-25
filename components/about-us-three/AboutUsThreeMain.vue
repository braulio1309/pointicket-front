<template>
    <div>
        <HeaderOne />

        <BreadCrumbThree title='About Us 3' />

        <AboutThree />

        <FunFact />

        <WhyChoose />

        <ContactInfo />

        <Instructor />

        <Testimonial />

        <FooterOne />

        <ScrollToTop />
    </div>
</template>

<script>
import FooterOne from '../footer/FooterOne.vue';
import BreadCrumbThree from '../common/BreadCrumbThree.vue';
import HeaderOne from '../header/HeaderOne.vue';
import ContactInfo from './ContactInfo.vue';
import WhyChoose from './WhyChoose.vue';
import FunFact from './FunFact.vue';
import Instructor from './Instructor.vue';
import AboutThree from './AboutThree.vue';
import Testimonial from './Testimonial.vue';
import ScrollToTop from '../footer/ScrollToTop.vue';

export default {
    components: {
    HeaderOne,
    BreadCrumbThree,
    FooterOne,
    ContactInfo,
    FunFact,
    WhyChoose,
    Instructor,
    Testimonial,
    AboutThree,
    ScrollToTop
},
    head() {
        return {
            title: 'About Us 3'
        }
    }
}
</script>
<style>
.video-area-1 .video-play-btn {
    cursor: pointer;
}
</style>