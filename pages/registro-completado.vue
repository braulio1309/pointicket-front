<template>
    <HeaderOne />
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-8">
                <div class="login-form-box">
                    <h3 class="title">Registro confirmado</h3>
                    <div v-if="error" class="col-12">
                        <div class="alert alert-danger" role="alert">
                            Datos incorrectos, intente de nuevo
                        </div>
                    </div>
                    <div v-if="!error" class="col-12">
                        <div class="alert alert-success" role="alert">
                            Tu cuenta ha sido confirmada exitosamente, puedes iniciar sesión
                        </div>
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="current-log-email">Email*</label>
                            <input type="email" v-model="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="current-log-password">Contraseña*</label>
                            <input type="password" v-model="password"
                                placeholder="Contraseña">
                            <span class="password-show"><i class="icon-76"></i></span>
                        </div>
                        <div class="form-group chekbox-area">
                            <div class="edu-form-check">
                                <input type="checkbox" id="remember-me">
                                <label for="remember-me">Recuerdame</label>
                            </div>
                            <a href="/recuperar" class="password-reset">Perdiste tu contraseña?</a>
                        </div>
                        <div class="form-group">
                            <button type="button" class="edu-btn btn-medium" @click="login">Iniciar sesión <i class="icon-4"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import HeaderOne from "~~/components/header/HeaderOne.vue";
import axios from 'axios';

export default {
    name: "Registro completado",
    components: {
        HeaderOne
    },
    data() {
        return {
            email: '',
            password: '',
            error: false,
            errorMsg: `An error occurred, please try again`,
            auth: ''
        }
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
                this.$router.push('/')
            } catch (error) {
                console.log(error)
                this.error = true
                this.password = ''
            }
        },
        forgotPassword(){
            this.$router.push('/email-recuperar-clave');
        }
    }

};
</script>
<style></style>