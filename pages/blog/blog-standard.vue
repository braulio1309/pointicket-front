<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo title='Blog Standard' />

        <section class="section-gap-equal">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-8">
                        <div 
                            class="blog-standard-each-item" 
                            v-for="blog in getItems" 
                            :key="blog.id"
                        >
                            <BlogPostStandard :blogInfo="blog" />
                        </div>

                        <!-- <div v-if="getPaginateCount > 1">
                            <pagination 
                                class="edublink-vue-pagination mt--0" 
                                v-model="currentPage" 
                                :per-page="perPage" 
                                :records="blogData.blogs.length"
                                @paginate="paginateClickCallback"
                                :page-count="getPaginateCount" 
                                :options="paginationOptions"
                            />
                        </div> -->
                    </div>

                    <div class="col-lg-4">
                        <BlogSidebarOne :blogItems="blogItems" :categories="categories" :archives="archives" :tags="tags" />
                    </div>
                </div>
            </div>
        </section>

        <CTAOne />

        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<script>
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import BlogSidebarOne from '~~/components/sidebar/BlogSidebarOne.vue';
import BlogPostStandard from '~~/components/blog/BlogPostStandard.vue';
import CTAOne from '~~/components/cta/CTAOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';

import blogItemsMixin from '~~/mixins/blogItemsMixin';

    export default {
        mixins: [blogItemsMixin],
        components: {
    HeaderOne,
    BreadCrumbTwo,
    BlogSidebarOne,
    BlogPostStandard,
    CTAOne,
    FooterOne,
    ScrollToTop
},
        data () {
            return {
                currentPage: 1,
                perPage: 5,
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
                let start = ( this.currentPage - 1 ) * this.perPage;
                let end = this.currentPage * this.perPage;
                return this.blogItems.slice( start, end );
            },
            getPaginateCount() {
                return Math.ceil( this.blogItems.length / this.perPage );
            }
        },
        methods: {
            paginateClickCallback( page ) {
                this.currentPage = Number( page );
            }
        },
        head() {
            return {
                title: 'Blog Standard'
            }
        },
    
    }
</script>

