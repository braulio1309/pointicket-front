<template>
    <div class="header-top-bar">
        <div class="container-fluid">
            <div class="header-top">
                <div class="header-top-left">
                    <div class="header-notify">
                        First 20 students get 50% discount. <NuxtLink to="/">Hurry up!</NuxtLink>
                    </div>
                </div>
                <div class="header-top-right">

                    <ul class="header-info">
                        <li v-if="!logged">
                            <NuxtLink to="/login">Iniciar sesion</NuxtLink>
                        </li>

                        <li v-if="!logged">
                            <NuxtLink to="/register">Registrese</NuxtLink>
                        </li>

                        <li v-if="logged">
                            <NuxtLink to="/profile">Bienvenido {{ this.user.username }}</NuxtLink>
                        </li>
                        <li><a href="tel:+011235641231"><i class="icon-phone"></i>Call: 123 4561 5523</a></li>
                        <li><a href="mailto:info@edublink.com" target="_blank"><i class="icon-envelope"></i>Email:
                                info@edublink.com</a></li>
                        <li class="social-icon">
                            <a href="https://facebook.com/"><i class="icon-facebook"></i></a>
                            <a href="https://instagram.com/"><i class="icon-instagram"></i></a>
                            <a href="https://twitter.com/"><i class="icon-twitter"></i></a>
                            <a href="https://linkedin.com/"><i class="icon-linkedin2"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>
</template>

<script>
import Auth from '~~/components/modals/Auth.vue';

export default {
    data() {
        return {
            showModal: false,
            logged: false,
            user: ''

        };
    },
    components: {
        Auth,
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
