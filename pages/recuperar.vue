<template>
    <HeaderOne />
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-8">
                <div class="login-form-box">
                    <h3 class="title">Recupera tu contraseña</h3>
                    <p>¿Ya tienes cuenta? <a href="/login">Iniciar sesión</a></p>
                    <div v-if="error" class="col-12">
                        <div class="alert alert-danger" role="alert">
                            Correo no registrado
                        </div>
                    </div>
                    <div v-if="success" class="col-12">
                        <div class="alert alert-success" role="alert">
                            Ha recibido un correo para recuperar su contraseña
                        </div>
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="current-log-email">Email*</label>
                            <input type="email" v-model="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <button type="button" class="edu-btn btn-medium" @click="login">Recuperar <i
                                    class="icon-4"></i></button>
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
    name: "Recuperar",
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
            success: false
        }
    },
    methods: {
        login() {
            const config = useRuntimeConfig();
            axios
                .post(`${config.public.apiBase}auth/forgot-password`, {
                    email: this.email, // user's email
                })
                .then(response => {
                    console.log('Your user received an email');
                    this.success = true;
                })
                .catch(error => {
                    console.log('An error occurred:', error.response);
                    this.error = true;
                });
        }
    }

};
</script>
<style></style>