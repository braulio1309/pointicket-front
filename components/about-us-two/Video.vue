<template>
    <div>
        <div class="video-area-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <div class="video-gallery">
                            <div class="thumbnail">
                                <img src="/images/others/video-01.jpg" alt="Thumb">
                                <span class="video-play-btn video-popup-activation" @click.prevent="handleVideoPopup">
                                    <i class="icon-18"></i>
                                </span>
                            </div>
                            <ul class="shape-group">
                                <li class="shape-1">
                                    <img class="rotateit" src="/images/about/shape-25.png" alt="Shape">
                                </li>
                                <li class="shape-2">
                                    <img src="/images/faq/shape-04.png" alt="Shape">
                                </li>

                                <MouseMove addClassName="shape-3 shape-light" dataDepth="2"
                                    imgSrc="/images/faq/shape-14.png" />

                                <MouseMove addClassName="shape-3 shape-dark" dataDepth="2"
                                    imgSrc="/images/faq/dark-shape-14.png" />
                            </ul>
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
import MouseMove from '../animation/MouseMove.vue';
import VideoModal from '../common/VideoModal.vue';
export default {
    components: {
        MouseMove,
        VideoModal
    },
    methods: {
        handleVideoPopup() {
            this.$refs.video_modal.playVideo();
        },
    }
}
</script>
<style>
.video-area-1 .video-play-btn {
    cursor: pointer;
}
</style>