<template>
    <div>
        <HeaderOne showHeaderTop="false" />
        <div class="edu-breadcrumb-area breadcrumb-style-2 bg-image bg-estadio">
            <div class="container">
                <h1 class="title" style="color:white;margin-bottom: 60px !important;  text-align: center;
    justify-content: center;">Compra tus Entradas para el Tour del <span  style="display: block; margin: 0 auto;">Santiago Bernabéu</span>
                </h1>
            </div>
        </div>
        <Features />
        <!--<Categories /> -->
        <!--<AboutSectionOne />-->
        <div class="edu-course-area course-area-1 edu-section-gap bg-lighten01">
            <div class="edu-section-gap">
            <div class="container">
                <SectionTitle preTitle='Pricing Table' title='Great Membership Plan' alignment='section-center' />

                <div class="row g-5">
                    <div class="col-lg-4" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h6 class="title">Classic</h6>
                                <div class="price-wrap">
                                    <span class="amount">33.00€</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consect adipisicing elit sed. do eilt sed</p>
                            </div>
                            <div class="pricing-body">
                                <ul class="list-item">
                                    <li><i class="icon-20"></i>Museo del Real Madrid C.F</li>
                                    <li><i class="icon-20"></i>Vista panorámica del interior del Estadio</li>
                                    <li><i class="icon-20"></i>Recorrido (reducido por obras)</li>
                                    <!--<li class="item-off"><i class="icon-20"></i>Course discussions</li>-->
                                </ul>
                            </div>
                            <div class="pricing-btn">
                                <a class="edu-btn btn-border btn-medium" href="#">Comprar<i class="icon-east"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h6 class="title">Classic Hora Flexible</h6>
                                <div class="price-wrap">
                                    <span class="amount">40.00€</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consect adipisicing elit sed. do eilt sed</p>
                            </div>
                            <div class="pricing-body">
                                <ul class="list-item">
                                    <li><i class="icon-20"></i>Entrada Classic</li>
                                    <li><i class="icon-20"></i>Hora abierta dentro de la fecha seleccionada</li>
                                    <li><i class="icon-20"></i>Recorrido reducido por obras</li>
                                </ul>
                            </div>
                            <div class="pricing-btn">
                                <a class="edu-btn btn-border btn-medium" href="#">Comprar<i class="icon-east"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4" data-aos-delay="200" data-aos="fade-up" data-aos-duration="800">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h6 class="title">Premium</h6>
                                <div class="price-wrap">
                                    <span class="amount">50.00€</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consect adipisicing elit sed. do eilt sed</p>
                            </div>
                            <div class="pricing-body">
                                <ul class="list-item">
                                    <li><i class="icon-20"></i>Entrada Classic</li>
                                    <li><i class="icon-20"></i>Servicio Guía</li>
                                    <li><i class="icon-20"></i>Recorrido reducido por obras</li>
                                </ul>
                            </div>
                            <div class="pricing-btn">
                                <a class="edu-btn btn-border btn-medium" href="/tickets/comprar/comprar-tour-santiago-bernabeu">Comprar<i class="icon-east"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="container">
                <div class="section-title section-center" data-aos-delay="150" data-aos="fade-up"
                    data-aos-duration="800">
                    <h2 class='pre-title' style="font-size: medium;">Pointickets: líderes en compra venta de entradas
                        deportivas</h2>
                    <p>Pointickets es la plataforma líder en compra y venta de entradas deportivas, con un amplio
                        catálogo de entradas para el Real Madrid en el Santiago Bernabéu. Ofrecemos un amplio catálogo
                        de entradas para el Real Madrid en el Santiago Bernabéu, a los mejores precios.</p>

                    <p>En Pointickets encontrarás entradas para todos los partidos del Real Madrid, tanto de Liga como
                        de Champions League. También tenemos entradas para otro tipo de eventos, como conciertos, ferias
                        y espectáculos.</p>

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
