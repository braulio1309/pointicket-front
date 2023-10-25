<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbOne pageTitle='Instructor 2' title='Leadership Instruction' />

        <div class="edu-team-area team-area-1 gap-tb-text">
            <div class="container">
                <SectionTitle preTitle='Instructors' title='Course Instructors' alignment='section-center' />

                <div class="row g-5">
                    <div class="col-lg-3 col-sm-6 col-12 mb--10" data-aos-delay="150" data-aos="fade-up"
                        data-aos-duration="800" v-for="(instructor, key) in instructors.slice(0, 8)" :key="key">
                        <InstructorOne :instructor="instructor" />
                    </div>
                </div>
            </div>
        </div>

        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<script>
import BreadCrumbOne from '~~/components/common/BreadCrumbOne.vue';
import SectionTitle from '~~/components/common/SectionTitle.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import InstructorOne from '~~/components/instructor/InstructorOne.vue';
import instructorProfilesMixin from '../../mixins/instructorProfilesMixin'
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';


export default {
    mixins: [instructorProfilesMixin],
    components: {
    BreadCrumbOne,
    SectionTitle,
    HeaderOne,
    FooterOne,
    InstructorOne,
    ScrollToTop
},
    head() {
        return {
            title: 'Instructor 2'
        }
    },
    
}
</script>