<template>
    <div class="edu-instagram-area instagram-area-1">
        <div class="container-fluid">
            <SectionTitle preTitle="Instructors" preTitleClass="pre-textsecondary" title="Follow Me On Instagram"
                alignment="section-center" />
            <div class="row g-3">
                <div class="col-xl-2 col-md-4 col-sm-6" v-for="( instagram, index ) in kitchenPosts" :key="index">
                    <InstagramPost :instagram="instagram" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import instagramMixin from '~~/mixins/instagramMixin';
import InstagramPost from '../InstagramPost.vue';
export default {
    mixins: [instagramMixin],
    components: {
        InstagramPost
    }
}
</script>