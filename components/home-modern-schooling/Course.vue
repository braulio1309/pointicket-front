<template>
    <div class="home-eight-course edu-course-area course-area-8 gap-tb-text bg-image">
        <div class="container edublink-animated-shape">
            <ul>
                <li>
                    <SectionTitle preTitle="Popular Courses" title='Pick A Course To Get Started'
                        alignment='section-left' />
                </li>
                <li>
                    <div class="course-view-all" data-aos-delay="150" data-aos="fade-up" data-aos-duration="1200">
                        <NuxtLink to="/course/course-one" class="edu-btn">Browse more courses <i class="icon-4"></i>
                        </NuxtLink>
                    </div>
                </li>
            </ul>
            <div class="row g-5">
                <div class="col-xl-6" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800"
                    v-for="(course) in courseItems.slice(0, 4)" :key="course.id">
                    <CourseTypeFour :course="course" />
                </div>
            </div>

            <ul class="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="-2" data-aos-delay="500" data-aos="fade"
                    data-aos-duration="200" imgSrc="/images/about/shape-13.png" />
                <li class="shape-2">
                    <span></span>
                </li>
                <MouseMove addClassName="shape-3" dataDepth="-2" data-aos-delay="500" data-aos="fade"
                    data-aos-duration="200" imgSrc="/images/about/shape-13.png" />
                <li class="shape-4" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                    <img src="/images/counterup/shape-02.png" alt="Shape">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import courseItemsMixin from '~~/mixins/courseItemsMixin';
import MouseMove from '../animation/MouseMove.vue';
import SectionTitle from '../common/SectionTitle.vue';
import CourseTypeFour from '../course/CourseTypeFour.vue';

export default {
    mixins: [courseItemsMixin],
    components: {
        SectionTitle,
        CourseTypeFour,
        MouseMove
    }
}
</script>

<style lang="scss">
.edu-course-area {
    &.course-area-8 {
        .course-view-all {
            /* margin-top: 37px;
                text-align: right; */
        }
    }
}
</style>