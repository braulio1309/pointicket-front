<template>
    <div class="edu-team-grid team-style-5">
        <div class="inner">
            <div class="thumbnail-wrap">
                <div class="thumbnail">
                    <NuxtLink to="/instructor/instructor-profile">
                        <img :src="'/images/team/team-02/'+instructor.imgSrc" :alt="(instructor.name) + ' Thumbnail'" />
                    </NuxtLink>
                </div>
                <ul class="team-share-info">
                    <li v-for="(social, key) in instructor.socialLinks" :key="key">
                        <a :aria-label="social.name" :href="social.url">
                            <i :class="social.iconName"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="content">
                <h4 class="title">
                    <NuxtLink to="/instructor/instructor-profile">{{ instructor.name }}</NuxtLink>
                </h4>
                <span class="designation">{{ instructor.designation }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['instructor']
    }
</script>