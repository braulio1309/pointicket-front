<template>
    <div class="edu-team-area team-area-1 gap-tb-text">
        <div class="container">
            <SectionTitle preTitle='Instructors' title='Course Instructors' alignment='section-center' />
            <div class="row g-5">
                <div class="col-lg-4 col-md-6" data-aos-delay="50" data-aos="fade-up" data-aos-duration="800"
                    v-for="(instructor, key) in instructors.slice(0, 3)" :key="key">
                    <InstructorTwo :instructor="instructor" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import instructorProfilesMixin from '~~/mixins/instructorProfilesMixin';
import SectionTitle from '../common/SectionTitle.vue';
import InstructorTwo from '../instructor/InstructorTwo.vue';
export default {
    mixins: [instructorProfilesMixin],
    components: {
        SectionTitle,
        InstructorTwo
    },
}
</script>