<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo title="Error-404" />

        <section class="section-gap-equal error-page-area">
            <div class="container">
                <div class="edu-error">
                    
                    <div class="content">
                        <h2 class="title">404 - Página no encontrada</h2>
                        <h4 class="subtitle">Está página no existe.</h4>
                        <NuxtLink to="/" class="edu-btn"><i class="icon-west"></i>Volver al inicio</NuxtLink>
                    </div>
                </div>
            </div>
            
        </section>

        <FooterOne />

        <ScrollToTop />
    </div>
</template>

<script>
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';
import MouseMove from './components/animation/MouseMove.vue';

export default {
    components: {
        HeaderOne,
        BreadCrumbTwo,
        FooterOne,
        ScrollToTop,
        MouseMove
    },
    head() {
        return {
            title: '404 Not Found'
        }
    }
}
</script>