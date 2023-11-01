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
                                <button v-if="this.type == 'Electrónica'" class="nav-link" data-bs-toggle="pill"
                                    data-bs-target="#file" role="tab">Carga la
                                    entrada</button>
                                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#bank" role="tab">Datos
                                    bancarios</button>

                            </div>
                            <div class="tab-content" v-if="this.event">
                                <div class="tab-pane fade show active" id="undergraduate" role="tabpanel">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12">

                                            <div class="row row--30">
                                                <div class="col-lg-8 edu-blog-sidebar">
                                                    <div class="privacy-policy purchase-guide">
                                                        <div class="text-block text-center">
                                                            <img
                                                                src="../../../assets/images/compra-entradas/distribucion.png">
                                                        </div>

                                                        <div class="text-block">
                                                            <h4 class="title">{{ this.event.data.attributes.title }}</h4>
                                                            <p>{{ this.event.data.attributes.description }}</p>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="edu-blog-sidebar">
                                                        <div class="col-lg-12 order-lg-1 login-form-box">

                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <label>Sector</label>
                                                                        <input type="text" class="form-control"
                                                                            placeholder="sector" v-model="sector">
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <label>Categoria</label>
                                                                        <input type="text" class="form-control"
                                                                            placeholder="Categoria" v-model="category">
                                                                    </div>

                                                                </div>

                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <label>Fila</label>
                                                                        <input type="text" class="form-control"
                                                                            placeholder="Fila" v-model="row">
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="edu-blog-widget widget-tags">
                                                            <div class="inner">
                                                                <h4 class="widget-title">Tipo de entrada</h4>
                                                                <div class="content">
                                                                    <div class="tag-list">
                                                                        <a href="#" @click="handleLinkClick('En papel')">En
                                                                            papel</a>
                                                                        <a href="#"
                                                                            @click="handleLinkClick('Electrónica')">Electrónica</a>
                                                                        <a href="#"
                                                                            @click="handleLinkClick('Móvil')">Móvil</a>

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
                                <div class="tab-pane fade" id="graduate" role="tabpanel">
                                    <div class="row ">
                                        <div class="col-md-12 col-lg-12" style="padding: 100px;">
                                            <div class="col-lg-12 order-lg-1 col-pr--35 login-form-box">

                                                <div class="row">
                                                    <div class="col-12 mb--50">
                                                        <div class="form-group">
                                                            <label>¿Qué precio tiene la entrada originalmente?</label>
                                                            <input type="number" class="form-control"
                                                                placeholder="Precio de adquisición" v-model="startPrice">
                                                        </div>

                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <label>¿Cuanto quieres cobrar por la entrada?</label>
                                                            <input type="number" class="form-control"
                                                                placeholder="Precio de venta" v-model="newPrice">
                                                        </div>

                                                    </div>

                                                    <div class="col-12 text-center" style="margin-top:20px;">
                                                        <div class="form-group">
                                                            <h5>El precio de cada entrada será de {{ lastPrice() }}</h5>
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
                                                                        @change="handleFileUpload">
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
                                                                    placeholder="Nombre" v-model="this.user.holder"
                                                                    readonly>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="log-email">IBAN*</label>
                                                                <input type="text" name="log-email" id="log-email"
                                                                    placeholder="Iban" v-model="this.user.iban" readonly>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="reg-name">Tipo de cuenta*</label>
                                                                <input type="text" name="reg-name" id="reg-name"
                                                                    placeholder="Nombre" v-model="this.user.type_account"
                                                                    readonly>
                                                            </div>

                                                            <div class="form-group">
                                                                <button type="button" @click="saveTicket()"
                                                                    class="edu-btn btn-medium">Guardar <i
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
import axios from 'axios';

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
            type: '', // Variable para almacenar el valor seleccionado
            title: 'Comprar entrada',
            filterData: [],
            selectedCategory: 'all',
            row: '',
            sector: '',
            category: '',
            startPrice: 0,
            newPrice: 0,
            user: '',
            eventId: '',
            event: null,
            message: '',
            selectedFile: ''
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
        },
        handleLinkClick(value) {
            this.type = value; // Guarda el valor seleccionado en la variable
        },
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
            console.log(this.selectedFile)
        },
        lastPrice() {
            if (this.newPrice === '')
                return 0;
            return (this.newPrice + this.newPrice * 0.1).toFixed(2);
        },
        userData() {
            const userData = window.localStorage.getItem('userData');
            this.user = JSON.parse(userData);
        },
        getEvent() {
            const config = useRuntimeConfig();

            axios
                .get(`${config.public.apiBase}events/` + this.eventId, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                })
                .then((response) => {
                    console.log(response.data)
                    this.event = response.data;
                })
                .catch((error) => {
                    // Maneja los errores, por ejemplo, muestra un mensaje de error
                    console.error(error);
                });
        },
        async saveTicket() {
            const config = useRuntimeConfig();

            var formData = new FormData();
            formData.append('user', this.user);
            formData.append('Category', this.category);
            formData.append('Sector', this.sector);
            formData.append('Fila', this.row);
            formData.append('startPrice', this.startPrice);
            formData.append('newPrice', this.newPrice);
            formData.append('endPrice', this.lastPrice(this.newPrice));
            formData.append('evento', this.eventId);
            formData.append('type', this.type);
            //formData.append('ticket', this.selectedFile);
            console.log(formData)
            axios
                .post(`${config.public.apiBase}tickets`, formData, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((response) => {
                    console.log(response.data)
                    this.message = response.data;
                })
                .catch((error) => {
                    // Maneja los errores, por ejemplo, muestra un mensaje de error
                    console.error('Error al actualizar el usuario', error);
                });
        }
    },
    mounted() {
        this.filterData = this.items
        console.log(this.$route.params.id)
        this.userData();
        this.eventId = this.$route.params.id;
        this.getEvent();
    },

}
</script>