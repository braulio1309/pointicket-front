<template>
    <div>
        <div class="video-area-2 bg-image--14 bg-image">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-8">
                        <div class="video-banner-content">
                            <div class="video-btn">
                                <span class="video-play-btn video-popup-activation" @click.prevent="handleVideoPopup">
                                    <i class="icon-18"></i>
                                </span>
                            </div>
                            <h2 class="title">Take a Video Tour to Learn Intro of Campus</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- video modal start -->
        <video-modal ref="video_modal" video-url="https://www.youtube.com/embed/7e90gBu4pas" />
        <!-- video modal end -->
    </div>
</template>

<script>
import VideoModal from '../common/VideoModal.vue';

export default {
    components: {
        VideoModal
    },
    data() {
        return {}
    },
    methods: {
        handleVideoPopup() {
            this.$refs.video_modal.playVideo();
        },
    },
}
</script>