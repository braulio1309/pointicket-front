<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo pageTitle='Product Page' title='Natural Science Project' />

        <div class="product-details-area gap-top-equal">
            <div class="container">
                <div class="row g-5 row--25">
                    <div class="col-lg-6">
                        <div class="thumbnail">
                            <img src="/images/shop/product-13.jpg" alt="Product Images">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="content">
                            <h3 class="title">Natural Science Project</h3>
                            <div class="product-rating">
                                <div class="rating">
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                    <i class="icon-23"></i>
                                </div>
                                <span class="rating-count">(3)</span>
                            </div>
                            <div class="price">$70.30</div>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum. sed ut perspic atis unde omnis iste natus.</p>

                            <div class="product-action">
                                <div class="edu-quantity-btn edublink-vue-product-btn">
                                    <div class="pro-qty">
                                        <button @click="decreaseQuantity()" class="dec qtybtn">-</button>
                                        <input type="text" :value="singleQuantity" readonly>
                                        <button @click="increaseQuantity()" class="inc qtybtn">+</button>
                                    </div>
                                </div>

                                <div class="add-to-cart-btn">
                                    <NuxtLink to="/shop/cart" class="edu-btn btn-medium">Add To Cart</NuxtLink>
                                    <NuxtLink to="/shop/wishlist" class="wishlist-btn"><i class="icon-22"></i></NuxtLink>
                                </div>
                            </div>

                            <ul class="product-feature">
                                <li><span>SKU:</span> MB-007</li>
                                <li><span>Categories: </span> <a href="#">Book</a> </li>
                                <li><span>Tag: </span> <a href="#">Business</a> <a href="#">Administration</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="edu-product-description gap-bottom-equal">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <ul class="product-description-nav nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="desc-tab" data-bs-toggle="tab" data-bs-target="#desc"
                                    type="button" role="tab" aria-controls="desc" aria-selected="true">Description</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review"
                                    type="button" role="tab" aria-controls="review" aria-selected="false">Reviews
                                    (1)</button>
                            </li>
                        </ul>

                        <div class="tab-content" id="myTabContent">
                            <div class="product-description-content tab-pane fade show active" id="desc" role="tabpanel"
                                aria-labelledby="desc-tab">
                                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.enim ad minim veniam quis nostrud exercita mco laboris nisi ut aliquip ex ea
                                    commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur consequuntur magni dolores.</p>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                            </div>
                            <div class="product-description-content tab-pane fade" id="review" role="tabpanel"
                                aria-labelledby="review-tab">
                                <div class="comment-area">
                                    <h5 class="heading-title">1 Review for Natural Science Project</h5>
                                    <div class="comment-list-wrapper">
                                        <div class="comment">
                                            <div class="thumbnail">
                                                <img src="/images/blog/comment-03.jpg" alt="Comment Images">
                                            </div>
                                            <div class="comment-content">
                                                <h6 class="title">Edward Norton - <span class="date">Oct 10, 2021</span>
                                                </h6>
                                                <div class="rating">
                                                    <i class="icon-23"></i>
                                                    <i class="icon-23"></i>
                                                    <i class="icon-23"></i>
                                                    <i class="icon-23"></i>
                                                    <i class="icon-23"></i>
                                                </div>
                                                <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia
                                                    deserunt mollit anim est laborum. Sed perspiciatis unde omnis natus
                                                    error sit voluptatem accusa dolore mque laudant totam rem aperiam eaque
                                                    ipsa quae ab illo inventore veritatis et quasi arch tecto beatae vitae
                                                    dicta.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="comment-form-area">
                                    <h5 class="heading-title">Be First to Add a Review</h5>
                                    <form class="comment-form">
                                        <div class="review-rating">
                                            <h6 class="title">Your Rating</h6>
                                            <div class="rating">
                                                <i class="icon-star-empty"></i>
                                                <i class="icon-star-empty"></i>
                                                <i class="icon-star-empty"></i>
                                                <i class="icon-star-empty"></i>
                                                <i class="icon-star-empty"></i>
                                            </div>
                                        </div>
                                        <div class="row g-5">
                                            <div class="form-group col-12">
                                                <label>Your Review</label>
                                                <textarea name="comm-message" id="comm-message" cols="30"
                                                    rows="5"></textarea>
                                            </div>
                                            <div class="form-group col-lg-6">
                                                <label>Your Name</label>
                                                <input type="text" name="comm-name" id="comm-name">
                                            </div>
                                            <div class="form-group col-lg-6">
                                                <label>Your Email</label>
                                                <input type="email" name="comm-email" id="comm-email">
                                            </div>
                                            <div class="form-group col-12">
                                                <div class="edu-form-check">
                                                    <input type="checkbox" id="save-info">
                                                    <label for="save-info">Save my name, email, and website in this browser
                                                        for the next time I comment.</label>
                                                </div>
                                            </div>
                                            <div class="form-group col-12">
                                                <button type="submit" class="edu-btn submit-btn">Submit Your Review <i
                                                        class="icon-4"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<script>
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';


export default {
    components: {
    HeaderOne,
    BreadCrumbTwo,
    FooterOne,
    ScrollToTop
},
    data() {
        return {
            singleQuantity: 1
        }
    },
    methods: {
        increaseQuantity() {
            this.singleQuantity++
        },
        decreaseQuantity() {
            if (this.singleQuantity !== 0) this.singleQuantity--
        }
    },
    head() {
        return {
            title: 'Natural Science Project'
        }
    },
    
}
</script>