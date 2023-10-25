<template>
    <div class="edu-blog-area blog-area-3 edu-section-gap">
        <div class="container">
            <SectionTitle preTitle="Latest Articles" title="Get News with EduBlink" alignment="section-center" />
            <div class="row g-5 row--45">

                <div class="col-lg-6 col-12" data-aos-delay="50" data-aos="fade-up" data-aos-duration="800"
                    v-for="blog in blogItems.slice(0, 1)" :key="blog.id">
                    <div class="edu-blog blog-style-2 first-large-blog">
                        <div class="inner">
                            <div class="thumbnail">
                                <NuxtLink to="/blog/blog-details">
                                    <img :src="'/images/blog/blog-two/' + blog.imgSrc" :alt="blog.alt">
                                </NuxtLink>
                            </div>
                            <div class="content">
                                <div class="blog-date">
                                    <span class="day">{{ blog.dateOnly }}</span>
                                    <span class="month">{{ blog.monthOnly }}</span>
                                </div>
                                <div class="category-wrap">
                                    <NuxtLink to="/blog/blog-masonry" class="blog-category">{{ blog.category }}</NuxtLink>
                                </div>
                                <h4 class="title">
                                    <NuxtLink to="/blog/blog-details">{{ blog.title }}</NuxtLink>
                                </h4>
                                <p>{{ blog.excerpt2 }}</p>
                                <ul class="blog-meta">
                                    <li><i class="icon-25"></i>By <NuxtLink to="/blog/blog-masonry">{{ blog.author }}
                                        </NuxtLink>
                                    </li>
                                    <li><i class="icon-28"></i>{{ blog.comment }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-12" data-aos-delay="50" data-aos="fade-up" data-aos-duration="800">
                    <div class="edu-blog blog-style-2" v-for="blog in blogItems.slice(1, 4)" :key="blog.id">
                        <div class="inner">
                            <div class="thumbnail">
                                <NuxtLink to="/blog/blog-details">
                                    <img :src="'/images/blog/blog-two/' + blog.imgSrc" :alt="blog.alt">
                                </NuxtLink>
                                <div class="blog-date">
                                    <span class="day">{{ blog.dateOnly }}</span>
                                    <span class="month">{{ blog.monthOnly }}</span>
                                </div>
                            </div>
                            <div class="content">
                                <div class="category-wrap">
                                    <NuxtLink to="/blog/blog-masonry" class="blog-category">{{ blog.category }}</NuxtLink>
                                </div>
                                <h5 class="title">
                                    <NuxtLink to="/blog/blog-details">{{ blog.title }}</NuxtLink>
                                </h5>
                                <ul class="blog-meta">
                                    <li><i class="icon-25"></i>By <NuxtLink to="/blog/blog-masonry">Edward</NuxtLink>
                                    </li>
                                    <li><i class="icon-28"></i>{{ blog.comment }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import blogItemsMixin from '~~/mixins/blogItemsMixin';
import SectionTitle from '../common/SectionTitle.vue';

export default {
    mixins: [blogItemsMixin],
    components: {
        SectionTitle
    }
}
</script>