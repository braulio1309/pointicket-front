<template>
    <div class="edu-course course-style-1 hover-button-bg-white" :class="extraClass">
        <div class="inner">
            <div class="thumbnail">
                <NuxtLink :to="'/tickets/'+type+'/'+ event.id">
                    <img :src="this.url.substring(0, this.url.length - 1)+event.attributes.image.data[0].attributes.url" :alt="event.attributes.title">
                </NuxtLink>
                <div class="time-top">
                    <span class="duration"><i class="icon-61"></i>{{ new Date(event.attributes.endDate ).toLocaleString('en-US') }}</span>
                </div>
            </div>
            <div class="content">
                <span class="course-level">{{ event.attributes.description }}</span>
                <h6 class="title">
                    <NuxtLink :to="'/tickets/'+type+'/'+ event.id">{{ event.attributes.title }}</NuxtLink>
                </h6>
                <a :href="'/tickets/'+type+'/'+ event.id" class="edu-btn btn-large">{{ (type === 'comprar')? 'Comprar': 'Vender' }}</a>

                
            </div>
        </div>
       
    </div>
</template>

<script>
    export default {
        props: ['extraClass', 'event', 'type'],

        filters: {
            limitTo(value, limit) {
            if (!value) return '';
            if (value.length <= limit) return value;
                return value.slice(0, limit) + '...';
            },
        },
        data(){
            
            const config = useRuntimeConfig();

            return {
                url: config.public.apiBaseImage
            }
        },
        mounted() {
            const config = useRuntimeConfig();
            this.url = config.public.apiBaseImage;
        }
    }
</script>