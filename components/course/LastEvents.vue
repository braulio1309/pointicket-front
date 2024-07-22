<template>
    <div class="edu-course course-style-1 hover-button-bg-white" :class="extraClass">
        <div class="inner">
            <div class="thumbnail">
                <NuxtLink :to="'/tickets/'+type+'/'+ event.id">
                    <img :src="this.url.substring(0, this.url.length - 1)+event.attributes.image.data[0].attributes.url" :alt="event.attributes.title">
                </NuxtLink>
            </div>
            <div class="content">
                <h6 class="title" style="font-size:12px ;">
                    <NuxtLink :to="'/tickets/'+type+'/'+ event.id">{{ event.attributes.title }}</NuxtLink>
                </h6>
                <span class="course-level" style="margin-bottom: 5px !important;">{{ event.attributes.description }}</span><br>
                <span v-if="event.attributes.description.length == 10" style="font-size:9px ; margin-top: 5px; margin-bottom: 5px;">La fecha puede sufrir cambios</span>
                <span v-else style="font-size:9px ; margin-top: 5px; margin-bottom: 5px;"></span>
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