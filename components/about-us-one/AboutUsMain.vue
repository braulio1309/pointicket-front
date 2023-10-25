<template>
    <div>
        <HeaderOne />

        <BreadCrumbOne pageTitle='About Us 1' title='A Large Range of Course Learning Paths' />

        <About />

        <LogoTwo />

        <WhyChoose />

        <TestimonialTwo />

        <FunFact />

        <Instructor />

        <FooterOne />

        <ScrollToTop />
    </div>
</template>

<script>
import HeaderOne from "../header/HeaderOne.vue";
import BreadCrumbOne from "../common/BreadCrumbOne.vue";
import FooterOne from "../footer/FooterOne.vue";
import About from "./About.vue";
import WhyChoose from "./WhyChoose.vue";
import FunFact from "./FunFact.vue";
import Instructor from "./Instructor.vue";
import TestimonialTwo from "../testimonial/TestimonialTwo.vue";
import LogoTwo from "../logo/LogoTwo.vue";
import ScrollToTop from "../footer/ScrollToTop.vue";

export default {
    components: {
    HeaderOne,
    BreadCrumbOne,
    FooterOne,
    About,
    FunFact,
    Instructor,
    TestimonialTwo,
    LogoTwo,
    WhyChoose,
    ScrollToTop
},
    head() {
        return {
            title: 'About Us 1'
        }
    }
}
</script>