<template>
    <div>
        <div class="video-area-3">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <div class="video-gallery">
                            <div class="thumbnail">
                                <img src="/images/others/video-02.webp" alt="Thumb">
                                <span class="video-play-btn video-popup-activation" @click.prevent="handleVideoPopup">
                                    <i class="icon-18"></i>
                                </span>
                            </div>
                            <ul class="shape-group">
                                <li class="shape-1">
                                    <img class="rotateit" src="/images/about/shape-10.png" alt="Shape">
                                </li>
                                <li class="shape-2">
                                    <img src="/images/about/shape-29.png" alt="Shape">
                                </li>
                                <li class="shape-3">
                                    <img class="rotateit" src="/images/about/shape-31.png" alt="Shape">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- video modal start -->
          <video-modal
            ref="video_modal"
            video-url="https://www.youtube.com/embed/7e90gBu4pas"
          />
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