<template>
    <div class="edu-team-area team-area-3 edu-section-gap">
        <div class="container">
            <SectionTitle preTitle='Instructors' title='Course Instructors' alignment='section-center' />

            <div class="row g-5">
                <div class="col-lg-4 col-md-6" data-aos-delay="50" data-aos="fade-up" data-aos-duration="800"
                    v-for="(instructor, key) in instructors.slice(0, 3)" :key="key">
                    <InstructorThree :instructor="instructor" />
                </div>
            </div>
        </div>

        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="-2" data-aos-delay="200" data-aos="fade" data-aos-duration="800"
                imgSrc="/images/others/shape-26.png" />
        </ul>
    </div>
</template>

<script>
import MouseMove from '../animation/MouseMove.vue';
import InstructorThree from '../instructor/InstructorThree.vue';
import SectionTitle from '../common/SectionTitle.vue';
import instructorProfilesMixin from '~~/mixins/instructorProfilesMixin';
export default {
    mixins: [instructorProfilesMixin],
    components: {
        MouseMove,
        InstructorThree,
        SectionTitle
    }
}
</script>