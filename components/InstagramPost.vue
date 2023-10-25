<template>
    <div class="instagram-grid">
        <NuxtLink to="/">
            <img :src="instagram.imgSrc" :alt="instagram.imgAlt">
            <span class="user-info">
                <span class="icon"><i class="icon-instagram"></i></span>
                <span class="user-name">{{ instagram.title }}</span>
            </span>
        </NuxtLink>
    </div>
</template>

<script>
    export default {
        props: ['instagram']
    }
</script>