<template>
    <footer class="edu-footer footer-lighten bg-image footer-style-1">
        <div class="footer-top">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-4 col-md-6">
                        <div class="edu-footer-widget">
                            <div class="logo">
                                <NuxtLink to="/">
                                    <img class="logo-light" src="/images/logo/logo_poin.png" style="width:100px;"
                                        alt="Light Logo">
                                </NuxtLink>
                            </div>
                            <p class="description"></p>
                            <div class="widget-information">
                                <ul class="information-list">
                                    <li><span>{{ $t('Menu.ubication') }}</span>España</li>
                                    <li><span>Email:</span><a href="mailto:info@pointickets.com"
                                            target="_blank">info@pointickets.com</a></li>
                                </ul>
                            </div>
                            <ul class="social-share icon-transparent">
                                <li><a href="https://www.facebook.com/profile.php?id=61552598728672" target="_blank" class="color-fb"><i
                                            class="icon-facebook"></i></a></li>
                                
                                <li><a href="https://www.instagram.com/pointickets/" target="_blank" class="color-ig"><i
                                            class="icon-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="edu-footer-widget explore-widget">
                            <h4 class="widget-title">Entradas</h4>
                            <div class="inner">
                                <ul class="footer-link link-hover">
                                    <li>
                                        <NuxtLink to="/tour-santiago-bernabeu">Tour del Santiago Bernabeu</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/compra-entradas-de-futbol">{{ $t('Menu.buy_tickets') }}</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/vende-entradas-de-futbol">{{ $t('Menu.sell_tickets') }}</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/preguntas-frecuentes">{{ $t('Menu.faq') }}</NuxtLink>
                                    </li>
                                    <li v-if="logged">
                                        <NuxtLink to="/profile">{{ $t('Menu.profile') }}</NuxtLink>
                                    </li>
                                    <li v-if="!logged">
                                        <NuxtLink to="/login">{{ $t('Menu.login') }}</NuxtLink>
                                    </li>
                                    <li v-if="!logged">
                                        <NuxtLink to="/register">{{ $t('Menu.register') }}</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/contacto">{{ $t('Menu.contact_us') }}</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="edu-footer-widget quick-link-widget">
                            <h4 class="widget-title">{{ $t('Menu.policy_title') }}</h4>
                            <div class="inner">
                                <ul class="footer-link link-hover">
                                    
                                    <li>
                                        <NuxtLink to="/privacy-policy">{{ $t('Menu.policy') }}</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/terms-condition">{{ $t('Menu.terms') }}</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/bases-legales-concurso">{{ $t('Menu.contest') }}</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner text-center">
                            <p>Copyright {{ new Date().getFullYear() }} <a href="#">Pointickets</a>. Derechos reservados</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    data() {
        return {
            showModal: false,
            logged: false,
            user: ''

        };
    },
    mounted() {
        this.isLogged();
    },
    methods: {
        isLogged() {

            const jwt = window.localStorage.getItem('jwt');
            const userData = window.localStorage.getItem('userData');

            // Si tanto el token como los datos del usuario existen, se considera que el usuario está logueado
            this.user = JSON.parse(userData);
            this.logged = !!jwt && !!userData;


        },
    },

};
</script>