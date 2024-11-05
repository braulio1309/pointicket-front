<template>
    <div class="home-one-cta-two cta-area-1">
       
        <section class="contact-us-area" style="margin-top: -15px;">
            <div class="container">
                <p> {{ $t('ContactUs.text') }}
                </p>
                <div class="row g-5">
                    <div class="col-xl-4 col-lg-6">
                        <div class="contact-us-info">
                            <h4 class="heading-title">{{ $t('ContactUs.second_title') }}</h4>
                            <ul class="address-list">
                                <li>
                                    <h5 class="title">Email</h5>
                                    <p><a href="mailto:info@pointickets.com" target="_blank">info@pointickets.com</a></p>
                                </li>
                                <li>
                                    <h5 class="title">WhatsApp</h5>
                                    <p><a href="https://wa.link/5sd3xh" target="_blank"><img src="../../assets/images/compra-entradas/whatsapp.png" style="width: 5%; margin-right: 5px;">{{ $t('send_whatsapp') }}</a></p>
                                </li>
                            </ul>
                            <ul class="social-share">
                                <h4 class="title">{{ $t('ContactUs.help') }}</h4>
                                <li><a href="https://www.facebook.com/people/Poin-Tickets/61552598728672/"><i class="icon-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/pointickets"><i class="icon-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="offset-xl-2 col-lg-6">
                        <div class="contact-form form-style-2">
                            <div class="section-title">
                                <h2 class="title">{{ $t('ContactUs.textus') }}</h2>
                            </div>
                            <div v-if="showResult" class="col-12">
                                <div class="alert alert-success" role="alert">
                                    {{ $t('ContactUs.thanks') }}
                                </div>
                            </div>
                            <div v-if="emailValidation" class="col-12">
                                <div class="alert alert-danger" role="alert">
                                    Ingresa un email válido, terminado en @dominio.com
                                </div>
                            </div>
                            <div v-if="checkValidation" class="col-12">
                                <div class="alert alert-danger" role="alert">
                                    Debe aceptar los terminos y condiciones
                                </div>
                            </div>

                            <form class="rnt-contact-form rwt-dynamic-form">
                                <div class="row row--10">
                                    <div class="form-group col-12">
                                        <input type="text" v-model="name" :placeholder="$t('Register.name')">
                                    </div>
                                    <div class="form-group col-12">
                                        <input type="email" v-model="email" placeholder="Email">
                                    </div>
                                    <div class="form-group col-12">
                                        <input type="tel" v-model="phone" :placeholder="$t('Register.phone')">
                                    </div>
                                    <div class="form-group col-12">
                                        <textarea v-model="message" cols="30" rows="4"
                                            placeholder="Escribe tu mensaje"></textarea>
                                    </div>
                                    <div class="form-group chekbox-area">
                                        <div class="edu-form-check">
                                            <input type="checkbox" id="remember-me" v-model="checkbox" class="chec">
                                            <label for="remember-me"> {{ $t('ContactUs.readed') }} <a href="/terms-condition"
                                                style="text-decoration: underline;">{{ $t('ContactUs.terms') }}</a></label>
                                        </div>
                                    </div>
                                    <div class="form-group col-12">
                                        <button class="rn-btn edu-btn btn-medium submit-btn" name="submit" type="submit"
                                            :disabled="isLoading" @click="handleSubmit">
                                            <span v-if="isLoading">
                                                Cargando... <i class="fas fa-spinner fa-spin"></i>
                                            </span>
                                            <span v-else>
                                                {{ $t('Home.send') }}<i class="icon-4"></i>
                                            </span>
                                        </button>

                                    </div>
                                </div>
                            </form>

                            <ul class="shape-group">
                                <MouseMove addClassName="shape-1" dataDepth="1" imgSrc="/images/about/shape-13.png" />
                                <MouseMove addClassName="shape-2" dataDepth="-1" imgSrc="/images/counterup/shape-02.png" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style>
.chec[type="checkbox"]:checked::before {
    font-size: 16px;
    line-height: 18px;
    color: #007bff !important;
}
</style>

<script>
import MouseMove from '../animation/MouseMove.vue';
import axios from 'axios';

export default {
    name: "app",
    components: {
        MouseMove
    },
    data() {
        return {
            resultText: '',
            showResult: false,
            showResultNews: false,
            isLoading: false,
            isLoadingNews: false,
            message: '',
            name: '',
            phone: '',
            email: '',
            checkbox: false,
            emailValidation: false,
            checkValidation: false,
            input: '',
        }
    },
    methods: {
        validateEmail() {

        },
        
        handleSubmit() {
            if (!this.checkbox) {
                this.checkValidation = true;
                return;
            }
            this.checkValidation = false;
            this.isLoading = true;
            this.showResult = false;

            const config = useRuntimeConfig();

            let data = {
                message: this.message,
                name: this.name,
                phone: this.phone,
                email: this.email,
            };
            axios
                .post(`${config.public.apiBase}contacts`, { data })
                .then((response) => {
                    this.emailValidation = false;
                    this.showResult = true;
                    this.isLoading = false;

                })
                .catch((error) => {
                    this.emailValidation = true;
                    this.isLoading = false;
                    console.error('Error al enviar formulario', error.response.data.error);
                });
        },
        newsletter() {

            this.isLoadingNews = true;
            this.showResultNews = false;

            const config = useRuntimeConfig();

            let data = {
                email: this.input,
            };
            axios
                .post(`${config.public.apiBase}contacts`, { data })
                .then((response) => {
                    this.isLoadingNews = false;
                    this.showResultNews = true;
                })
                .catch((error) => {
                    this.isLoadingNews = false;
                    this.showResultNews = false;
                    console.error('Error al enviar formulario', error.response.data.error);
                });
        },

    },

};
</script>