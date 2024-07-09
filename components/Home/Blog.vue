<template>
    <div class="edu-blog-area blog-area-1 edu-section-gap">
        <div class="container">
            <SectionTitle preTitle='Categorías' title='Eventos más vendidos' alignment='section-center' />
            <div class="hero-banner bg-image bg-madrid mb--20" style="border-radius: 10px; height: 100px !important;">
                <div class="container">
                    <div class="breadcrumb-inner">
                        <div class=" ">
                            <div class="">
                                <div class="container">
                                    <div class="row g-5">
                                        <h2 style="color:white; text-align: center;" class="">Tour Santiago Bernabeu</h2>
                                        <div class="col-lg-4" data-aos-delay="100" data-aos="fade-up"
                                            data-aos-duration="800">
                                            
                                            <div class="pricing-table">
                                                <div class="pricing-header">
                                                    <h6 class="title">Classic</h6>
                                                    <div class="price-wrap">
                                                        <span class="amount">45.00€</span>
                                                    </div>
                                                </div>
                                                <div class="pricing-body">
                                                    <ul class="list-item">
                                                        <li><i class="icon-20"></i>Museo del Real Madrid C.F</li>
                                                        <li><i class="icon-20"></i>Vista panorámica del Estadio</li>
                                                        <li><i class="icon-20"></i>Recorrido (reducido por obras)</li>
                                                        <!--<li class="item-off"><i class="icon-20"></i>Course discussions</li>-->
                                                    </ul>
                                                </div>
                                                <div class="pricing-btn">
                                                    <a class="edu-btn btn-border btn-medium"
                                                        href="/tickets/comprar/comprar-tour-santiago-bernabeu"
                                                        style="color: white; text-decoration: none; border: none">Comprar<i
                                                            class="icon-east"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4" data-aos-delay="150" data-aos="fade-up"
                                            data-aos-duration="800">
                                            <div class="pricing-table">
                                                <div class="pricing-header">
                                                    <h6 class="title">Classic Hora Flexible</h6>
                                                    <div class="price-wrap">
                                                        <span class="amount">50.00€</span>
                                                    </div>
                                                </div>
                                                <div class="pricing-body">
                                                    <ul class="list-item">
                                                        <li><i class="icon-20"></i>Entrada Classic</li>
                                                        <li><i class="icon-20"></i>Hora abierta</li>
                                                        <li><i class="icon-20"></i>Recorrido reducido por obras</li>
                                                    </ul>
                                                </div>
                                                <div class="pricing-btn">
                                                    <a class="edu-btn btn-border btn-medium"
                                                        href="/tickets/comprar/comprar-tour-santiago-bernabeu"
                                                        style="color: white; text-decoration: none; border: none">Comprar<i
                                                            class="icon-east"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4" data-aos-delay="200" data-aos="fade-up"
                                            data-aos-duration="800">
                                            <div class="pricing-table">
                                                <div class="pricing-header">
                                                    <h6 class="title">Premium</h6>
                                                    <div class="price-wrap">
                                                        <span class="amount">65.00€</span>
                                                    </div>
                                                </div>
                                                <div class="pricing-body">
                                                    <ul class="list-item">
                                                        <li><i class="icon-20"></i>Entrada Classic</li>
                                                        <li><i class="icon-20"></i>Servicio Guía</li>
                                                        <li><i class="icon-20"></i>Recorrido reducido por obras</li>
                                                    </ul>
                                                </div>
                                                <div class="pricing-btn">
                                                    <a class="edu-btn btn-border btn-medium"
                                                        href="/tickets/comprar/comprar-tour-santiago-bernabeu"
                                                        style="color: white; text-decoration: none; border: none">Comprar<i
                                                            class="icon-east"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row g-5">
                <div class="col-lg-6 col-md-6 col-12" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800"
                    v-for="blog in blogItems.slice(0, 2)" :key="blog.id">
                    <BlogPostOne :blogInfo="blog" />
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="-1.4" imgSrc="/images/about/shape-02.png" />
            <MouseMove addClassName="shape-2" dataDepth="2.5" />
            <MouseMove addClassName="shape-3" dataDepth="-2.3" imgSrc="/images/counterup/shape-05.png" />
        </ul>
    </div>
</template>

<script>
import blogItemsMixin from "../../mixins/blogItemsMixin";
import MouseMove from '../animation/MouseMove.vue';
import BlogPostOne from '../blog/BlogPostOne.vue';
import SectionTitle from '../common/SectionTitle.vue';


export default {
    mixins: [blogItemsMixin],
    components: {
        BlogPostOne,
        SectionTitle,
        MouseMove
    },

}
</script>