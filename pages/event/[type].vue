<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo pageTitle='Eventos' title='Eventos' />

        <div class="edu-event-area event-area-1 section-gap-equal">
            <div class="container">
                <div class="breadcrumb-inner">
                    <div class="row">
                        <div class="col-sm-10">
                            <input v-model="data" placeholder="Buscar eventos" style="border-radius: 10px;">
                        </div>
                        <div class="col-sm-2">
                            <a href="#" @click="getEvents" class="edu-btn btn-large">Buscar</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row g-5">
                    <div class="col-lg-12 order-lg-1 col-pr--35" v-if="this.events.length > 0">
                        <div class="row g-5">
                            <div class="col-md-3 col-sm-4" data-aos-delay="150" data-aos="fade-up" data-aos-duration="400"
                                v-for="event in getItems" :key="event.id">
                                <EventOne :eventInfo="event" :type="this.$route.params.type" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 order-lg-1 col-pr--35" v-if="this.events.length == 0">
                        <div class="col-12 mt--50">
                            <div class="alert alert-info" role="alert">
                                No se ha encontrado su evento buscado, puede escribirnos para sugerir agregarlo en los
                                proximos días
                            </div>
                            <div class="offset-xl-2 col-lg-6">
                                <div class="contact-form form-style-2">
                                    <div class="section-title">
                                        <h4 class="title">Escríbenos</h4>
                                    </div>
                                    <div v-if="showResult" class="col-12">
                                        <div class="alert alert-success" role="alert">
                                            ¡Gracias por contactarnos! Estaremos agregando proximamente este evento
                                        </div>
                                    </div>
                                    <form class="rnt-contact-form rwt-dynamic-form">
                                        <div class="row row--10">
                                            <div class="form-group col-12">
                                                <input type="text" v-model="name" placeholder="Nombre">
                                            </div>
                                            <div class="form-group col-12">
                                                <input type="email" v-model="email" placeholder="Email">
                                            </div>
                                            <div class="form-group col-12">
                                                <input type="tel" v-model="phone" placeholder="Telefono">
                                            </div>
                                            <div class="form-group col-12">
                                                <textarea v-model="message" cols="30" rows="4"
                                                    placeholder="Escribe tu mensaje"></textarea>
                                            </div>
                                            <div class="form-group col-12">
                                                <button class="rn-btn edu-btn btn-medium submit-btn" name="submit"
                                                    type="submit" :disabled="isLoading" @click="handleSubmit">
                                                    <span v-if="isLoading">
                                                        Cargando... <i class="fas fa-spinner fa-spin"></i>
                                                    </span>
                                                    <span v-else>
                                                        Enviar<i class="icon-4"></i>
                                                    </span>
                                                </button>

                                            </div>
                                        </div>
                                    </form>

                                    <ul class="shape-group">
                                        <MouseMove addClassName="shape-1" dataDepth="1"
                                            imgSrc="/images/about/shape-13.png" />
                                        <MouseMove addClassName="shape-2" dataDepth="-1"
                                            imgSrc="/images/counterup/shape-02.png" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!---<div class="col-lg-3 order-lg-2">
                        <div class="course-sidebar-2">
                            <div class="edu-course-widget widget-category">
                                <div class="inner">
                                    <h5 class="widget-title">Categorías</h5>
                                    <div class="content">
                                        <div class="edu-form-check" v-for="category in this.categories">
                                            <input type="checkbox" :id="'cat-check-'+category.id" v-model="category.isChecked">
                                            <label :for="'cat-check-'+category.id">{{ category.attributes.name }}<span>({{
                                                category.attributes.events.data.length }})</span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="edu-course-widget widget-date-filter">
                                <div class="inner">
                                    <h5 class="widget-title">Fecha</h5>
                                    <div class="content">
                                        <div class="edu-form-check">
                                            <input type="checkbox" id="date-check1">
                                            <label for="date-check1">Cualquier día</label>
                                        </div>
                                        <div class="edu-form-check">
                                            <input type="checkbox" id="date-check2" v-model="today">
                                            <label for="date-check2">Hoy</label>
                                        </div>
                                        <div class="edu-form-check">
                                            <input type="checkbox" id="date-check3" v-model="tomorrow">
                                            <label for="date-check3">Mañana</label>
                                        </div>
                                        <div class="edu-form-check">
                                            <input type="checkbox" id="date-check4" v-model="week">
                                            <label for="date-check4">Esta semana</label>
                                        </div>
                                        <div class="edu-form-check">
                                            <input type="checkbox" id="date-check5" v-model="mounth">
                                            <label for="date-check5">Este mes</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="edu-course-widget widget-cities">
                                <div class="inner">
                                    <h5 class="widget-title">Ciudades</h5>
                                    <div class="content">
                                        <div class="edu-form-check">
                                            <input type="checkbox" id="city-check1">
                                            <label for="city-check1">Cualquiera</label>
                                        </div>
                                        <div class="edu-form-check">
                                            <input type="checkbox" id="city-check2">
                                            <label for="city-check2">Madrid</label>
                                        </div>
                                        <div class="edu-form-check">
                                            <input type="checkbox" id="city-check3">
                                            <label for="city-check3">Barcelona</label>
                                        </div>
                                        <div class="edu-form-check">
                                            <input type="checkbox" id="city-check4">
                                            <label for="city-check4">Valencia</label>
                                        </div>
                                        <div class="edu-form-check">
                                            <input type="checkbox" id="city-check5">
                                            <label for="city-check5">Sevilla</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>-->


                </div>

                <div v-if="getPaginateCount > 1">
                    <div class="edublink-vue-pagination">
                        <pagination v-model="currentPage" :per-page="perPage" :records="eventItems.length"
                            @paginate="paginateClickCallback" :options="paginationOptions" />
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
import EventOne from '~~/components/event/EventOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';
import EventSidebar from '~~/components/sidebar/EventSidebar.vue';
import Pagination from 'v-pagination-3';
import axios from 'axios';
import qs from 'qs';

export default {
    components: {
        HeaderOne,
        BreadCrumbTwo,
        EventOne,
        FooterOne,
        ScrollToTop,
        Pagination,
        EventSidebar
    },
    data() {
        return {
            currentPage: 1,
            perPage: 9,
            paginationOptions: {
                texts: {
                    nextPage: '',
                    prevPage: ''
                }
            },
            events: [],
            data: '',
            categories: '',
            isChecked: false,
            resultText: '',
            showResult: false,
            isLoading: false,
            message: '',
            name: '',
            phone: '',
            email: ''
        }
    },
    computed: {
        getItems() {
            let start = (this.currentPage - 1) * this.perPage;
            let end = this.currentPage * this.perPage;
            if (this.events) {
                return this.events.slice(start, end);
            }
            return [];
        },
        getPaginateCount() {
            if (this.events)
                return Math.ceil(this.events.length / this.perPage);

            return 0;
        }
    },
    methods: {
        paginateClickCallback(page) {
            this.currentPage = Number(page);
        },
        handleSubmit() {
            this.isLoading = true;
            this.showResult = false;

            const config = useRuntimeConfig();

            let data = {
                message: this.message,
                name: this.name,
                phone: this.phone,
                email: this.email,
            };
            axios
                .post(`${config.public.apiBase}contacts`, { data })
                .then((response) => {
                    console.log(response.data)
                    this.showResult = true;
                    this.isLoading = false;

                })
                .catch((error) => {
                    // Maneja los errores, por ejemplo, muestra un mensaje de error
                    console.error('Error al actualizar el usuario', error);
                });
        },
        getEvents() {
            const config = useRuntimeConfig();
            const querySort = qs.stringify({
                sort: ['endDate:asc'], 
            }, {
                encodeValuesOnly: true, // prettify URL
            });
            let query = `${config.public.apiBase}events/?populate=*&${querySort}`;

            if (window.localStorage.getItem('search') != '') {
                let search = qs.stringify({
                    filters: {
                        title: {
                            $contains: window.localStorage.getItem('search'),

                        },
                    },

                }, {
                    encodeValuesOnly: true, // prettify URL
                });
                window.localStorage.setItem('search', '');
                query += `&${search}`;
            }
            if (this.data != '') {
                let search = qs.stringify({
                    filters: {
                        title: {
                            $contains: this.data,

                        },
                    },

                }, {
                    encodeValuesOnly: true, // prettify URL
                });
                window.localStorage.setItem('search', '');
                query += `&${search}`;
            }
            axios
                .get(`${query}`)
                .then((response) => {
                    this.events = response.data.data;
                })
                .catch((error) => {
                    console.error('Error al buscar al evento', error);
                });
        },
        handleCheckboxChange(category) {
            // Esta función se llama cuando se cambia un checkbox
            if (category.isChecked) {
                console.log(`La categoría "${category.attributes.name}" ha sido marcada.`);
                // Realiza cualquier acción que desees cuando se marca la categoría
            } else {
                console.log(`La categoría "${category.attributes.name}" ha sido desmarcada.`);
                // Realiza cualquier acción que desees cuando se desmarca la categoría
            }
        },
        getCategories() {
            const config = useRuntimeConfig();

            let query = `${config.public.apiBase}categories/?populate=*`;

            /*if(this.data || this.data == '') {
                let search = qs.stringify({
                    filters: {
                        title: {
                            $contains: this.data,

                        },
                    },

                }, {
                    encodeValuesOnly: true, // prettify URL
                });
                window.localStorage.setItem('search', null);
                query += `&${search}`;
            }*/

            axios
                .get(`${query}`, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                })
                .then((response) => {
                    this.categories = response.data.data;
                    this.categories.forEach(category => {
                        category.isChecked = false;
                    });
                    console.log(this.categories);
                })
                .catch((error) => {
                    console.error('Error al buscar al evento', error);
                });
        },
    },
    mounted() {
        this.getEvents();
    },
    head() {
        return {
            title: 'sdaasd',
            meta: (this.$route.params.type === 'compra') ? [
                {
                    hid: 'Compra entradas para tus eventos favoritos | Pointickets',
                    name: 'Compra entradas para tus eventos favoritos | Pointickets',
                    content: 'Compra y vende entradas de futbol para los mejores partidos en el Bernabéu, entradas de conciertos, festivales, teatro y otros eventos en Pointickets.'
                }
            ] : [
                {
                    hid: 'Vender entradas | Pointickets',
                    name: 'Vender entradas | Pointickets',
                    content: 'Venta de entradas para tus eventos deportivos favoritos. Encuentra compradores rápidamente y obtén el mejor precio por tus entradas.'
                }
            ]
        }
    }

}
</script>