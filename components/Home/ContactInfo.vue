<template>
    <div class="home-one-cta-two cta-area-1">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="home-one-cta edu-cta-box bg-image bg-image--7">
                        <div class="inner">
                            <div class="content text-md-end">
                                <span class="subtitle">Escribenos:</span>
                                <h3 class="title"><a href="mailto:info@edublink" target="_blank">info@edublink</a></h3>
                            </div>
                            <div class="sparator">
                                <span>o</span>
                            </div>
                            <div class="content">
                                <span class="subtitle">Llamanos:</span>
                                <h3 class="title"><a href="tel:+011235641231">+01 123 5641 231</a></h3>
                            </div>
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-01" dataDepth="2" imgSrc="/images/cta/shape-06.png" />
                            <MouseMove addClassName="shape-02" dataDepth="-2" imgSrc="/images/cta/shape-12.png" />
                            <MouseMove addClassName="shape-03" dataDepth="-3" imgSrc="/images/cta/shape-04.png" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <section class="edu-section-gap contact-form-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="contact-form">
                            <div class="section-title section-center">
                                <h3 class="title">¿Tu Evento no está disponible? Contáctanos por Whatsapp o llena este formulario</h3>
                            </div>

                            <form class="rnt-contact-form rwt-dynamic-form" ref="form" @submit.prevent="sendEmail">
                                <div class="row row--10">
                                    <div class="form-group col-lg-6">
                                        <input type="text" name="fullname" placeholder="Your Name">
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <input type="email" name="email" placeholder="Your Email">
                                    </div>
                                    <div class="form-group col-12">
                                        <input type="tel" name="phone" placeholder="Phone number">
                                    </div>
                                    <div class="form-group col-12">
                                        <textarea name="message" cols="30" rows="6"
                                            placeholder="Type your message"></textarea>
                                    </div>
                                    <div class="form-group col-12 text-center">
                                        <button class="rn-btn edu-btn submit-btn" name="submit" type="submit">Submit Now <i
                                                class="icon-4"></i></button>
                                        <div v-if="showResult" class="col-12 success-msg">
                                            <p>{{ resultText }}</p>
                                        </div>
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

<script>
import MouseMove from '../animation/MouseMove.vue';


export default {
    name: "app",
    components: {
        MouseMove
    },
    data(){
        return {
            showResult: false
        }
    }
    
};
</script>