<template>
    <div class="edu-course course-style-1 hover-button-bg-white" :class="extraClass">
        <div class="inner">
            <div class="thumbnail">
                <NuxtLink :to="'/tickets/'+type+'r/'+ event.id">
                    <img :src="this.url.substring(0, this.url.length - 1)+event.attributes.image.data[0].attributes.url" :alt="event.attributes.title">
                </NuxtLink>
            </div>
            <div class="content">
                <h6 class="title" style="font-size:12px ;">
                    <NuxtLink :to="'/tickets/'+type+'r/'+ event.id">{{ event.attributes.title }}</NuxtLink>
                </h6>
                <span class="course-level" style="margin-bottom: 5px !important;">{{ event.attributes.description }}</span><br>
                <span :style="{ display: event.attributes.description.length == 10 ? 'inline' : 'none', fontSize: '9px', marginTop: '5px', marginBottom: '5px' }">
                    {{ $t('Home.pending_confirmation') }}
                </span>
                <br>
                <NuxtLink :to="'/tickets/'+type+'r/'+ event.id" class="edu-btn btn-large">{{ (type === 'compra')? $t('Home.buy'): $t('Home.sell') }} <i class="icon-4"></i></NuxtLink>

                
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