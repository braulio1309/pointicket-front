<template>
    <div class="edu-event">
        <div class="inner">
            <div class="thumbnail">
                <NuxtLink :to="'/tickets/'+type+'/' + eventInfo.id">
                    <img :src="this.url + eventInfo.attributes.image.data[0].attributes.url" />
                </NuxtLink>
                <div class="event-time">
                    <span><i class="icon-33"></i>{{ eventInfo.time }}</span>
                </div>
            </div>
            <div class="content">
                <div class="event-date">
                    <span class="day">{{ formatDate(eventInfo.attributes.endDate) }}</span>
                    <span class="month">{{ getMonth(eventInfo.attributes.endDate) }}</span>
                </div>
                <h5 class="title">
                    <NuxtLink :to="'/tickets/'+type+'/' + eventInfo.id">{{ eventInfo.attributes.title }}</NuxtLink>
                </h5>
                <p>{{ eventInfo.attributes.description }}</p>
                <ul class="event-meta">
                    <li><i class="icon-40"></i>{{ eventInfo.location }}</li>
                </ul>
                <div class="read-more-btn">
                    <NuxtLink class="edu-btn btn-small btn-secondary" :to="'/tickets/'+type+'/' + eventInfo.id">{{ (type === 'buy')? 'Comprar': 'Vender' }} <i
                            class="icon-4"></i></NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['eventInfo', 'type'],
    data() {
        const config = useRuntimeConfig();

        return {
            url: config.public.apiBaseImage
        }
    },
    methods: {
        formatDate(fecha) {
            const date = new Date(fecha);
            const dia = date.getDate();
            return dia;
        },
        getMonth(fecha) {
            const date = new Date(fecha);
            const mes = date.toLocaleString('default', { month: 'short' });
            return mes;
        },
    }
}
</script>