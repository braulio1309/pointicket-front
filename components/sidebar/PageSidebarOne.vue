<template>
    <div class="edu-blog-sidebar">
        <div class="edu-blog-widget widget-tags">
            <div class="inner">
                <h4 class="widget-title">Tipo de entrada</h4>
                <div class="content">
                    <div class="tag-list">
                        <a href="#">En papel</a>
                        <a href="#">Electrónica</a>
                        <a href="#">Móvil</a>
                        
                    </div>
                </div>
            </div>
        </div>

       <div class="col-lg- order-lg-1 col-pr--35">
            <div class="row g-5">
                <div class="col-12" 
                    v-for="event in getItems" :key="event.id">
                    <EventList :eventInfo="event" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import EventList from '~~/components/event/EventList.vue';
import Auth from '~~/components/modals/Auth.vue';



export default {
    components: {
    Auth,
    EventList,
   
},
    data() {
        return {
            eventItems: [
                {
                    id: 1,
                    imgSrc: "event-01.jpg",
                    title: "4 Entradas  €70.00",
                    date: "30",
                    fullDate: "Braulio Zapata",
                    month: "SEP",
                    time: "08:00AM-10:00AM",
                    location: "VIP",
                    excerpt: "Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna."
                },
                {
                    id: 2,
                    imgSrc: "event-02.jpg",
                    title: "2 Entradas - €75.00",
                    date: "25",
                    fullDate: "Pato Test",
                    month: "DEC",
                    time: "04:00PM-07:00PM",
                    location: "General",
                    excerpt: "Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna."
                },
                {
                    id: 3,
                    imgSrc: "event-03.jpg",
                    title: "1 Entrada  €105.00",
                    date: "15",
                    fullDate: "Alejandro Utrera",
                    month: "NOV",
                    time: "10:00AM-11:00AM",
                    location: "VIP",
                    excerpt: "Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna."
                },
                
            ],
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
        getItems() {
            let start = (this.currentPage - 1) * this.perPage;
            let end = this.currentPage * this.perPage;
            return this.eventItems.slice(start, end);
        },
        getPaginateCount() {
            return Math.ceil(this.eventItems.length / this.perPage);
        }
    },
    methods: {
        paginateClickCallback(page) {
            this.currentPage = Number(page);
        }
    },
    head() {
        return {
            title: 'Event List'
        }
    },
    
}
</script>