<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />
        <section class="">
            <div class="container">
                <div class="edu-course-area course-area-3">
                    <div class="container" v-if="event">
                        <div class="isotope-wrapper" style="margin-top: 100px;">
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
                                                <div class="col-lg-6 edu-blog-sidebar">
                                                    <div class="privacy-policy purchase-guide">
                                                        <div class="text-block text-center">
                                                            <img
                                                                src="../../../assets/images/compra-entradas/distribucion.png">
                                                        </div>

                                                        <div class="text-block">
                                                            <h4 class="title">{{ event.data.attributes.title }}</h4>
                                                            <p>{{ event.data.attributes.description }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="edu-blog-sidebar">
                                                        <div class="col-lg-12 order-lg-1 col-pr--35">
                                                            <div v-if="getItems.length > 0" class="row" v-for="event in getItems"
                                                                    :key="event.id">
                                                                <div class="col-12" v-if="!event.attributes.compra.data" >
                                                                    <div  class="edu-event-list event-list-2">
                                                                        <div class="">
                                                                            <div class="content">
                                                                                <div class="row">
                                                                                    <div class="col-sm-6">
                                                                                        <ul class="event-meta">
                                                                                            <li>{{
                                                                                                formatDate(event.attributes.createdAt)
                                                                                            }}
                                                                                            </li>
                                                                                        </ul>
                                                                                        <h6 class="title">
                                                                                            <NuxtLink
                                                                                                :to="'/shop/checkout/' + event.id">
                                                                                                {{
                                                                                                    event.attributes.seat }}
                                                                                                Entradas - {{
                                                                                                    event.attributes.Category.slice(0, 5) }}
                                                                                            </NuxtLink>
                                                                                        </h6>
                                                                                        <h7 class="title">
                                                                                            <NuxtLink
                                                                                                :to="'/shop/checkout/' + event.id">
                                                                                                €{{
                                                                                                    event.attributes.endPrice }}
                                                                                            </NuxtLink>
                                                                                        </h7>
                                                                                    </div>
                                                                                    <div class="col-sm-6">
                                                                                        <div class="read-more-btn">
                                                                                            <NuxtLink style="color: white;"
                                                                                                id="btn"
                                                                                                class="edu-btn btn-medium"
                                                                                                :to="'/shop/checkout/' + event.id">
                                                                                                Comprar <i
                                                                                                    class="icon-4"></i>
                                                                                            </NuxtLink>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div  v-if="getItems.length === 0" class="alert alert-info">
                                                                No hay entradas disponibles
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

<style lang="scss">
.course-area-3 {
    .isotop-button {
        button {

            &:hover,
            &.is-checked {
                background-color: var(--color-secondary);
                color: var(--color-white);
            }

            &.active:after {
                bottom: -10px;
                visibility: visible;
                opacity: 1;
            }
        }
    }

    #edu-btn:hover {
        color: black !important;
    }
}
</style>

<script>
definePageMeta({
  title: 'Compra entradas del Real Madrid en el Bernabéu | Pointickets',
  description: 'Compra y vende tus entradas para los mejores partidos de fútbol en el Bernabéu con Pointickets, la plataforma líder en venta de entradas deportivas. '                
})
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import PageSidebarOne from '~~/components/sidebar/PageSidebarOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';
import Events from "~~/components/Home/Events.vue";
import Auth from '~~/components/modals/Auth.vue';
import axios from 'axios';
import qs from 'qs';

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
            title: 'Vender Entradas',
            filterData: [],
            selectedCategory: 'Todas',
            event: null,
            eventId: null,
            fullTickets: [],
            items: [
                {
                    thumb: '/images/gallery/gallery-01.jpg',
                    src: '/images/gallery/gallery-01.jpg',
                    category: ['1 entrada']
                },
                {
                    thumb: '/images/gallery/gallery-02.jpg',
                    src: '/images/gallery/gallery-02.jpg',
                    category: ['2 entradas']
                },
                {
                    thumb: '/images/gallery/gallery-03.jpg',
                    src: '/images/gallery/gallery-03.jpg',
                    category: ['3 entradas']
                },
                {
                    thumb: '/images/gallery/gallery-04.jpg',
                    src: '/images/gallery/gallery-04.jpg',
                    category: ['4 entradas']
                },

            ],
            eventItems: [],
            currentPage: 1,
            perPage: 9,
            paginationOptions: {
                texts: {
                    nextPage: '',
                    prevPage: '',
                }
            }
        }
    },
    computed: {
        filterCategory() {
            return ['Todas', ...new Set(this.items.map((elem) => elem.category[0]).flat())]
        },
        getItems() {
            let start = (this.currentPage - 1) * this.perPage;
            let end = this.currentPage * this.perPage;
            return this.eventItems.filter(item => item.attributes.compra.data === null).slice(start, end);
        },
        getPaginateCount() {
            return Math.ceil(this.eventItems.length / this.perPage);
        }
    },
    methods: {
        filterHandler(cat) {
            this.selectedCategory = cat;
            if (this.selectedCategory === 'Todas') {
                this.eventItems = this.fullTickets;
            } else {
                this.eventItems = this.fullTickets.filter((item) => item.attributes.seat == cat[0]);
            }
        },
        formatDate(fechaISO) {
            const fecha = new Date(fechaISO);
            const dia = fecha.getDate().toString().padStart(2, "0"); // Día con dos dígitos
            const mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Mes con dos dígitos (se suma 1 porque los meses se indexan desde 0)
            const anio = fecha.getFullYear();
            return `${dia}/${mes}/${anio}`;
        },
        handleImagePopup(indexNum) {
            this.$refs.image_popup.showImg(indexNum);
        },
        getEvent() {
            const config = useRuntimeConfig();
            const query = qs.stringify({
                filters: {
                    tickets: {
                        compra: {
                            $null: true,
                        },
                    }
                },
            }, {
                encodeValuesOnly: true, // prettify URL
            });
            axios
                .get(`${config.public.apiBase}events/${this.eventId}?populate[0]=tickets&populate[1]=tickets.compra&${query}`, {
                    /*headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },*/
                })
                .then((response) => {
                    this.event = response.data;
                    this.eventItems = this.event.data.attributes.tickets;
                    this.eventItems = this.eventItems.data;
                    this.fullTickets = this.eventItems;
                    console.log(this.eventItems[0])
                })
                .catch((error) => {
                    console.error('Error al buscar al evento', error);
                });
        },
    },
    mounted() {
       
        this.filterData = this.items;
        this.eventId = this.$route.params.id;
        localStorage.setItem('lastevent', this.eventId)
        this.getEvent();

    },
    head() {
        return {
            title: 'Vender entradas'
        }
    },

}
</script>