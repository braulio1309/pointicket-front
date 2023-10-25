<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo title='Course Style 3' />
        
        <div class="edu-course-area course-area-1 gap-tb-text">
            <div class="container">
                <div class="edu-sorting-area">
                    <div class="sorting-left">
                        <h6 class="showing-text">We found <span>{{ courses.length }}</span> courses available for you</h6>
                    </div>
                    <div class="sorting-right">
                        <div class="layout-switcher">
                            <label>Grid</label>
                            <ul class="switcher-btn">
                                <li><NuxtLink to="/course/course-three" class="active"><i class="icon-53"></i></NuxtLink></li>
                                <li><NuxtLink to="/course/course-four"><i class="icon-54"></i></NuxtLink></li>
                            </ul>
                        </div>
                        <div class="edu-sorting">
                            <div class="icon"><i class="icon-55"></i></div>
                            <select class="edu-select">
                                <option>Filters</option>
                                <option>Low To High</option>
                                <option>High Low To</option>
                                <option>Last Viewed</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row g-5">
                    <div 
                        class="col-12 col-xl-4 col-lg-6 col-md-6"
                        v-for="(course, key) in courses" 
                        :key="key"
                        :class="[
                            ( ( key+1 ) % 3 === 0 && key !== 0 ? 'course-style-3-third-item' : undefined ), 
                            ( ( key+1 ) % 2 === 0 && key !== 0 ? 'course-style-3-even' : 'course-style-3-odd' )
                        ]"
                    >
                        <CourseTypeThree :course="course" />
                    </div>
                </div>

                <div class="load-more-btn">
                    <button 
                        class="edu-btn"
                        @click="loadMore" 
                        v-if="defaultNumberOfCourses < courseItems.length"
                    >
                        Load More <i class="icon-56"></i>
                    </button>
                </div>
            </div>
        </div>

        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<script>
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import CourseTypeThree from '~~/components/course/CourseTypeThree.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';

import courseItemsMixin from '../../mixins/courseItemsMixin';

export default {
    mixins: [courseItemsMixin],
    components: {
    HeaderOne,
    BreadCrumbTwo,
    CourseTypeThree,
    FooterOne,
    ScrollToTop
},
    data() {
        return {
            defaultNumberOfCourses: 9
        }
    },
    computed: {
        courses() {
            return this.courseItems.slice(0, this.defaultNumberOfCourses);
        }
    },
    methods: {
        loadMore() {
            this.defaultNumberOfCourses += 4;
        }
    },
    head() {
        return {
            title: 'Course Style 3'
        }
    },
    
}
</script>