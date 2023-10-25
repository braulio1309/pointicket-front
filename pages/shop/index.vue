<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo pageTitle='Shop Page' title='Shop' />

        <section class="shop-page-area section-gap-equal">
            <div class="container">
                <div class="edu-sorting-area">
                    <div class="sorting-left">
                        <h6 class="showing-text">We found <span>{{ productItems.length }}</span> books available for you
                        </h6>
                    </div>
                    <div class="sorting-right">
                        <div class="edu-sorting">
                            <div class="icon"><i class="icon-55"></i></div>
                            <select class="edu-select">
                                <option>Filters</option>
                                <option>Low To High</option>
                                <option>High Low To</option>
                                <option>Last Viewed</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row g-5">
                    <div class="col-lg-3 col-md-4 col-sm-6" v-for="product in productItems" :key="product.id">
                        <ProductOne :product="product" />
                    </div>
                </div>

                <PaginationOne />
            </div>
        </section>

        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<script>
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import ProductOne from '~~/components/product/ProductOne.vue';
import PaginationOne from '~~/components/common/PaginationOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';

import productItemsMixin from '~~/mixins/productItemsMixin';

export default {
    mixins: [productItemsMixin],
    components: {
    HeaderOne,
    BreadCrumbTwo,
    ProductOne,
    PaginationOne,
    FooterOne,
    ScrollToTop
},
    head() {
        return {
            title: 'Shop Page'
        }
    },
    
}
</script>