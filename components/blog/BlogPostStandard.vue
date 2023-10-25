<template>
    <div class="edu-blog blog-style-4">
        <div class="inner">
            <div class="thumbnail">
                <div class="blog-gallery-activation" v-if="blogInfo.slider">
                    <swiper class="swiper" :modules="modules" :slidesPerView="1" :loop="true" :spaceBetween="0" :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false,
                    }" :navigation="{ nextEl: '.swiper-btn-nxt', prevEl: '.swiper-btn-prv', }" :speed="1000"
                        :grabCursor="true">
                        <swiper-slide v-for="(sliderThumb, i) in blogInfo.slider" :key="i">
                            <NuxtLink to="/blog/blog-details">
                                <img :src="'/images/blog/blog-standard/' + sliderThumb" :alt="blogInfo.alt">
                            </NuxtLink>
                        </swiper-slide>
                    </swiper>
                    <div class="swiper-navigation">
                        <div class="swiper-btn-nxt">
                            <i class="icon-west"></i>
                        </div>
                        <div class="swiper-btn-prv">
                            <i class="icon-east"></i>
                        </div>
                    </div>
                </div>

                <NuxtLink to="/blog/blog-details" v-else>
                    <img :src="'/images/blog/blog-standard/' + blogInfo.imgSrc" :alt="blogInfo.alt" />
                </NuxtLink>
                <span v-for="( _, imageIndex ) in blogInfo.video" :key="imageIndex">
                    <span class="video-play-btn video-popup-activation" @click.prevent="handleVideoPopup">
                        <i class="icon-18"></i>
                    </span>
                </span>
            </div>
            <div class="content">
                <div class="category-wrap">
                    <NuxtLink to="/blog/blog-masonry" class="blog-category">{{ blogInfo.category }}</NuxtLink>
                </div>
                <h3 class="title">
                    <NuxtLink to="/blog/blog-details">{{ blogInfo.title }}</NuxtLink>
                </h3>
                <ul class="blog-meta">
                    <li><i class="icon-27"></i>{{ blogInfo.date }}</li>
                    <li><i class="icon-28"></i>{{ blogInfo.comment }}</li>
                </ul>
                <p>{{ blogInfo.excerpt3 }}</p>
                <div class="read-more-btn">
                    <NuxtLink to="/blog/blog-details" class="edu-btn btn-border btn-medium">
                        Learn More <i class="icon-4"></i>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <!-- video modal start -->
        <video-modal ref="video_modal" video-url="https://www.youtube.com/embed/7e90gBu4pas" />
        <!-- video modal end -->
    </div>
</template>

<script>
import { Autoplay } from 'swiper'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue";
import VideoModal from '../common/VideoModal.vue';

export default {
    props: ['blogInfo'],
    components: {
        Swiper,
        SwiperSlide,
        VideoModal
    },
    setup() {
        return {
            modules: [Autoplay, Navigation],
        }
    },
    methods: {
        handleVideoPopup() {
            this.$refs.video_modal.playVideo();
        },
    }

}
</script>

<style>
.blog-gallery-activation {
    position: relative;
}

.video-area-1 .video-play-btn {
    cursor: pointer;
}
</style>