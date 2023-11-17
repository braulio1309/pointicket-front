<template>
    <HeaderOne />
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-8">
                <div class="login-form-box registration-form">
                    <h3 class="title">Registrarse</h3>
                    <p>Tienes una cuenta? <a href="/login" style="text-decoration: underline;">Inicia sesión</a></p>
                    <div v-if="success" class="col-12">
                        <div class="alert alert-success" role="alert">
                            Te hemos enviado un correo para confirmar tu cuenta 
                        </div>
                    </div>
                    <div v-if="error" class="col-12">
                        <div class="alert alert-danger" role="alert">
                            Complete correctamente el formulario 
                        </div>
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="reg-name">Nombre y apellido*</label>
                            <input type="text" v-model="fullname" placeholder="Nombre y apellido">
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
            fullname: '',
            phone: '',
            error: false,
            errorMsg: `An error occurred, please try again`,
            checkbox: true,
            success: false
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
        }
    }

};
</script>
<style></style>