<template>
    <div class="edu-course-area course-area-1 edu-section-gap bg-lighten01">
        <div class="container">
            <SectionTitle preTitle='Ultimos eventos' title='ULTIMOS EVENTOS' alignment='section-center' />
            <div class="row g-5">
                <div class="col-md-6 col-xl-3" data-aos-delay="10" data-aos="fade-up" data-aos-duration="100"
                    v-for="event in events.slice(0, 8)" :key="event.id">
                    <LastEvents :event="event" :type="'buy'" />
                </div>
            </div>
            <div class="course-view-all" data-aos-delay="10" data-aos="fade-up" data-aos-duration="100">
                <NuxtLink to="/event/buy" class="edu-btn">Ver más eventos <i class="icon-4"></i></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../common/SectionTitle.vue';
import LastEvents from '../course/LastEvents.vue';
import axios from 'axios';


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

            axios.get(`${config.public.apiBase}events?populate=*`)
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