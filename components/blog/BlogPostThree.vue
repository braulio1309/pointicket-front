<template>
    <div class="edu-blog blog-style-1">
        <div class="inner">
            <div class="thumbnail">
                <NuxtLink to="/blog/blog-details">
                    <img :src="'/images/blog/blog-three/' + blogInfo.imgSrc" :alt="blogInfo.alt">
                </NuxtLink>
                <span class="date">{{ blogInfo.date }}</span>
            </div>
            <div class="content position-top">
                <div class="read-more-btn">
                    <NuxtLink to="/blog/blog-details" class="btn-icon-round">
                        <i class="icon-4"></i>
                    </NuxtLink>
                </div>
                <div class="category-wrap">
                    <NuxtLink to="/blog/blog-masonry" class="blog-category">{{ blogInfo.category }}</NuxtLink>
                </div>
                <h5 class="title"><NuxtLink to="/blog/blog-details">{{ blogInfo.title }}</NuxtLink></h5>
                <p>{{ blogInfo.excerpt.substring(0,52)+"..." }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blogInfo']
    }
</script>