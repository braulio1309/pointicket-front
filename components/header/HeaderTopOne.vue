<template>
    <div class="header-top-bar">
        <div class="container-fluid">
            <div class="header-top">
                <div class="header-top-left">
                    <div class="header-notify">
                        Pointickets es un proveedor secundario de entradas.
                    </div>
                </div>
                <div class="header-top-right">

                    <ul class="header-info">
                        <li v-if="!logged">
                            <NuxtLink to="/login">Iniciar sesion</NuxtLink>
                        </li>

                        <li v-if="!logged">
                            <NuxtLink to="/register">Registrate</NuxtLink>
                        </li>

                        <li v-if="logged">
                            <NuxtLink to="/profile">Bienvenido {{ this.user.fullname }}</NuxtLink>
                        </li>
                        <li><a href="mailto:info@pointickets.com" target="_blank"><i class="icon-envelope"></i>
                                info@pointickets.com</a></li>
                        <li class="social-icon">
                            <a href="https://www.facebook.com/profile.php?id=61552598728672" target="_blank"><i class="icon-facebook"></i></a>
                            <a href="https://www.instagram.com/pointickets" target="_blank"><i class="icon-instagram"></i></a>
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
