<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo pageTitle='Gallery Grid' title='Gallery' />

        <div class="edu-gallery-area edu-section-gap">
            <div class="container">
                <div class="isotope-wrapper">
                    <div class="isotop-button button-transparent isotop-filter">
                        <button v-for="(cat, index) in filterCategory" :key="index" @click="filterHandler(cat)"
                            class="filter-selector-item" :class="{ 'is-checked': cat === selectedCategory }">
                            <span>{{ cat }}</span>
                        </button>

                    </div>
                    <div id="masonry-gallery" class="edublink-vue-gallery-masonry gallery-grid-wrap">
                        <masonry-wall :items="filterData">
                            <template #default="{ item,index }">
                                <a class="edu-gallery-grid masonry-item items">
                                    <div class="thumbnail">
                                        <img :src="item.thumb" alt="Gallery Image" />
                                    </div>
                                    <div class="zoom-icon" @click.prevent="handleImagePopup(index)">
                                        <i class="icon-69"></i>
                                    </div>
                                </a>
                            </template>
                        </masonry-wall>
                    </div>
                </div>
            </div>
        </div>

        <CTAOneAlter />

        <FooterOne />

        <!-- image popup start -->
        <image-popup ref="image_popup" :images="filterData" />
        <!-- image popup end -->

        <ScrollToTop />
    </div>
</template>

<script>
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import ImagePopup from '~~/components/common/ImagePopup.vue';
import CTAOneAlter from '~~/components/cta/CTAOneAlter.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';

export default {
    components: {
    HeaderOne,
    BreadCrumbTwo,
    CTAOneAlter,
    FooterOne,
    ImagePopup,
    ScrollToTop
},
    data() {
        return {
            filterData: [],
            selectedCategory: 'all',
            items: [
                {
                    thumb: '/images/gallery/gallery-01.jpg',
                    src: '/images/gallery/gallery-01.jpg',
                    category: ['education']
                },
                {
                    thumb: '/images/gallery/gallery-02.jpg',
                    src: '/images/gallery/gallery-02.jpg',
                    category: ['marketing']
                },
                {
                    thumb: '/images/gallery/gallery-03.jpg',
                    src: '/images/gallery/gallery-03.jpg',
                    category: ['development', 'education']
                },
                {
                    thumb: '/images/gallery/gallery-04.jpg',
                    src: '/images/gallery/gallery-04.jpg',
                    category: ['health']
                },
                {
                    thumb: '/images/gallery/gallery-05.jpg',
                    src: '/images/gallery/gallery-05.jpg',
                    category: ['marketing']
                },
                {
                    thumb: '/images/gallery/gallery-06.jpg',
                    src: '/images/gallery/gallery-06.jpg',
                    category: ['health', 'development']
                },
                {
                    thumb: '/images/gallery/gallery-07.jpg',
                    src: '/images/gallery/gallery-07.jpg',
                    category: ['education']
                },
                {
                    thumb: '/images/gallery/gallery-08.jpg',
                    src: '/images/gallery/gallery-08.jpg',
                    category: ['marketing']
                },
                {
                    thumb: '/images/gallery/gallery-09.jpg',
                    src: '/images/gallery/gallery-09.jpg',
                    category: ['health']
                }
            ]
        }
    },
    computed: {
        filterCategory() {
            return ['all', ...new Set(this.items.map((elem) => elem.category).flat())]
        }
    },
    methods: {
        filterHandler(cat) {
            console.log(cat)
            this.selectedCategory = cat;
            if (this.selectedCategory === 'all') {
                this.filterData = this.items
            } else {
               this.filterData = this.items.filter((item) => item.category.includes(cat));
            }
        },
        handleImagePopup(indexNum) {
            this.$refs.image_popup.showImg(indexNum);
        }
    },
    mounted() {
        this.filterData = this.items
    },
    head() {
        return {
            title: 'Gallery Grid'
        }
    },
}
</script>