<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo title='Blog Masonry' />

        <section class="section-gap-equal">
            <div class="container">
                <div class="row g-5" id="masonry-gallery">
                    <masonry-wall :items="blogItems" class="masonry-blog-items">
                        <template #default="{ item }">
                            <div data-aos-delay="100" data-aos="fade-up" data-aos-duration="800">
                                <div class="edu-blog blog-style-1">
                                    <div class="inner">
                                        <div class="thumbnail">
                                            <NuxtLink to="/blog/blog-details">
                                                <img :src="'/images/blog/blog-one/' + item.imgSrc" :alt="item.alt">
                                            </NuxtLink>
                                        </div>
                                        <div class="content position-top">
                                            <div class="read-more-btn">
                                                <NuxtLink to="/blog/blog-details" class="btn-icon-round">
                                                    <i class="icon-4"></i>
                                                </NuxtLink>
                                            </div>
                                            <div class="category-wrap">
                                                <NuxtLink to="/blog/blog-masonry" class="blog-category">{{ item.category }}
                                                </NuxtLink>
                                            </div>
                                            <h5 class="title">
                                                <NuxtLink to="/blog/blog-details">{{ item.title }}</NuxtLink>
                                            </h5>
                                            <ul class="blog-meta">
                                                <li><i class="icon-27"></i>{{ item.date }}</li>
                                                <li><i class="icon-28"></i>{{ item.comment }}</li>
                                            </ul>
                                            <p>{{ item.excerpt }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </masonry-wall>
                </div>

                <PaginationOne />
            </div>
        </section>

        <CTAOne />

        <FooterOne />

        <ScrollToTop />
    </div>
</template>

<script>
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import CTAOne from '~~/components/cta/CTAOne.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import BlogPostOne from '~~/components/blog/BlogPostOne.vue';
import PaginationOne from '~~/components/common/PaginationOne.vue';

import blogItemsMixin from '~~/mixins/blogItemsMixin';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';

export default {
    mixins: [blogItemsMixin],
    components: {
    HeaderOne,
    BreadCrumbTwo,
    BlogPostOne,
    CTAOne,
    PaginationOne,
    FooterOne,
    ScrollToTop
},
    data() {
        return {}
    },
    head() {
        return {
            title: 'Blog Masonry'
        }
    },
    
};
</script>

