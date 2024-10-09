<template>
    <div class="edu-blog blog-style-1">
        <div class="inner">
            <div class="thumbnail">
                <NuxtLink to="/">
                    <img :src="'/images/blog/blog-one/' + blogInfo.imgSrc" :alt="blogInfo.alt">
                </NuxtLink>
            </div>
            <div class="content position-top">
                
                <div class="category-wrap">
                    <NuxtLink to="/" class="blog-category">{{ blogInfo.category }}</NuxtLink>
                </div>
                <h4 class="title">
                    <NuxtLink to="/">{{ blogInfo.title }}</NuxtLink>
                </h4>
                
                <div class="button-group">
                    <a :href="blogInfo.url" class="edu-btn btn-medium mt--50">{{ $t('Home.see_more') }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["blogInfo"],
}
</script>