<template>
    <div class="edu-blog-area blog-area-1 edu-section-gap">
        <div class="container">
            <SectionTitle preTitle='Categorías' title='Eventos más vendidos' alignment='section-center' />
            <div class="hero-banner bg-image bg-madrid mb--20" style="border-radius: 10px; height: 100px !important;">
                <div class="container">
                    <div class="breadcrumb-inner">
                        <div class="row g-5">
                            <div class="col-lg-4 col-md-6 col-12 justify-content-end" data-aos-delay="100" data-aos="fade-up"
                                data-aos-duration="800">
                                <div class="edu-blog blog-style-1">
                                    <div class="inner">
                                        <div class="content position-top">
                                            
                                            <div class="category-wrap">
                                                <NuxtLink to="/tour-santiago-bernabeu" class="blog-category">Tour Santiago Bernabeu</NuxtLink>
                                            </div>
                                            <h5 class="title">
                                                <NuxtLink to="/tour-santiago-bernabeu">Tour Santiago Bernabeu</NuxtLink>
                                            </h5>
                                            
                                            <div class="button-group">
                                                <a href="/tour-santiago-bernabeu" class="edu-btn btn-medium mt--50">Comprar entradas</a>
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
                <div class="col-lg-4 col-md-6 col-12" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800"
                    v-for="blog in blogItems.slice(0, 3)" :key="blog.id">
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