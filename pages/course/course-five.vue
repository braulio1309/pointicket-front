<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo title='Course Style 5' />

        <div class="edu-course-area course-area-1 section-gap-equal">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-3 order-lg-2">
                        <CourseSidebarOne />
                    </div>

                    <div class="col-lg-9 col-pr--35 order-lg-1">
                        <div class="edu-sorting-area">
                            <div class="sorting-left">
                                <h6 class="showing-text">We found <span>{{ getItems.length }}</span> courses available for
                                    you</h6>
                            </div>
                            <div class="sorting-right">
                                <div class="layout-switcher">
                                    <label>Grid</label>
                                    <ul class="switcher-btn">
                                        <li>
                                            <NuxtLink to="/course/course-one"><i class="icon-53"></i></NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/course/course-five" class="active"><i class="icon-54"></i>
                                            </NuxtLink>
                                        </li>
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

                        <div class="edu-course-six-each-item" v-for="course in getItems" :key="course.id">
                            <CourseTypeSeven :course="course" />
                        </div>

                        <div v-if="getPaginateCount > 1">
                            <div class="edublink-vue-pagination" >
                                <pagination 
                                    v-model="currentPage" 
                                    :per-page="perPage" 
                                    :records="courseItems.length"
                                    @paginate="paginateClickCallback"
                                    :options="paginationOptions"
                                />
                            </div>
                        </div>
                    </div>
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
import CourseTypeSeven from '~~/components/course/CourseTypeSeven.vue';
import CourseSidebarOne from '~~/components/sidebar/CourseSidebarOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';

import courseItemsMixin from '../../mixins/courseItemsMixin';
import Pagination from 'v-pagination-3';

export default {
    mixins: [courseItemsMixin],
    components: {
    HeaderOne,
    BreadCrumbTwo,
    CourseSidebarOne,
    CourseTypeSeven,
    FooterOne,
    ScrollToTop,
    Pagination
},
    data() {
        return {
            currentPage: 1,
            perPage: 9,
            paginationOptions: {
                texts: {
                    nextPage: '',
                    prevPage: ''
                }
            }
        }
    },
    computed: {
        getItems() {
            let start = (this.currentPage - 1) * this.perPage;
            let end = this.currentPage * this.perPage;
            return this.courseItems.slice(start, end);
        },
        getPaginateCount() {
            return Math.ceil(this.courseItems.length / this.perPage);
        }
    },
    methods: {
        paginateClickCallback(page) {
            this.currentPage = Number(page);
        }
    },
    head() {
        return {
            title: 'Course Style 5'
        }
    },
    
}
</script>