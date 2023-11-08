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
                <h5 class="title">
                    <NuxtLink to="/">{{ blogInfo.title }}</NuxtLink>
                </h5>
                <ul class="blog-meta">
                    <li><i class="icon-27"></i>{{ blogInfo.date }}</li>
                    <li><i class="icon-28"></i>{{ blogInfo.comment }}</li>
                </ul>
                <p>{{ blogInfo.excerpt }}</p>
                <div class="button-group">
                    <a href="#" class="edu-btn btn-medium mt--50">Detalles</a>
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