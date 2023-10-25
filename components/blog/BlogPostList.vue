<template>
    <div class="edu-blog blog-style-list">
        <div class="inner">
            <div class="thumbnail">
                <NuxtLink to="/blog/blog-details">
                    <img :src="'/images/blog/blog-list/' + blogInfo.imgSrc" :alt="blogInfo.alt">
                </NuxtLink>
            </div>
            <div class="content">
                <h5 class="title">
                    <NuxtLink to="/blog/blog-details">{{ blogInfo.title }}</NuxtLink>
                </h5>
                <ul class="blog-meta">
                    <li><i class="icon-27"></i>{{ blogInfo.date }}</li>
                    <li><i class="icon-28"></i>{{ blogInfo.comment }}</li>
                </ul>
                <p>{{ blogInfo.excerpt4 }}</p>
                <div class="read-more-btn">
                    <NuxtLink to="/blog/blog-details" class="edu-btn btn-border btn-medium">
                        Learn More <i class="icon-4"></i>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blogInfo']
    }
</script>