<template>
    <div class="edu-event">
        <div class="inner">
            <div class="thumbnail">
                <NuxtLink :to="'/tickets/'+type+'/' + eventInfo.id">
                    <img :src="this.url.substring(0, this.url.length - 1) + eventInfo.attributes.image.data[0].attributes.url" />
                </NuxtLink>
                
            </div>
            <div class="content">
                
                <h5 class="title">
                    <NuxtLink :to="'/tickets/'+type+'/' + eventInfo.id">{{ eventInfo.attributes.title }}</NuxtLink>
                </h5>
                <p v-html="eventInfo.attributes.description"></p>
                
                <div class="read-more-btn">
                    <NuxtLink class="edu-btn btn-small btn-secondary" :to="'/tickets/'+type+'/' + eventInfo.id">{{ (type === 'comprar')? 'Comprar': 'Vender' }} <i
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