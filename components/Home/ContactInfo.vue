<template>
    <div class="home-one-cta-two cta-area-1">
       
        <section class="edu-section-gap contact-form-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="contact-form">
                            <div class="section-title section-center">
                                <h3 class="title">{{ $t('Home.contact_us') }}</h3>
                                <p class="description">{{ $t('Home.keep_information_events') }}</p>
                            </div>
                            <div v-if="showResult" class="col-12">
                                <div id="contact-form" class="alert alert-success" role="alert">
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
                                    {{ $t('ContactUs.readed') }} <a href="/terms-condition" style="text-decoration: underline;">{{ $t('ContactUs.terms') }}.</a>
                                </div>
                            </div>

                            <form class="rnt-contact-form rwt-dynamic-form" ref="form" @submit.prevent="handleSubmit">
                                <div class="row row--10">
                                    <div class="form-group col-lg-6">
                                        <input type="text" name="fullname" v-model="name" :placeholder="$t('Register.name')">
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <input type="email" name="email" v-model="email" placeholder="Email">
                                    </div>
                                    <div class="form-group col-12">
                                        <input type="tel" name="phone" v-model="phone" placeholder="12345678...">
                                    </div>
                                    <div class="form-group col-12">
                                        <textarea name="message" cols="30" rows="6" v-model="message"
                                            :placeholder="$t('ContactUs.message')"></textarea>
                                    </div>
                                    <div class="form-group chekbox-area">
                                        <div class="edu-form-check">
                                            <input type="checkbox" id="remember-me" v-model="checkbox" class="chec">
                                            <label for="remember-me">{{ $t('ContactUs.readed') }} <a href="/terms-condition" style="text-decoration: underline;">{{ $t('ContactUs.terms') }}</a></label>
                                        </div>
                                    </div>
                                    <div class="form-group col-12 text-center">
                                        <button class="rn-btn edu-btn btn-medium submit-btn" name="submit" type="submit"
                                            :disabled="isLoading" @click="handleSubmit">
                                            <span v-if="isLoading">
                                                {{ $t('ContactUs.loading') }} <i class="fas fa-spinner fa-spin"></i>
                                            </span>
                                            <span v-else>
                                                {{ $t('Home.send') }}<i class="icon-4"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="-2" imgSrc="/images/about/shape-15.png" />
                <MouseMove addClassName="shape-2" dataDepth="2" imgSrc="/images/cta/shape-04.png" />
                <MouseMove addClassName="shape-3" dataDepth="1" />
                <MouseMove addClassName="shape-4" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
            </ul>
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
            input: ''
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