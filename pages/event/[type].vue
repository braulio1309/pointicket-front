<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo pageTitle='Eventos' title='Eventos' />

        <div class="edu-event-area event-area-1 section-gap-equal">
            <div class="container">
                <div class="breadcrumb-inner">
                    <div class="row">
                        <div class="col-sm-10">
                            <input class="form-control" v-model="data" placeholder="Buscar eventos">
                        </div>
                        <div class="col-sm-2">
                            <a href="#" @click="getEvents" class="edu-btn btn-large">Buscar</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row g-5">
                    <div class="col-lg-3 order-lg-2">
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
                    </div>

                    <div class="col-lg-9 order-lg-1 col-pr--35" v-if="this.events">
                        <div class="row g-5">
                            <div class="col-4" data-aos-delay="150" data-aos="fade-up" data-aos-duration="400"
                                v-for="event in getItems" :key="event.id">
                                <EventOne :eventInfo="event" :type="this.$route.params.type" />
                            </div>
                        </div>
                    </div>
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
import eventMixin from '../../mixins/eventMixin';
import Pagination from 'v-pagination-3';
import axios from 'axios';
import qs from 'qs';


export default {
    mixins: [eventMixin],
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
            events: null,
            data: '',
            categories: '',
            isChecked: false
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
        getEvents() {
            const config = useRuntimeConfig();

            let query = `${config.public.apiBase}events/?populate=*`;

            if (this.data || this.data == '') {
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
            }
            if (window.localStorage.getItem('search')) {
                let search = qs.stringify({
                    filters: {
                        title: {
                            $contains: window.localStorage.getItem('search'),

                        },
                    },

                }, {
                    encodeValuesOnly: true, // prettify URL
                });
                window.localStorage.setItem('search', null);
                query += `&${search}`;
            }
            axios
                .get(`${query}`, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                })
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
        this.getCategories();
    },
    head() {
        return {
            title: 'Event Grid'
        }
    },

}
</script>