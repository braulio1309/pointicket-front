<template>
    <div>
        <HeaderOne showHeaderTop="true" />
        <HeroSection />
        <Features />
        <!--<Categories /> -->
        <!--<AboutSectionOne />-->
        <Events />
        <Blog />
        <!--<LogoOne />-->
        <!--<FunFact />-->
        <TestimonialOne />
        <ContactInfo />
        <!--<Instructor />-->
        <!--<CTAOne />-->
        <FooterTwo />
        <ScrollToTop />
    </div>
</template>

<script>
definePageMeta({
    title: 'Compra entradas del Real Madrid en el Bernabéu | Pointickets',
    description: 'Compra y vende tus entradas para los mejores partidos de fútbol en el Bernabéu con Pointickets, la plataforma líder en venta de entradas deportivas. '
})
import HeroSection from "./HeroSection.vue";
import ContactInfo from "./ContactInfo.vue";
import Features from "./Features.vue";
import Categories from "./Categories.vue";
import CTAOne from "../cta/CTAOne.vue";
import LogoOne from "../logo/LogoOne.vue";
import Blog from "./Blog.vue";
import FooterTwo from "../footer/FooterTwo.vue"
import Events from "./Events.vue";
import TestimonialOne from "../testimonial/TestimonialOne.vue";
import Instructor from "./Instructor.vue";
import HeaderOne from "../header/HeaderOne.vue";
import FunFact from "./FunFact.vue";
import AboutSectionOne from "./AboutSectionOne.vue";

import ScrollToTop from "../footer/ScrollToTop.vue";

export default {
    head() {
        return {
            meta: [
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: 'Compra entradas Real Madrid, compra entradas bernabeu, entradas deportivas'
                }
            ]
        }
    },
    name: "app",
    components: {
        HeroSection,
        ContactInfo,
        Features,
        Categories,
        CTAOne,
        LogoOne,
        Blog,
        FooterTwo,
        Events,
        TestimonialOne,
        Instructor,
        HeaderOne,
        FunFact,
        AboutSectionOne,
        ScrollToTop,

    },

};
</script>

<style scoped></style>
