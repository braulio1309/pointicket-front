<template>
    <ul class="edublink-mobile-menu mainmenu">
        <li v-for='(link, i) in menus' :key='i'>
            <NuxtLink :to="link.url">{{ link.title }}</NuxtLink>
            <span class="submenu-toggle" v-if="link.submenu">
                <i class="ri-arrow-down-s-line"></i>
            </span>
            <ul class="submenu-wrapper" v-if="link.submenu">
                <li v-for='(link, i) in link.submenu' :key='i' class="title">
                    <NuxtLink :to="link.url" v-html="link.title"></NuxtLink>
                    <span class="submenu-toggle" v-if="link.submenu">
                        <i class="ri-arrow-down-s-line"></i>
                    </span> 
                    <ul class="submenu-wrapper" v-if="link.submenu">
                        <li v-for='(link, i) in link.submenu' :key='i'>
                            <NuxtLink :to="link.url" v-html="link.title"></NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    import mobileMenuResponsive from '../../common/mobileMenuResponsive';
    export default {
        data() {
            return {
                menus: [
                    {
                        url: '/',
                        title: 'Inicio',
                    },
                    {
                        url: '/compra-entradas-de-futbol',
                        title: 'Comprar entradas',
                    },
                    {
                        url: '/vende-entradas-de-futbol',
                        title: 'Vender entradas',
                    },
                    {
                        url: '/preguntas-frecuentes',
                        title: 'FAQs',
                        
                    },
                    {
                        url: '/tour-santiago-bernabeu',
                        title: 'Tour Santiago Bernabeu',
                        
                    },
                    {
                        url: '/contacto',
                        title: 'Contacto',
                        
                    },
                    
                ]
            }
        },
        mounted() {
            mobileMenuResponsive();
        }
    }
</script>