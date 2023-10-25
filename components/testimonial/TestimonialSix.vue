<template>
    <div class="testimonial-area-3">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <SectionTitle preTitle='Testimonials' title='What Our Students <br> Have To Say'
                        alignment='section-center' />
                </div>
            </div>
            <div>
                <swiper 
                    class="testimonial-activation-2"
                    :modules="modules" 
                    :slidesPerView="1" 
                    :loop="true" 
                    :spaceBetween="0"
                    :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false,
                    }"
                    :speed="1000" 
                    :grabCursor="true"
                    :breakpoints="{
                        '768': {
                            slidesPerView: 1
                        },
                        '992': {
                            slidesPerView: 2
                        }
                    }">
                    <swiper-slide>
                        <div class="testimonial-slide testimonial-style-2">
                            <div class="content">
                                <div class="rating-icon">
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                </div>
                                <p>Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim
                                    minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde
                                    omnis iste natus error sit voluptatem.</p>
                                <div class="author-info">
                                    <div class="thumb">
                                        <img src="/images/testimonial/testimonial-01.png" alt="Testimonial">
                                    </div>
                                    <div class="info">
                                        <h5 class="title">Haley Bennet</h5>
                                        <span class="subtitle">Designer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="testimonial-slide testimonial-style-2">
                            <div class="content">
                                <div class="rating-icon">
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                </div>
                                <p>Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim
                                    minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde
                                    omnis iste natus error sit voluptatem.</p>
                                <div class="author-info">
                                    <div class="thumb">
                                        <img src="/images/testimonial/testimonial-02.png" alt="Testimonial">
                                    </div>
                                    <div class="info">
                                        <h5 class="title">Richard Gere</h5>
                                        <span class="subtitle">Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="testimonial-slide testimonial-style-2">
                            <div class="content">
                                <div class="rating-icon">
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                </div>
                                <p>Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim
                                    minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde
                                    omnis iste natus error sit voluptatem.</p>
                                <div class="author-info">
                                    <div class="thumb">
                                        <img src="/images/testimonial/testimonial-03.png" alt="Testimonial">
                                    </div>
                                    <div class="info">
                                        <h5 class="title">Megan Foxx</h5>
                                        <span class="subtitle">Content Creator</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="100" data-aos="fade" data-aos-duration="1000"
                imgSrc="/images/others/shape-03.png" />
            <MouseMove addClassName="shape-2" dataDepth="-2" data-aos-delay="100" data-aos="fade" data-aos-duration="1000"
                imgSrc="/images/others/shape-04.png" />
            <MouseMove addClassName="shape-3" dataDepth="2" data-aos-delay="100" data-aos="fade" data-aos-duration="1000"
                imgSrc="/images/others/shape-02.png" />
            <MouseMove addClassName="shape-4" dataDepth="-2" data-aos-delay="100" data-aos="fade" data-aos-duration="1000"
                imgSrc="/images/others/shape-01.png" />
            <li class="shape-5" data-aos-delay="100" data-aos="fade" data-aos-duration="1000">
                <img src="/images/others/map-shape-3.png" alt="Shape">
            </li>
        </ul>
    </div>
</template>

<script>
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue";
import SectionTitle from '../common/SectionTitle.vue'
import MouseMove from '../animation/MouseMove.vue'

export default {
    components: {
        Swiper,
        SwiperSlide,
        SectionTitle,
        MouseMove
    },
    setup() {
        return {
            modules: [Autoplay],
        }
    }
}
</script>