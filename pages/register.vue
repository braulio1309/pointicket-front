<template>
    <HeaderOne />
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-8">
                <div class="login-form-box registration-form">
                    <h3 class="title">{{ $t('Register.register') }}</h3>
                    <p>{{ $t('Login.dont_have_account') }} <a href="/login" style="text-decoration: underline;">{{ $t('Login.login') }}</a></p>
                    <div v-if="success" class="col-12">
                        <div class="alert alert-success" role="alert">
                            {{ $t('Register.send') }}
                        </div>
                    </div>
                    <div v-if="error" class="col-12">
                        <div class="alert alert-danger" role="alert">
                            {{ $t('Register.complete') }}
                        </div>
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="reg-name">{{ $t('Register.name_lastname') }}*</label>
                            <input type="text" v-model="fullname" :placeholder="$t('Register.name_lastname')">
                        </div>
                        <div class="form-group">
                            <label for="log-email">Email*</label>
                            <input type="email" v-model="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="log-password">{{ $t('Login.password')}}*</label>
                            <input :type="showPassword" v-model="password" :placeholder="$t('Login.password')">
                            <span class="password-show" @click="toggleShowPassword"><i class="icon-76"></i></span>
                        </div>
                        <div class="form-group">
                            <label for="log-password">{{ $t('Register.phone')}}*</label>
                            <input type="text" placeholder="123465" v-model="phone">
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="terms-condition" v-model="checkbox">
                                <label class="form-check-label" for="terms-condition">{{ $t('Register.agree')}}
                                    <NuxtLink to="/terms-condition">{{ $t('terms_condition.terms_condition')}}</NuxtLink>
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="button" class="edu-btn btn-medium" @click="register">{{ $t('Register.create_account')}} <i class="icon-4"></i></button>
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
    name: "register",
    components: {
        HeaderOne
    },
    data() {
        return {
            email: '',
            password: '',
            name: '',
            fullname: '',
            phone: '',
            error: false,
            errorMsg: `An error occurred, please try again`,
            checkbox: true,
            success: false,
            showPassword: 'password',
        }
    },
    methods: {
        async register() {
            const config = useRuntimeConfig();

            try {
                const res = await axios.post(`${config.public.apiBase}auth/local/register`, {
                    email: this.email,
                    username: this.fullname.replace(/\s/g, ''),
                    password: this.password,
                    fullname: this.fullname
                });
                this.error = false;
                this.success = true;                
            } catch (error) {
                console.log(error)
                this.error = true
                this.password = ''
            }
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