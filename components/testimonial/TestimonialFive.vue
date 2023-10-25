<template>
    <div class="testimonial-area-8 section-gap-equal">
        <div class="container edublink-animated-shape">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <SectionTitle preTitle='Testimonials' title='What Our Students <br> Have To Say'
                        alignment='section-center' />
                </div>
            </div>
            <div>
                <swiper 
                    class="testimonial-activation"
                    :modules="modules" 
                    :slidesPerView="1" 
                    :loop="true" 
                    :spaceBetween="0"
                    :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false,
                    }"
                    :pagination="{ el: '.swiper-pagination', clickable: true }" 
                    :speed="1000" 
                    :grabCursor="true"
                    :breakpoints="{
                        '768': {
                            slidesPerView: 2
                        },
                        '992': {
                            slidesPerView: 3
                        }
                    }">
                    <swiper-slide>
                        <div class="testimonial-slide">
                            <div class="content">
                                <div class="author-info">
                                    <div class="thumb">
                                        <img src="/images/testimonial/testimonial-05.png" alt="Testimonial">
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim
                                    veniam quis nostrud exer citation.</p>
                                <div class="rating-icon">
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                </div>
                                <div class="info">
                                    <h5 class="title">Ray Sanchez</h5>
                                    <span class="subtitle">Student</span>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="testimonial-slide">
                            <div class="content">
                                <div class="author-info">
                                    <div class="thumb">
                                        <img src="/images/testimonial/testimonial-06.png" alt="Testimonial">
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim
                                    veniam quis nostrud exer citation.</p>
                                <div class="rating-icon">
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                </div>
                                <div class="info">
                                    <h5 class="title">Thomas Lopez</h5>
                                    <span class="subtitle">Designer</span>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="testimonial-slide">
                            <div class="content">
                                <div class="author-info">
                                    <div class="thumb">
                                        <img src="/images/testimonial/testimonial-07.png" alt="Testimonial">
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim
                                    veniam quis nostrud exer citation.</p>
                                <div class="rating-icon">
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                </div>
                                <div class="info">
                                    <h5 class="title">Amber Page</h5>
                                    <span class="subtitle">Developer</span>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="testimonial-slide">
                            <div class="content">
                                <div class="author-info">
                                    <div class="thumb">
                                        <img src="/images/testimonial/testimonial-08.png" alt="Testimonial">
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim
                                    veniam quis nostrud exer citation.</p>
                                <div class="rating-icon">
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                </div>
                                <div class="info">
                                    <h5 class="title">James Flowers</h5>
                                    <span class="subtitle">Manager</span>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="swiper-pagination text-center"></div>
            </div>
        </div>

        <ul class="shape-group">
            <li class="shape-3" data-aos-delay="200" data-aos="fade" data-aos-duration="1000">
                <img class="d-block-shape-light" data-depth="2" src="/images/others/map-shape-3.png" alt="Shape">
                <img class="d-none-shape-dark" data-depth="2" src="/images/others/dark-map-2-shape-3.png" alt="Shape">
            </li>
        </ul>
    </div>
</template>

<script>
import { Autoplay } from 'swiper'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue";
import SectionTitle from '../common/SectionTitle.vue'

export default {
    components: {
    Swiper,
    SwiperSlide,
    SectionTitle
},
    setup() {
        return {
            modules: [Autoplay, Pagination],
        }
    }
}
</script>