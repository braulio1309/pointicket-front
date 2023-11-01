<template>
    <HeaderOne />
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-8">
                <div class="login-form-box registration-form">
                    <h3 class="title">Registrarse</h3>
                    <p>Tienes una cuenta? <a href="#">Inicia sesión</a></p>
                    <form>
                        <div class="form-group">
                            <label for="reg-name">Nombre*</label>
                            <input type="text" v-model="name" placeholder="Nombre">
                        </div>
                        <div class="form-group">
                            <label for="log-email">Email*</label>
                            <input type="email" v-model="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="log-password">Contraseña*</label>
                            <input type="password" v-model="password" placeholder="Contraseña">
                            <span class="password-show"><i class="icon-76"></i></span>
                        </div>
                        <div class="form-group">
                            <label for="log-password">Telefono*</label>
                            <input type="text" placeholder="123465" v-model="phone">
                            <span class="password-show"><i class="icon-76"></i></span>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="terms-condition" v-model="checkbox">
                                <label class="form-check-label" for="terms-condition">Estoy de acuerdo con los
                                    <NuxtLink to="/terms-condition">Terminos y condiciones</NuxtLink>
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="button" class="edu-btn btn-medium" @click="register">Crear cuenta <i class="icon-4"></i></button>
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
    name: "register",
    components: {
        HeaderOne
    },
    data() {
        return {
            email: '',
            password: '',
            name: '',
            phone: '',
            error: false,
            errorMsg: `An error occurred, please try again`,
            checkbox: true
        }
    },
    methods: {
        async register() {
            const config = useRuntimeConfig();

            try {
                const res = await axios.post(`${config.public.apiBase}auth/local/register`, {
                    email: this.email,
                    username: this.name,
                    password: this.password
                });
                const { jwt, user } = res.data
                window.localStorage.setItem('jwt', jwt)
                window.localStorage.setItem('userData', JSON.stringify(user))
                this.$router.push('/login')
            } catch (error) {
                console.log(error)
                this.error = true
                this.password = ''
            }
        }
    }

};
</script>
<style></style>