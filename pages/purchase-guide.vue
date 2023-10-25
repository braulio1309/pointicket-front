<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />
        <section class="">
            <div class="container">
                <div class="edu-course-area course-area-3">
                    <div class="container">
                        <div class="isotope-wrapper" style="margin-top: 100px;">
                            <div class="isotop-button isotop-filter nav">
                                <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#undergraduate"
                                    role="tab">Tipo de entrada</button>
                                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#graduate" role="tab">Precio
                                    de venta</button>
                                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#file" role="tab">Carga la
                                    entrada</button>
                                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#bank" role="tab">Datos
                                    bancarios</button>

                            </div>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="undergraduate" role="tabpanel">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12">
                                            <div class="edu-gallery-area edu-section-gap">
                                                <div class="container">
                                                    <h4 class="text-center"> ¿Que entradas estas buscando?</h4>

                                                    <div class="isotope-wrapper">
                                                        <div class="isotop-button button-transparent isotop-filter">
                                                            <button v-for="(cat, index) in filterCategory" :key="index"
                                                                @click="filterHandler(cat)" class="filter-selector-item"
                                                                :class="{ 'is-checked': cat === selectedCategory }">
                                                                <span>{{ cat }}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row row--30">
                                                <div class="col-lg-8 edu-blog-sidebar">
                                                    <div class="privacy-policy purchase-guide">
                                                        <div class="text-block text-center">
                                                            <img src="../assets/images/compra-entradas/distribucion.png">
                                                        </div>

                                                        <div class="text-block">
                                                            <h4 class="title">Descripción del evento</h4>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                                                do eiusmod tempor
                                                                incididunt ut labore et dolore magna aliqua.<br>
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                sed do eiusmod tempor
                                                                incididunt ut labore et dolore magna aliqua</p>
                                                            <ul>
                                                                <li>Updated content on a regular basis</li>
                                                                <li>Secure & hassle-free payment</li>
                                                                <li>1-click checkout</li>
                                                                <li>Easy access & smart user dashboard</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4">
                                                    <PageSidebarOne />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="graduate" role="tabpanel">
                                    <div class="row ">
                                        <div class="col-md-12 col-lg-12" style="padding: 100px;">
                                            <div class="col-lg-12 order-lg-1 col-pr--35 login-form-box">

                                                <div class="row">
                                                    <div class="col-12 mb--50">
                                                        <div class="form-group">
                                                            <label>¿Qué precio tiene la entrada originalmente?</label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Precio de adquisición">
                                                        </div>

                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <label>¿Cuanto quieres cobrar por la entrada?</label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Precio de venta">
                                                        </div>

                                                    </div>

                                                    <div class="col-12 text-center" style="margin-top:20px;">
                                                        <div class="form-group">
                                                            <h5>El precio de cada entrada será de 231$</h5>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="file" role="tabpanel">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12">
                                            <div class="row ">
                                                <div class="col-md-12 col-lg-12">
                                                    <div class="col-lg-12 order-lg-1 col-pr--35 login-form-box">

                                                        <div class="row">
                                                            <div class="col-12 mb--50" style="padding: 100px;">
                                                                <div class="form-group">
                                                                    <label>Carga tu entrada</label>
                                                                    <input type="file" class="form-control"
                                                                        placeholder="Precio de adquisición">
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="bank" role="tabpanel">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12">
                                            <div class="row ">
                                                <div class="col-md-12 col-lg-12">
                                                    <div class="login-form-box registration-form">
                                                        <h3 class="title">Ingrese sus datos bancarios</h3>
                                                        <form>
                                                            <div class="form-group">
                                                                <label for="reg-name">Títular*</label>
                                                                <input type="text" name="reg-name" id="reg-name"
                                                                    placeholder="Nombre">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="log-email">IBAN*</label>
                                                                <input type="email" name="log-email" id="log-email"
                                                                    placeholder="Email">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="reg-name">Tipo de cuenta*</label>
                                                                <input type="text" name="reg-name" id="reg-name"
                                                                    placeholder="Nombre">
                                                            </div>

                                                            <div class="form-group">
                                                                <button type="button" class="edu-btn btn-medium">Guardar <i
                                                                        class="icon-4"></i></button>
                                                            </div>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="shape-group">
                        <li class="shape-1">
                            <img src="/images/others/map-shape-3.png" alt="Shape">
                        </li>
                        <li class="shape-2">
                            <img src="/images/others/map-shape-3.png" alt="Shape">
                        </li>
                    </ul>
                </div>
                <!--<div class="edu-gallery-area edu-section-gap">
                    <div class="container">
                        <h4 class="text-center"> ¿Que entradas estas buscando?</h4>

                        <div class="isotope-wrapper">
                            <div class="isotop-button button-transparent isotop-filter">
                                <button v-for="(cat, index) in filterCategory" :key="index" @click="filterHandler(cat)"
                                    class="filter-selector-item" :class="{ 'is-checked': cat === selectedCategory }">
                                    <span>{{ cat }}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row row--30">
                    <div class="col-lg-8 edu-blog-sidebar">
                        <div class="privacy-policy purchase-guide">
                            <div class="text-block text-center">
                                <img src="../assets/images/compra-entradas/distribucion.png">
                            </div>

                            <div class="text-block">
                                <h4 class="title">Descripción del evento</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.<br>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua</p>
                                <ul>
                                    <li>Updated content on a regular basis</li>
                                    <li>Secure & hassle-free payment</li>
                                    <li>1-click checkout</li>
                                    <li>Easy access & smart user dashboard</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <PageSidebarOne />
                    </div>
                </div>-->
            </div>
        </section>
        <Events />
        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<script>
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import PageSidebarOne from '~~/components/sidebar/PageSidebarOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';
import Events from "~~/components/Home/Events.vue";
import Auth from '~~/components/modals/Auth.vue';




export default {
    components: {
        HeaderOne,
        BreadCrumbTwo,
        PageSidebarOne,
        FooterOne,
        ScrollToTop,
        Events,
        Auth
    },
    data() {
        return {
            title: 'Purchase Guide',
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