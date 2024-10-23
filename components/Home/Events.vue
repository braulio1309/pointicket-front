<template>
    <div class="edu-course-area course-area-1 edu-section-gap bg-lighten01">
        <div class="container">
            <div class="section-title section-center" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                <h2 class='pre-title' style="font-size: medium;">{{ $t('Home.second_title') }}</h2>
                <p>{{ $t('Home.leader_buy') }}</p>
                <p>{{ $t('Home.pre_title') }}</p>
                <p>{{ $t('Home.pointickets_tickets') }}</p>
                <p>{{ $t('Home.pointickets_tickets_second') }}</p>
                <p>{{ $t('Home.pointickets_tickets_finish') }}</p>
            </div>
            <div class="row g-5">
                <h4 class="text-center title">Eventos de futbol</h4>
                <div class="col-md-6 col-xl-3" data-aos-delay="10" data-aos="fade-up" data-aos-duration="100"
                    v-for="event in events.filter(event => event.attributes.type === null).slice(0, 8)" :key="event.id">
                    <LastEvents :event="event" :type="'compra'" />
                </div>
            </div>
            <div class="course-view-all" data-aos-delay="10" data-aos="fade-up" data-aos-duration="100">
                <NuxtLink to="/compra-entradas-de-futbol" class="edu-btn">{{ $t('more') }} <i class="icon-4"></i></NuxtLink>
            </div>
            <br><br>
            <div class="row g-5">
                <h4 class="text-center title">Eventos de baloncesto</h4>
                <div class="col-md-6 col-xl-3" data-aos-delay="10" data-aos="fade-up" data-aos-duration="100"
                    v-for="event in events.filter(event => event.attributes.type === 'baloncesto').slice(0, 8)" :key="event.id">
                    <LastEvents :event="event" :type="'compra'" />
                </div>
            </div>
            <div class="course-view-all" data-aos-delay="10" data-aos="fade-up" data-aos-duration="100">
                <NuxtLink to="/comprar-entradas-de-baloncesto" class="edu-btn">{{ $t('more') }} <i class="icon-4"></i></NuxtLink>
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