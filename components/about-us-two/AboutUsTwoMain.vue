<template>
    <div>
        <HeaderOne />

        <BreadCrumbOne pageTitle='About Us 2' title='A Large Range of Course Learning Paths' />

        <Features />

        <Video />

        <Logo />

        <Testimonial />

        <FunFact />

        <Instructor />

        <CTAOne addClassName="university-cta-wrapper" btnClass="btn-secondary" />

        <FooterOne />

        <ScrollToTop />
    </div>
</template>
<script>
import BreadCrumbOne from '../common/BreadCrumbOne.vue';
import CTAOne from '../cta/CTAOne.vue';
import FooterOne from '../footer/FooterOne.vue';
import HeaderOne from '../header/HeaderOne.vue';
import Features from './Features.vue';
import FunFact from './FunFact.vue';
import Instructor from './Instructor.vue';
import Logo from './Logo.vue';
import Testimonial from './Testimonial.vue';
import Video from './Video.vue';
import ScrollToTop from '../footer/ScrollToTop.vue';

export default {
    components: {
    HeaderOne,
    BreadCrumbOne,
    Features,
    Video,
    Logo,
    Testimonial,
    FunFact,
    Instructor,
    CTAOne,
    FooterOne,
    ScrollToTop
},
    head() {
        return {
            title: 'About Us 2'
        }
    }
}

</script>