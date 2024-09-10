<template>
    <HeaderOne />
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-8">
                <div class="login-form-box">
                    <h3 class="title">{{ $t('Login.login') }}</h3>
                    <p>{{ $t('Login.dont_have_account') }} <a href="/register" style="text-decoration: underline;">{{ $t('Register.register') }}</a></p>
                    <div v-if="error" class="col-12">
                        <div class="alert alert-danger" role="alert">
                            {{ $t('Login.wrong_data') }}
                        </div>
                    </div>
                    <div v-if="this.auth" class="col-12">
                        <div class="alert alert-info" role="alert">
                            {{ this.auth }}
                        </div>
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="current-log-email">Email*</label>
                            <input type="email" v-model="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="current-log-password">{{ $t('Login.password')}}*</label>
                            <input :type="showPassword" v-model="password"
                                placeholder="Contraseña">
                            <span class="password-show" @click="toggleShowPassword"><i class="icon-76"></i></span>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input type="checkbox" id="remember-me" v-model="checkbox" class="chec form-check-input">
                                <label class="form-check-label" for="remember-me"><NuxtLink >{{ $t('Login.remember_me')}}</NuxtLink></label>
                            </div>
                            <a href="/recuperar" class="password-reset">{{ $t('Login.lost_password')}}</a>
                        </div>
                        <div class="form-group">
                            <button type="button" class="edu-btn btn-medium" @click="login">{{ $t('Login.login')}} <i class="icon-4"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
definePageMeta({
  title: 'Compra entradas del Real Madrid en el Bernabéu | Pointickets',
  description: 'Compra y vende tus entradas para los mejores partidos de fútbol en el Bernabéu con Pointickets, la plataforma líder en venta de entradas deportivas. '                
})
import HeaderOne from "~~/components/header/HeaderOne.vue";
import axios from 'axios';

export default {
    name: "login",
    components: {
        HeaderOne
    },
    data() {
        return {
            email: '',
            password: '',
            error: false,
            errorMsg: `An error occurred, please try again`,
            auth: '',
            checkbox: true,
            showPassword: 'password'
        }
    },
    mounted() {
        this.auth = window.localStorage.getItem('notLogged');
        window.localStorage.removeItem('notLogged');
    },
    methods: {
        async login() {
            const config = useRuntimeConfig();
            try {
                const res = await axios.post(`${config.public.apiBase}auth/local`, {
                    identifier: this.email,
                    password: this.password
                });
                const { jwt, user } = res.data
                window.localStorage.setItem('jwt', jwt)
                window.localStorage.setItem('userData', JSON.stringify(user))

                if(localStorage.getItem('lastRoute')){
                    localStorage.removeItem('lastRoute')
                    this.$router.push(`/shop/checkout/${localStorage.getItem('lastevent')}`);

                }else{
                    this.$router.push('/')
                }
            } catch (error) {
                console.log(error)
                this.error = true
                this.password = ''
            }
        },
        forgotPassword(){
            this.$router.push('/email-recuperar-clave');
        },
        toggleShowPassword(){
            if(this.showPassword == 'password'){
                this.showPassword = 'text';
            } else {
                this.showPassword = 'password';
            }
        }
    }

};
</script>
<style></style>