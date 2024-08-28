<template>
    <div class="edu-event">
        <div class="inner">
            <div class="thumbnail">
                <NuxtLink :to="'/tickets/'+type+'r/' + eventInfo.id">
                    <img :src="this.url.substring(0, this.url.length - 1) + eventInfo.attributes.image.data[0].attributes.url" />
                </NuxtLink>
                
            </div>
            <div class="content">
                
                <h5 class="title" style="font-size:12px ;">
                    <NuxtLink :to="'/tickets/'+type+'r/' + eventInfo.id">{{ eventInfo.attributes.title }}</NuxtLink>
                </h5>
                <p v-html="eventInfo.attributes.description"></p>
                <p style="font-size:9px ;" v-if="eventInfo.attributes.description.length == 10">{{ $t('Home.pending_confirmation') }}</p>
                <p v-else>-</p>
                <div class="read-more-btn">
                    <NuxtLink class="edu-btn btn-small btn-secondary" :to="'/tickets/'+type+'r/' + eventInfo.id">{{ (type === 'compra')? $t('Home.buy'): $t('Home.sell') }} <i
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