<template>
    <HeaderOne />
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-8">
                <div class="login-form-box">
                    <h3 class="title">Recupera tu contraseña</h3>
                    <div v-if="error" class="col-12">
                        <div class="alert alert-danger" role="alert">
                            Error, datos incorrectos
                        </div>
                    </div>
                    <div v-if="success" class="col-12">
                        <div class="alert alert-success" role="alert">
                            Contraseña recuperada, presione <a href="/login">aquí para iniciar sesión</a>
                        </div>
                    </div>
                    <form>
                        <div class="form-group">
                            <label for="current-log-email">Contraseña nueva*</label>
                            <input type="password" v-model="password" placeholder="Contraseña">
                        </div>
                        <div class="form-group">
                            <label for="current-log-email">Confirmación de contraseña*</label>
                            <input type="password" v-model="passwordConfirmation" placeholder="Confirmación">
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
    name: "Recuperar clave",
    components: {
        HeaderOne
    },
    data() {
        return {
            email: '',
            password: '',
            passwordConfirmation: '',
            error: false,
            errorMsg: `An error occurred, please try again`,
            auth: null,
            success: false
        }
    },
    methods: {
        login() {
            const config = useRuntimeConfig();
            axios
                .post(`${config.public.apiBase}auth/reset-password`, {
                    code: this.$route.query.code, // code contained in the reset link of step 3.
                    password: this.password,
                    passwordConfirmation: this.passwordConfirmation,
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