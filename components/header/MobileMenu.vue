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
                    title: this.$t('Home.home'),
                },
                {
                    url: '/compra-entradas-de-futbol',
                    title: this.$t('Menu.futbol'),
                },
                {
                    url: '/tour-santiago-bernabeu',
                    title: 'Tour Bernabeu',

                },
                {
                    url: '/comprar-entradas-de-baloncesto',
                    title: this.$t('Menu.baloncesto'),

                },
                {
                    url: '/comprar-entradas-de-conciertos',
                    title: this.$t('Menu.conciertos'),

                },
                {
                    url: '/contacto',
                    title: this.$t('Menu.contact_us'),

                },
                {
                    url: '/profile',
                    title: this.$t('Menu.profile'),

                },

            ]
        }
    },
    watch: {
        '$i18n.locale'(newLocale, oldLocale) {
            this.handleLanguageChange(newLocale, oldLocale);
        }
    },
    mounted() {
        mobileMenuResponsive();
    },
    methods: {
        handleLanguageChange(newLocale, oldLocale) {
            this.menus = [
                {
                    url: '/',
                    title: this.$t('Home.home'),
                },
                {
                    url: '/compra-entradas-de-futbol',
                    title: this.$t('Menu.futbol'),
                },
                {
                    url: '/tour-santiago-bernabeu',
                    title: 'Tour Bernabeu',

                },
                {
                    url: '/comprar-entradas-de-baloncesto',
                    title: this.$t('Menu.baloncesto'),

                },
                {
                    url: '/comprar-entradas-de-conciertos',
                    title: this.$t('Menu.conciertos'),

                },
                {
                    url: '/contacto',
                    title: this.$t('Menu.contact_us'),

                },
                {
                    url: '/profile',
                    title: this.$t('Menu.profile'),

                },

            ]
        }
    },
    watch: {
        '$i18n.locale'(newLocale, oldLocale) {
            this.handleLanguageChange(newLocale, oldLocale);
        }
    },
    mounted() {
        mobileMenuResponsive();
    },
    methods: {
        handleLanguageChange(newLocale, oldLocale) {
            this.menus = [
                {
                    url: '/',
                    title: this.$t('Home.home'),
                },
                {
                    url: '/compra-entradas-de-futbol',
                    title: this.$t('Menu.futbol'),
                },
                {
                    url: '/tour-santiago-bernabeu',
                    title: 'Tour Bernabeu',

                },
                {
                    url: '/comprar-entradas-de-baloncesto',
                    title: this.$t('Menu.baloncesto'),

                },
                {
                    url: '/comprar-entradas-de-conciertos',
                    title: this.$t('Menu.conciertos'),

                },
                {
                    url: '/contacto',
                    title: this.$t('Menu.contact_us'),

                },
                {
                    url: '/profile',
                    title: this.$t('Menu.profile'),

                },

            ]
        },
    }
}
</script>