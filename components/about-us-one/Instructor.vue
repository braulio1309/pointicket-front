<template>
    <div class="edu-team-area team-area-5 section-gap-large">
        <div class="container">
            <SectionTitle preTitle='Instructors' title='Course Instructors' alignment='section-center' />

            <div class="row g-5">
                <div class="col-lg-4 col-md-6" data-aos-delay="50" data-aos="fade-up" data-aos-duration="800"
                    v-for="(instructor, key) in instructors.slice(0, 3)" :key="key">
                    <InstructorTwo :instructor="instructor" />
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth=".8" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
            <MouseMove addClassName="shape-2" dataDepth="-2" data-aos-delay="500" data-aos="fade" data-aos-duration="200"
                imgSrc="/images/about/shape-13.png" />
            <li class="shape-3" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
                <span></span>
            </li>
        </ul>
    </div>
</template>

<script>
import instructorProfilesMixin from '../../mixins/instructorProfilesMixin';
import SectionTitle from '../common/SectionTitle.vue';
import InstructorTwo from '../instructor/InstructorTwo.vue';
import MouseMove from '../animation/MouseMove.vue';
export default {
    mixins: [instructorProfilesMixin],
    components: {
        SectionTitle,
        InstructorTwo,
        MouseMove
    },
}
</script>