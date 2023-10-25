<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo title='Wishlist Page' />

        <section class="cart-page-area edu-section-gap">
            <div class="container">
                <div class="table-responsive">
                    <table class="table cart-table">
                        <thead>
                            <tr>
                                <th scope="col" class="product-remove">Action</th>
                                <th scope="col" class="product-thumbnail">Image</th>
                                <th scope="col" class="product-title">Product Name</th>
                                <th scope="col" class="product-price">Price</th>
                                <th scope="col" class="product-status">Stock Status</th>
                                <th scope="col" class="product-add-cart"></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="product in productItems.slice(0, 3)" :key="product.id">
                                <td class="product-remove">
                                    <a href="#" class="remove-wishlist"><i class="icon-73"></i></a>
                                </td>
                                <td class="product-thumbnail">
                                    <NuxtLink to="/shop/product-details">
                                        <img :src="'/images/shop/' + product.imgSrc"
                                            :alt="(product.title) + ' Thumbnail'" />
                                    </NuxtLink>
                                </td>
                                <td class="product-title">
                                    <NuxtLink to="/shop/product-details">{{ product.title }}</NuxtLink>
                                </td>
                                <td class="product-price" data-title="Price"><span class="currency-symbol">$</span>{{
                                    product.price }}</td>
                                <td class="product-status" data-title="Stock"> In Stock</td>
                                <td class="product-add-cart">
                                    <NuxtLink to="/shop/cart" class="edu-btn btn-medium">Add to Cart</NuxtLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';

import productItemsMixin from '../../mixins/productItemsMixin';

export default {
    mixins: [productItemsMixin],
    components: {
    HeaderOne,
    BreadCrumbTwo,
    FooterOne,
    ScrollToTop
},
    head() {
        return {
            title: 'Wishlist Page'
        }
    },
    
}
</script>