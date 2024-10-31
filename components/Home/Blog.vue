<template>
   <div class="edu-blog-area blog-area-1 edu-section-gap">
     <div class="section-title" :class="alignment" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
        <span class="pre-title" :class="preTitleClass" v-html="preTitle" v-if="preTitle"></span>
        <h4 class="text-center title">{{ $t('Home.best_selling_events') }}</h4>
        <span class="shape-line text-center" v-if="!disableMark"><i class="icon-19"></i></span>
        <p v-html="subTitle" v-if="subTitle"></p>
    </div>

    <div class="container">
        <div class="hero-banner bg-image bg-madrid mb--20" style="border-radius: 10px; height: 100px !important;">
            <div class="container">
                <div class="breadcrumb-inner">
                    <div class="edu-course-area course-area-1 edu-section-gap">
                        <div class="edu-section-gap">
                            <div class="container">
                                <div class="row g-5">
                                    <div class="col-lg-4 col-md-6 col-sm-12" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800">
                                        <div class="pricing-table">
                                            <div class="pricing-header">
                                                <h4 class="title">Classic</h4>
                                                <div class="price-wrap">
                                                    <span class="amount">45.00€</span>
                                                </div>
                                            </div>
                                            <div class="pricing-body">
                                                <ul class="list-item">
                                                    <li><i class="icon-20"></i>{{ $t('Home.museum') }}</li>
                                                    <li><i class="icon-20"></i>{{ $t('Home.panoramic_view') }}</li>
                                                    <li><i class="icon-20"></i>{{ $t('Home.museum') }}</li>
                                                </ul>
                                            </div>
                                            <div class="pricing-btn">
                                                <a class="edu-btn btn-border btn-medium" href="/tickets/comprar/comprar-tour-santiago-bernabeu" style="color: white; text-decoration: none; border: none">{{ $t('Home.buy') }}<i class="icon-east"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                                        <div class="pricing-table">
                                            <div class="pricing-header">
                                                <h4 class="title">{{ $t('Home.flexible_hour') }}</h4>
                                                <div class="price-wrap">
                                                    <span class="amount">50.00€</span>
                                                </div>
                                            </div>
                                            <div class="pricing-body">
                                                <ul class="list-item">
                                                    <li><i class="icon-20"></i>{{ $t('Home.classic') }}</li>
                                                    <li><i class="icon-20"></i>{{ $t('Home.open_hour') }}</li>
                                                    <li><i class="icon-20"></i>{{ $t('Home.route') }}</li>
                                                </ul>
                                            </div>
                                            <div class="pricing-btn">
                                                <a class="edu-btn btn-border btn-medium" href="/tickets/comprar/comprar-tour-santiago-bernabeu" style="color: white; text-decoration: none; border: none">{{ $t('Home.buy') }}<i class="icon-east"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6 col-sm-12" data-aos-delay="200" data-aos="fade-up" data-aos-duration="800">
                                        <div class="pricing-table">
                                            <div class="pricing-header">
                                                <h4 class="title">Premium</h4>
                                                <div class="price-wrap">
                                                    <span class="amount">65.00€</span>
                                                </div>
                                            </div>
                                            <div class="pricing-body">
                                                <ul class="list-item">
                                                    <li><i class="icon-20"></i>{{ $t('Home.classic') }}</li>
                                                    <li><i class="icon-20"></i>{{ $t('Home.open_hour') }}</li>
                                                    <li><i class="icon-20"></i>{{ $t('Home.route') }}</li>
                                                </ul>
                                            </div>
                                            <div class="pricing-btn">
                                                <a class="edu-btn btn-border btn-medium" href="/tickets/comprar/comprar-tour-santiago-bernabeu" style="color: white; text-decoration: none; border: none">{{ $t('Home.buy') }}<i class="icon-east"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div id='blog' class="container">
        <div class="row g-5">
            <div class="col-lg-6 col-md-6 col-12" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800" v-for="blog in blogItems.slice(0, 2)" :key="blog.id">
                <BlogPostOne :blogInfo="blog" />
            </div>
        </div>
    </div>
    <ul class="shape-group">
        <MouseMove addClassName="shape-1" dataDepth="-1.4" imgSrc="/images/about/shape-02.png" />
        <MouseMove addClassName="shape-2" dataDepth="2.5" />
        <MouseMove addClassName="shape-3" dataDepth="-2.3" imgSrc="/images/counterup/shape-05.png" />
    </ul>
</div>


</template>
<style>
@media (max-width: 768px) {
    .hero-banner {
        height: auto !important;
        border-radius: 0;
        margin-top: 100%;
    }

    .pricing-table {
        margin-bottom: 20px;
    }

    .pricing-header h6 {
        font-size: 1.2rem;
    }

    .price-wrap .amount {
        font-size: 1.5rem;
    }

    .pricing-body ul li {
        font-size: 1rem;
    }

    .edu-btn {
        padding: 10px 20px;
        font-size: 1rem;
    }
    #blog {
        margin-top: 100%;
    }
}
</style>

<script>
import blogItemsMixin from "../../mixins/blogItemsMixin";
import MouseMove from '../animation/MouseMove.vue';
import BlogPostOne from '../blog/BlogPostOne.vue';
import SectionTitle from '../common/SectionTitle.vue';


export default {
    mixins: [blogItemsMixin],
    components: {
        BlogPostOne,
        SectionTitle,
        MouseMove
    },
    data(){
        return {
            blogItems: [
                
                {
                    id: 2,
                    title: "Tour Santiago Bernabeu",
                    category: this.$t('sports'),
                    imgSrc: "Bernabeu.jpg",
                    thumbSrc: "small-post-02.jpg",
                    url: '/tour-santiago-bernabeu',
                    alt: "blog image",
                    date: "Oct 15, 2022",
                    dateOnly: "15",
                    monthOnly: "Oct",
                    comment: "Com 05",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    video: [
                        {
                            src: "https://www.youtube.com/watch?v=PICj5tr9hcc"
                        }
                    ],
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 3,
                    title: this.$t('Home.basket_game'),
                    category: this.$t('sports'),
                    imgSrc: "Tabares.jpg",
                    url: '/comprar-entradas-de-baloncesto',
                    thumbSrc: "small-post-03.jpg",
                    alt: "blog image",
                    date: "Nov 11, 2022",
                    dateOnly: "11",
                    monthOnly: "Nov",
                    comment: "Com 04",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    slider: [
                        "blog-06.jpg",
                        "blog-08.jpg",
                        "blog-09.jpg"
                    ],
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 4,
                    title: "How to Become Computer Working Days Software Engineer?",
                    category: "LECTURE",
                    imgSrc: "blog-04.jpg",
                    thumbSrc: "small-post-04.jpg",
                    alt: "blog image",
                    date: "Oct 21, 2022",
                    dateOnly: "21",
                    monthOnly: "Oct",
                    comment: "Com 17",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore ad dolore magna aliqua enim mini veniam quis nostrud exercitation. ullamco laboris, dolore mini idunt veniam nostrud ullamco",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 5,
                    title: "4 Learning Management System Design Tips For Better eLearning",
                    category: "ONLINE",
                    imgSrc: "blog-05.jpg",
                    thumbSrc: "small-post-05.jpg",
                    alt: "blog image",
                    date: "Oct 05, 2022",
                    dateOnly: "05",
                    monthOnly: "Oct",
                    comment: "Com 08",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 6,
                    title: "Ten Benefits Of Rentals That May Change Your Perspective",
                    category: "BUSINESS",
                    imgSrc: "blog-06.jpg",
                    thumbSrc: "small-post-06.jpg",
                    alt: "blog image",
                    date: "Jun 25, 2022",
                    dateOnly: "25",
                    monthOnly: "June",
                    comment: "Com 07",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua. mini idunt veniam nostrud.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    video: [
                        {
                            src: "https://www.youtube.com/watch?v=KI4quRXzdDg"
                        }
                    ],
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 7,
                    title: "Learn How to Study Online From Your Home",
                    category: "ONLINE",
                    imgSrc: "blog-07.jpg",
                    thumbSrc: "small-post-07.jpg",
                    alt: "blog image",
                    date: "Oct 16, 2022",
                    dateOnly: "16",
                    monthOnly: "Oct",
                    comment: "Com 15",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 8,
                    title: "Easily Create & Sell Courses Online",
                    category: "BUSINESS",
                    imgSrc: "blog-08.jpg",
                    thumbSrc: "small-post-08.jpg",
                    alt: "blog image",
                    date: "Oct 19, 2022",
                    dateOnly: "19",
                    monthOnly: "Oct",
                    comment: "Com 03",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore ad dolore magna aliqua enim mini veniam quis nostrud exercitation.ullamco laboris.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    slider: [
                        "blog-03.jpg",
                        "blog-04.jpg",
                        "blog-05.jpg"
                    ],
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 9,
                    title: "Brave for Others, Brave for Self",
                    category: "EDUCATION",
                    imgSrc: "blog-09.jpg",
                    thumbSrc: "small-post-09.jpg",
                    alt: "blog image",
                    date: "Dec 18, 2022",
                    dateOnly: "18",
                    monthOnly: "Dec",
                    comment: "Com 12",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 10,
                    title: "Ten Benefits Of Rentals That May Change Your Perspective",
                    category: "ONLINE",
                    imgSrc: "blog-10.jpg",
                    thumbSrc: "small-post-10.jpg",
                    alt: "blog image",
                    date: "Oct 10, 2022",
                    dateOnly: "10",
                    monthOnly: "Oct",
                    comment: "Com 09",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 11,
                    title: "Fresh Inspiration For March And A Smashing Winner 2021",
                    category: "LECTURE",
                    imgSrc: "blog-11.jpg",
                    thumbSrc: "small-post-11.jpg",
                    alt: "blog image",
                    date: "Oct 15, 2022",
                    dateOnly: "15",
                    monthOnly: "Oct",
                    comment: "Com 05",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 12,
                    title: "Learn How to Study Online From Your Home",
                    category: "BUSINESS",
                    imgSrc: "blog-12.jpg",
                    thumbSrc: "small-post-12.jpg",
                    alt: "blog image",
                    date: "Nov 11, 2022",
                    dateOnly: "11",
                    monthOnly: "Nov",
                    comment: "Com 04",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                }
            ]
        }
    },
    watch: {
        '$i18n.locale'(newLocale, oldLocale) {
            this.handleLanguageChange(newLocale, oldLocale);
        }
    },
    methods: {
        handleLanguageChange(newLocale, oldLocale) {
            this.blogItems =  [
                
                {
                    id: 2,
                    title: "Tour Santiago Bernabeu",
                    category: this.$t('sports'),
                    imgSrc: "Bernabeu.jpg",
                    thumbSrc: "small-post-02.jpg",
                    url: '/tour-santiago-bernabeu',
                    alt: "blog image",
                    date: "Oct 15, 2022",
                    dateOnly: "15",
                    monthOnly: "Oct",
                    comment: "Com 05",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    video: [
                        {
                            src: "https://www.youtube.com/watch?v=PICj5tr9hcc"
                        }
                    ],
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 3,
                    title: this.$t('Home.basket_game'),
                    category: this.$t('sports'),
                    imgSrc: "Tabares.jpg",
                    url: '/comprar-entradas-de-baloncesto',
                    thumbSrc: "small-post-03.jpg",
                    alt: "blog image",
                    date: "Nov 11, 2022",
                    dateOnly: "11",
                    monthOnly: "Nov",
                    comment: "Com 04",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    slider: [
                        "blog-06.jpg",
                        "blog-08.jpg",
                        "blog-09.jpg"
                    ],
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 4,
                    title: "How to Become Computer Working Days Software Engineer?",
                    category: "LECTURE",
                    imgSrc: "blog-04.jpg",
                    thumbSrc: "small-post-04.jpg",
                    alt: "blog image",
                    date: "Oct 21, 2022",
                    dateOnly: "21",
                    monthOnly: "Oct",
                    comment: "Com 17",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore ad dolore magna aliqua enim mini veniam quis nostrud exercitation. ullamco laboris, dolore mini idunt veniam nostrud ullamco",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 5,
                    title: "4 Learning Management System Design Tips For Better eLearning",
                    category: "ONLINE",
                    imgSrc: "blog-05.jpg",
                    thumbSrc: "small-post-05.jpg",
                    alt: "blog image",
                    date: "Oct 05, 2022",
                    dateOnly: "05",
                    monthOnly: "Oct",
                    comment: "Com 08",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 6,
                    title: "Ten Benefits Of Rentals That May Change Your Perspective",
                    category: "BUSINESS",
                    imgSrc: "blog-06.jpg",
                    thumbSrc: "small-post-06.jpg",
                    alt: "blog image",
                    date: "Jun 25, 2022",
                    dateOnly: "25",
                    monthOnly: "June",
                    comment: "Com 07",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua. mini idunt veniam nostrud.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    video: [
                        {
                            src: "https://www.youtube.com/watch?v=KI4quRXzdDg"
                        }
                    ],
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 7,
                    title: "Learn How to Study Online From Your Home",
                    category: "ONLINE",
                    imgSrc: "blog-07.jpg",
                    thumbSrc: "small-post-07.jpg",
                    alt: "blog image",
                    date: "Oct 16, 2022",
                    dateOnly: "16",
                    monthOnly: "Oct",
                    comment: "Com 15",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 8,
                    title: "Easily Create & Sell Courses Online",
                    category: "BUSINESS",
                    imgSrc: "blog-08.jpg",
                    thumbSrc: "small-post-08.jpg",
                    alt: "blog image",
                    date: "Oct 19, 2022",
                    dateOnly: "19",
                    monthOnly: "Oct",
                    comment: "Com 03",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore ad dolore magna aliqua enim mini veniam quis nostrud exercitation.ullamco laboris.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    slider: [
                        "blog-03.jpg",
                        "blog-04.jpg",
                        "blog-05.jpg"
                    ],
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 9,
                    title: "Brave for Others, Brave for Self",
                    category: "EDUCATION",
                    imgSrc: "blog-09.jpg",
                    thumbSrc: "small-post-09.jpg",
                    alt: "blog image",
                    date: "Dec 18, 2022",
                    dateOnly: "18",
                    monthOnly: "Dec",
                    comment: "Com 12",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 10,
                    title: "Ten Benefits Of Rentals That May Change Your Perspective",
                    category: "ONLINE",
                    imgSrc: "blog-10.jpg",
                    thumbSrc: "small-post-10.jpg",
                    alt: "blog image",
                    date: "Oct 10, 2022",
                    dateOnly: "10",
                    monthOnly: "Oct",
                    comment: "Com 09",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 11,
                    title: "Fresh Inspiration For March And A Smashing Winner 2021",
                    category: "LECTURE",
                    imgSrc: "blog-11.jpg",
                    thumbSrc: "small-post-11.jpg",
                    alt: "blog image",
                    date: "Oct 15, 2022",
                    dateOnly: "15",
                    monthOnly: "Oct",
                    comment: "Com 05",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                },
                {
                    id: 12,
                    title: "Learn How to Study Online From Your Home",
                    category: "BUSINESS",
                    imgSrc: "blog-12.jpg",
                    thumbSrc: "small-post-12.jpg",
                    alt: "blog image",
                    date: "Nov 11, 2022",
                    dateOnly: "11",
                    monthOnly: "Nov",
                    comment: "Com 04",
                    author: "Edward",
                    excerpt: "Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.",
                    excerpt2: "Lorem ipsum dolor sit amet consec tetur adipisicing sed eiusmod tempor incid idunt labore.",
                    excerpt3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip.",
                    excerpt4: "Lorem ipsum dolor sit amet cons tetur adip isicing sed eiusmod."
                }
            ]
        },
        
    }

}
</script>