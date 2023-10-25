<template>
    <div class="edu-course-area course-area-6 edu-section-gap bg-lighten01">
        <div class="container">
            <SectionTitle preTitle='Popular Courses' preTitleClass='pre-textsecondary' title='Pick A Course To Get Started'
                alignment='section-center' />
                <div>
                    <swiper 
                        class="course-activation"
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
                        <swiper-slide v-for="course in yogaCourses.slice(0, 4)" :key="course.id">
                            <CourseTypeEight :course="course" />
                        </swiper-slide>
                    </swiper>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>

<script>
import courseItemsMixin from '~~/mixins/courseItemsMixin';
import SectionTitle from '../common/SectionTitle.vue';
import CourseTypeEight from '../course/CourseTypeEight.vue';
import { Autoplay } from 'swiper'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
    components: {
        CourseTypeEight,
        SectionTitle,
        Swiper,
        SwiperSlide,
    },
    mixins: [courseItemsMixin],
    setup() {
        return {
            modules: [Autoplay, Pagination],
        }
    }
}
</script>

<style lang="scss">
.course-area-6 {
    .swiper-pagination {
        position: absolute;
        width: 100%;
        text-align: center;
        left: 0;
        bottom: 120px;
    }
}
</style>