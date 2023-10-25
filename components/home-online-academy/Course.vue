<template>
    <div class="home-four-course edu-course-area course-area-4 gap-tb-text bg-image">
        <div class="container edublink-animated-shape">
            <SectionTitle preTitle="Popular Courses" title='Pick A Course To Get Started' alignment='section-center' />

            <div class="row g-5">
                <div class="col-xl-6" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800"
                    v-for="(course) in courseItems.slice(0, 4)" :key="course.id">
                    <CourseTypeFour :course="course" />
                </div>
            </div>
            <div class="course-view-all" data-aos-delay="150" data-aos="fade-up" data-aos-duration="1200">
                <NuxtLink to="/course/course-one" class="edu-btn">Browse more courses <i class="icon-4"></i></NuxtLink>
            </div>
            <ul class="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="-2" data-aos-delay="500" data-aos="fade"
                    data-aos-duration="200" imgSrc="/images/about/shape-13.png" />
                <MouseMove addClassName="shape-2" dataDepth="1" data-aos-delay="500" data-aos="fade" />
            </ul>
        </div>
    </div>
</template>

<script>
import CourseTypeFour from '../course/CourseTypeFour.vue';
import SectionTitle from '../common/SectionTitle.vue';
import MouseMove from '../animation/MouseMove.vue';
import courseItemsMixin from '~~/mixins/courseItemsMixin';

export default {
    mixins: [courseItemsMixin],
    components: {
        CourseTypeFour,
        SectionTitle,
        MouseMove
    }
}
</script>