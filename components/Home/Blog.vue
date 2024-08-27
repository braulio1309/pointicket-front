<template>
   <div class="edu-blog-area blog-area-1 edu-section-gap">
     <div class="section-title" :class="alignment" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
        <span class="pre-title" :class="preTitleClass" v-html="preTitle" v-if="preTitle"></span>
        <h3 class="text-center title">{{ $t('Home.best_selling_events') }}</h3>
        <span class="shape-line text-center" v-if="!disableMark"><i class="icon-19"></i></span>
        <p v-html="subTitle" v-if="subTitle"></p>
    </div>

    <div class="container">
        <div class="hero-banner bg-image bg-madrid mb--20" style="border-radius: 10px; height: 100px !important;">
            <div class="container">
                <div class="breadcrumb-inner">
                    <div class="edu-course-area course-area-1 edu-section-gap">
                        <div class="edu-section-gap">
                            <div class="container">
                                <div class="row g-5">
                                    <div class="col-lg-4 col-md-6 col-sm-12" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800">
                                        <div class="pricing-table">
                                            <div class="pricing-header">
                                                <h6 class="title">Classic</h6>
                                                <div class="price-wrap">
                                                    <span class="amount">45.00€</span>
                                                </div>
                                            </div>
                                            <div class="pricing-body">
                                                <ul class="list-item">
                                                    <li><i class="icon-20"></i>{{ $t('Home.museum') }}</li>
                                                    <li><i class="icon-20"></i>{{ $t('Home.panoramic_view') }}</li>
                                                    <li><i class="icon-20"></i>{{ $t('Home.museum') }}</li>
                                                </ul>
                                            </div>
                                            <div class="pricing-btn">
                                                <a class="edu-btn btn-border btn-medium" href="/tickets/comprar/comprar-tour-santiago-bernabeu" style="color: white; text-decoration: none; border: none">{{ $t('Home.buy') }}<i class="icon-east"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                                        <div class="pricing-table">
                                            <div class="pricing-header">
                                                <h6 class="title">{{ $t('Home.flexible_hour') }}</h6>
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
                                                <a class="edu-btn btn-border btn-medium" href="/tickets/comprar/comprar-tour-santiago-bernabeu" style="color: white; text-decoration: none; border: none">{{ $t('Home.buy') }}<i class="icon-east"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12" data-aos-delay="200" data-aos="fade-up" data-aos-duration="800">
                                        <div class="pricing-table">
                                            <div class="pricing-header">
                                                <h6 class="title">Premium</h6>
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
                                                <a class="edu-btn btn-border btn-medium" href="/tickets/comprar/comprar-tour-santiago-bernabeu" style="color: white; text-decoration: none; border: none">{{ $t('Home.buy') }}<i class="icon-east"></i></a>
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

    </div>

    <div id='blog' class="container">
        <div class="row g-5">
            <div class="col-lg-6 col-md-6 col-12" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800" v-for="blog in blogItems.slice(0, 2)" :key="blog.id">
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
<style>
@media (max-width: 768px) {
    .hero-banner {
        height: auto !important;
        border-radius: 0;
        margin-top: 100%;
    }

    .pricing-table {
        margin-bottom: 20px;
    }

    .pricing-header h6 {
        font-size: 1.2rem;
    }

    .price-wrap .amount {
        font-size: 1.5rem;
    }

    .pricing-body ul li {
        font-size: 1rem;
    }

    .edu-btn {
        padding: 10px 20px;
        font-size: 1rem;
    }
    #blog {
        margin-top: 100%;
    }
}
</style>

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