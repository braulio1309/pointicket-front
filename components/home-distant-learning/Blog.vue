<template>
    <div class="edu-blog-area blog-area-2 svg-image--2 bg-image gap-bottom-equal">
        <div class="container">
            <SectionTitle preTitle='Latest Articles' title='Get News with EduBlink' alignment='section-center' />

            <div class="row g-5">
                <div class="col-lg-4 col-md-6 col-12" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800"
                    v-for="blog in blogItems.slice(0, 3)" :key="blog.id">
                    <BlogPostOne :blogInfo="blog" />
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <li class="shape-1">
                <img src="/images/about/shape-25.png" alt="Shape">
            </li>
        </ul>
    </div>
</template>

<script>
import blogItemsMixin from "../../mixins/blogItemsMixin";
import BlogPostOne from '../blog/BlogPostOne.vue';
import SectionTitle from '../common/SectionTitle.vue';
export default {
    mixins: [blogItemsMixin],
    components: {
        BlogPostOne,
        SectionTitle
    },
}
</script>