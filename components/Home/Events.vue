<template>
    <div class="edu-course-area course-area-1 edu-section-gap bg-lighten01">
        <div class="container">
            <div class="section-title section-center" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                <h2 class='pre-title' style="font-size: medium;">Pointickets: líderes en compra venta de entradas deportivas</h2>
                <p>Pointickets es la plataforma líder en compra y venta de entradas deportivas, con un amplio catálogo de entradas para el Real Madrid en el Santiago Bernabéu. Ofrecemos un amplio catálogo de entradas para el Real Madrid en el Santiago Bernabéu, a los mejores precios.</p>

                <p>En Pointickets encontrarás entradas para todos los partidos del Real Madrid, tanto de Liga como de Champions League. También tenemos entradas para otro tipo de eventos, como conciertos y espectáculos.</p>

            </div>
            <div class="row g-5">
                <div class="col-md-6 col-xl-3" data-aos-delay="10" data-aos="fade-up" data-aos-duration="100"
                    v-for="event in events.slice(0, 8)" :key="event.id">
                    <LastEvents :event="event" :type="'comprar'" />
                </div>
            </div>
            <div class="course-view-all" data-aos-delay="10" data-aos="fade-up" data-aos-duration="100">
                <NuxtLink to="/comprar-entradas" class="edu-btn">Ver más eventos <i class="icon-4"></i></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../common/SectionTitle.vue';
import LastEvents from '../course/LastEvents.vue';
import axios from 'axios';
import qs from 'qs';

export default {
    components: {
        SectionTitle,
        LastEvents
    },
    data() {
        return {
            events: [],
        };
    },
    mounted() {
        this.getEvents();
    },
    methods: {

        getEvents() {
            const config = useRuntimeConfig();
            const query = qs.stringify({
                sort: ['endDate:asc'], 
            }, {
                encodeValuesOnly: true, // prettify URL
            });

            axios.get(`${config.public.apiBase}events?populate=*&${query}`)
                .then(response => {
                    this.events = response.data.data;
                })
                .catch(error => {
                    console.error('Error al cargar los eventos:', error);
                });
        },
    },

}
</script>