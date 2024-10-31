<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo v-if="this.$route.params.type === 'compra'" :pageTitle="$t('Events.title')" :title="$t('Events.events')" />
        <BreadCrumbTwo v-else :pageTitle="$t('Events.title_sell')" :title="$t('Events.events')" />

       
        <div class="edu-event-area event-area-1 section-gap-equal">
            <div class="container">
                <h2 v-if="this.$route.params.type === 'compra'">{{ $t('Events.second_title') }}</h2>
                <p v-if="this.$route.params.type === 'compra'">{{ $t('Events.paragraph_1') }}
                </p>
                <p v-if="this.$route.params.type === 'compra'">{{ $t('Events.paragraph_2') }}
                </p>
                <div class="breadcrumb-inner">
                    <div class="row">
                        <div class="col-sm-10">
                            <input v-model="data" :placeholder="$t('Home.search_events')" style="border-radius: 10px;">
                        </div>
                        <div class="col-sm-2">
                            <a href="#" @click="getEvents" class="edu-btn btn-large">{{ $t('Home.search') }}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <h2 class="text-center">{{ $t('Events.title_intro') }}</h2>

                <div class="row g-5">
                    <div class="col-lg-12 order-lg-1 col-pr--35" v-if="this.events.length > 0">
                        <div class="row g-5">
                            <div class="col-md-3 col-sm-4" data-aos-delay="150" data-aos="fade-up" data-aos-duration="400"
                                v-for="event in getItems" :key="event.id">
                                <EventOne :eventInfo="event" :type="'compra'" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 order-lg-1 col-pr--35" v-if="this.events.length == 0">
                        <div class="col-12 mt--50">
                            <div class="alert alert-info" role="alert">
                                {{ $t('thereisno') }}
                            </div>
                            <div class="offset-xl-2 col-lg-6">
                                <div class="contact-form form-style-2">
                                    <div class="section-title">
                                        <h4 class="title">{{ $t('ContactUs.textus') }}</h4>
                                    </div>
                                    <div v-if="showResult" class="col-12">
                                        <div class="alert alert-success" role="alert">
                                            {{ $t('thankscontact') }}
                                        </div>
                                    </div>
                                    <form class="rnt-contact-form rwt-dynamic-form">
                                        <div class="row row--10">
                                            <div class="form-group col-12">
                                                <input type="text" v-model="name" :placeholder="$t('Register.name')">
                                            </div>
                                            <div class="form-group col-12">
                                                <input type="email" v-model="email" placeholder="Email">
                                            </div>
                                            <div class="form-group col-12">
                                                <input type="tel" v-model="phone" :placeholder="$t('Register.phone')">
                                            </div>
                                            <div class="form-group col-12">
                                                <textarea v-model="message" cols="30" rows="4"
                                                    placeholder="Escribe tu mensaje"></textarea>
                                            </div>
                                            <div class="form-group col-12">
                                                <button class="rn-btn edu-btn btn-medium submit-btn" name="submit"
                                                    type="submit" :disabled="isLoading" @click="handleSubmit">
                                                    <span v-if="isLoading">
                                                        {{$t('ContactUs.loading')}}... <i class="fas fa-spinner fa-spin"></i>
                                                    </span>
                                                    <span v-else>
                                                        {{$t('Home.send')}}<i class="icon-4"></i>
                                                    </span>
                                                </button>

                                            </div>
                                        </div>
                                    </form>

                                    
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div v-if="getPaginateCount > 1">
                    <div class="edublink-vue-pagination">
                        <!--<pagination v-model="currentPage" :per-page="perPage" :records="eventItems.length"
                            @paginate="paginateClickCallback" :options="paginationOptions" />-->
                    </div>
                </div>
            </div>
        </div>

        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<script>
definePageMeta({
  title: 'Tu asiento te espera, ¡compra entradas de fútbol ya!',
  description: 'Compra entradas de fútbol y vive la emoción del juego en primera persona. ¡Encuentra tus asientos ideales y disfruta del estadio!'                
})
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
        EventSidebar
    },
    data() {
        return {
            currentPage: 1,
            perPage: 30,
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

            let query = `${config.public.apiBase}events?populate=*&${querySort}&filters[type][$isnull]=true`;

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
                    this.events = this.events.filter(event => event.attributes.type === this.$route.params.type)
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
            titleTemplate: 'Eventos',
            meta: (this.$route.params.type === 'compra') ? [
                {
                    hid: 'bbvPointickets',
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