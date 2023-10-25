<template>
    <div class="edu-blog-area blog-area-6 bg-image section-gap-equal">
        <div class="container">
            <SectionTitle preTitle='Latest Articles' title='Get News with EduBlink' alignment='section-center' />

            <div class="row g-5">
                <div class="col-lg-3 col-md-6 col-12" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800"
                    v-for="blog in blogItems.slice(0, 4)" :key="blog.id">
                    <BlogPostThree :blogInfo="blog" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import blogItemsMixin from '~~/mixins/blogItemsMixin';
import BlogPostThree from '../blog/BlogPostThree.vue';
import SectionTitle from '../common/SectionTitle.vue';

export default {
    mixins: [blogItemsMixin],
    components: {
        SectionTitle,
        BlogPostThree
    },
}
</script>