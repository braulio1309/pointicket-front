<template>
    <div>
        <HeaderOne showHeaderTop="false" />
        <div class="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-estadio">
            <div class="container">
                <h1 class="title" style="color:white;margin-bottom: 60px !important;  text-align: center;
    justify-content: center;">{{ $t('Tour.title') }}
                </h1>
                <div style="text-align: center;">
                    <a class="edu-btn btn-medium" href="/tickets/comprar/comprar-tour-santiago-bernabeu" style="color: white; text-decoration: none; border: none;">{{ $t('Tour.buy') }}<i class="icon-east"></i></a>
                </div>
                
            </div>
           
        </div>
        <Features />
        <!--<Categories /> -->
        <!--<AboutSectionOne />-->
        <div class="edu-course-area course-area-1 edu-section-gap bg-lighten01">
            <div class="edu-section-gap">
            <div class="container">
                <h2>{{ $t('Tour.second_title') }}</h2>
                <p>{{ $t('Tour.second_text') }}</p>
                <SectionTitle preTitle='Pricing Table' title='Great Membership Plan' alignment='section-center' />

                <h2>{{ $t('Tour.third_title') }}</h2>
                <p>{{ $t('Tour.third_text') }}</p>
                <div class="row g-5">
                    <div class="col-lg-4" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h4 class="title">Classic</h4>
                                <div class="price-wrap">
                                    <span class="amount">45.00€</span>
                                </div>
                            </div>
                            <div class="pricing-body">
                                <ul class="list-item">
                                    <li><i class="icon-20"></i>{{ $t('Home.museum') }}</li>
                                                    <li><i class="icon-20"></i>{{ $t('Home.panoramic_view') }}</li>
                                                    <li><i class="icon-20"></i>{{ $t('Home.museum') }}</li>
                                    <!--<li class="item-off"><i class="icon-20"></i>Course discussions</li>-->
                                </ul>
                            </div>
                            <div class="pricing-btn">
                                <a class="edu-btn btn-border btn-medium" href="/tickets/comprar/comprar-tour-santiago-bernabeu" style="color: white; text-decoration: none; border: none;">{{ $t('Tour.buy_only') }}<i class="icon-east"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h4 class="title">{{ $t('Home.flexible_hour') }}</h4>
                                <div class="price-wrap">
                                    <span class="amount">50.00€</span>
                                </div>
                            </div>
                            <div class="pricing-body">
                                <ul class="list-item">
                                    <li><i class="icon-20"></i>{{ $t('Home.classic') }}</li>
                                                    <li><i class="icon-20"></i>{{ $t('Home.open_hour') }}</li>
                                                    <li><i class="icon-20"></i>{{ $t('Home.route') }}</li>
                                </ul>
                            </div>
                            <div class="pricing-btn">
                                <a class="edu-btn btn-border btn-medium" href="/tickets/comprar/comprar-tour-santiago-bernabeu" style="color: white; text-decoration: none; border: none;">{{ $t('Home.buy') }}<i class="icon-east"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4" data-aos-delay="200" data-aos="fade-up" data-aos-duration="800">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h4 class="title">Premium</h4>
                                <div class="price-wrap">
                                    <span class="amount">65.00€</span>
                                </div>
                            </div>
                            <div class="pricing-body">
                                <ul class="list-item">
                                    <li><i class="icon-20"></i>{{ $t('Home.classic') }}</li>
                                                    <li><i class="icon-20"></i>{{ $t('Home.open_hour') }}</li>
                                                    <li><i class="icon-20"></i>{{ $t('Home.route') }}</li>
                                </ul>
                            </div>
                            <div class="pricing-btn">
                                <a class="edu-btn btn-border btn-medium" href="/tickets/comprar/comprar-tour-santiago-bernabeu" style="color: white; text-decoration: none; border: none;">{{ $t('Home.buy') }}<i class="icon-east"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="container">
                <div class="section-title section-center" data-aos-delay="150" data-aos="fade-up"
                    data-aos-duration="800">
                    <h2 class='pre-title' style="font-size: medium;">{{ $t('Home.second_title') }}</h2>
                    <p>{{ $t('Home.leader_buy') }}</p>

                    <p>{{ $t('Home.pointickets_tickets') }}</p>

                </div>
            </div>
        </div>
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
    title: 'Ven y disfruta del Tour por el Bernabéu',
    description: '¿No puedes asistir a un partido del Real Madrid? Reserva el Tour por el Bernabéu y recorre la sala de museos, los vestuarios y los banquillos. Siéntete como un jugador del Real Madrid.'
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
        ScrollToTop
    },

};
</script>

<style scoped></style>
