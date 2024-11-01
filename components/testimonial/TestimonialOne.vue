<template>
    <div class="testimonial-area-1 section-gap-equal">
        <div class="container">
            <div class="row g-lg-5">
                <div class="col-lg-5">
                    <div class="testimonial-heading-area">
                        <div class="section-title section-left" data-aos-delay="50" data-aos="fade-up"
                            data-aos-duration="800">
                            <span class="pre-title">{{ $t('Home.testimonies') }}</span>
                            <h5 class="title">{{ $t('Home.opinions') }}</h5>
                            <span class="shape-line"><i class="icon-19"></i></span>
                            <p>{{ $t('Home.opinion_text') }}</p>

                        </div>
                    </div>
                </div>

                <div class="col-lg-7">
                    <swiper class="home-one-testimonial-activator" :modules="modules" :slidesPerView="1" :loop="true"
                        :spaceBetween="0" :autoplay="{
                            delay: 3500,
                            disableOnInteraction: true,
                            reverseDirection: true,
                        }" :speed="1500" :grabCursor="true" :breakpoints="{
                            '577': {
                                slidesPerView: 2,
                            },
                        }">
                        <swiper-slide v-for="(testimonial, index) in reviews">
                            <div class="testimonial-grid">
                                <div class="content">
                                    <p>“{{testimonial.text}}”</p>
                                    <div class="rating-icon">
                                        <i v-for="n in testimonial.rating" :key="n" class="icon-23"></i>
                                    
                                    </div>
                                    <h5 class="title">{{testimonial.author_name}}</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue";
import axios from 'axios'
export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Autoplay],
        }
    },
    data() {
        return {
            reviews: [],
        };
    },
    async mounted() {
        const config = useRuntimeConfig();
        try {
            const response = await axios.post(
                `${config.public.apiBase}categories/calificaciones`
            );
            this.reviews = response.data;
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    },
}
</script>