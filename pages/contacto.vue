<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo :title="$t('ContactUs.title')" />

        <section class="contact-us-area">
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
                                    <p><a href="https://wa.link/5sd3xh" target="_blank"><img src="../assets/images/compra-entradas/whatsapp.png" style="width: 5%; margin-right: 5px;">Mándanos un WhatsApp</a></p>
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

        <div class="google-map-area">
            <div class="mapouter">
                <div class="gmap_canvas">

                </div>
            </div>
        </div>

        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<script>
definePageMeta({
  title: 'Contacta con nosotros | Pointickets',
  description: '¿Tienes alguna duda? Ponte en contacto con nuestro equipo de atención al cliente y te responderemos lo antes posible.'                
})
import emailjs from 'emailjs-com';
import MouseMove from '~~/components/animation/MouseMove.vue';
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';
import axios from 'axios';

export default {
    components: {
        HeaderOne,
        BreadCrumbTwo,
        MouseMove,
        FooterOne,
        ScrollToTop
    },
    data() {
        return {
            resultText: '',
            showResult: false,
            isLoading: false,
            message: '',
            name: '',
            phone: '',
            email: '',
            emailValidation: false,
            checkbox: false,
            checkValidation: false
        }
    },
    methods: {
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
        sendEmail(e) {
            emailjs.sendForm(
                'service_bxh6md3',
                'template_1g7v07n',
                this.$refs.form, 'user_8Lx0gfI1ktOoeEN8DTV10'
            )
                .then((result) => {
                    this.showResult = true;
                    this.resultText = 'Your message has been sent successfully. We will contact you soon.';
                    setTimeout(() => {
                        this.showResult = false;
                    }, 5000);
                    e.target.reset();
                    console.log('SUCCESS!', result.text);
                }, (error) => {
                    this.showResult = true;
                    this.resultText = error.text;
                    setTimeout(() => {
                        this.showResult = false;
                    }, 5000);
                    console.log('FAILED...', error.text);
                });
        }
    },
    head() {
        return {
            title: 'contacto',
            meta: [
                {
                    hid: 'Contacta con nosotros | Pointickets',
                    name: 'Contacta con nosotros | Pointickets',
                    content: '¿Tienes alguna duda? Ponte en contacto con nuestro equipo de atención al cliente y te responderemos lo antes posible.'
                }
            ]
        }
    }
}


</script>