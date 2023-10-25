<template>
    <div class="testimonial-area-1 section-gap-equal">
        <div class="container">
            <div class="row g-lg-5">
                <div class="col-lg-5">
                    <div class="testimonial-heading-area">
                        <div class="section-title section-left" data-aos-delay="50" data-aos="fade-up"
                            data-aos-duration="800">
                            <span class="pre-title">Testimonios</span>
                            <h2 class="title">Que opinan de nuestro sistema de entradas</h2>
                            <span class="shape-line"><i class="icon-19"></i></span>
                            <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore
                                dolore magna aliquaenim ad minim.</p>
                            <NuxtLink to="#" class="edu-btn btn-large">View All<i class="icon-4"></i></NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-7">
                    <swiper class="home-one-testimonial-activator" :modules="modules" :slidesPerView="1" :loop="true"
                        :spaceBetween="0" :autoplay="{
                            delay: 3500,
                            disableOnInteraction: true,
                            reverseDirection: true,
                        }" :speed="1500" :grabCursor="true" :breakpoints="{
    '577': {
        slidesPerView: 2,
    },
}">
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img src="/images/testimonial/testimonial-01.png" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <p>“Estoy encantada, he vendido y he comprado entradas y todo perfecto!”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Ray Sanchez</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img src="/images/testimonial/testimonial-02.png" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <p>“Excelente web, he comprado entradas en varias ocasiones y nunca he tenido problemas”
                                    </p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Thomas Lopez</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img src="/images/testimonial/testimonial-03.png" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <p>“Todo muy bien”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Amber Page</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img src="/images/testimonial/testimonial-04.png" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <p>“sencilla, práctica y fiable plataforma tanto para vender como para comprar de forma
                                        segura
                                        ante planes imprevistos”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Robert Tapp</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img src="/images/testimonial/testimonial-04.png" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <p>“Tuve una incidencia para el evento al que adquirí las entradas, contacté con su
                                        servicio de
                                        atención al cliente y me ofrecieron una solución en 24 horas. Agradecer la
                                        iniciativa y
                                        proactividad del agente con el que contacté”.</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Robert Tapp</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img src="/images/testimonial/testimonial-04.png" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <p>“Compra rápida, cómoda y segura”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Robert Tapp</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img src="/images/testimonial/testimonial-04.png" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <p>“En 10 minutos había vendido las entradas para el partido al que no podía acudir.
                                        Excelente”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Robert Tapp</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img src="/images/testimonial/testimonial-04.png" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <p>“He vendido y comprado entradas y siempre ha ido perfecto”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Robert Tapp</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img src="/images/testimonial/testimonial-04.png" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <p>“Pude acceder al evento sin ningún tipo de incidencia. Volveré a repetir”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Robert Tapp</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img src="/images/testimonial/testimonial-04.png" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <p>“ He comprado en varias ocasiones y hasta la fecha no he tenido ningún tipo de
                                        problemas”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Robert Tapp</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img src="/images/testimonial/testimonial-04.png" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <p>“Comodidad en la compra y recepción de entradas. Todo fue perfectamente”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Robert Tapp</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img src="/images/testimonial/testimonial-04.png" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <p>“Reclamé por unas entradas incorrectas y me ofrecieron alternativa en 24 horas.
                                        Finalmente
                                        me ofrecieron unas entradas de superior categoría por el mismo precio. Buen servicio
                                        de
                                        atención al cliente, se mostraron atentos y empáticos”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Robert Tapp</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img src="/images/testimonial/testimonial-04.png" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <p>“No conocía el sitio, a partir de ahora será una de mis webs de referencia para la compra-venta
de entradas. Confiable, seguro y fácil. Enhorabuena.”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Robert Tapp</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img src="/images/testimonial/testimonial-04.png" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <p>“Buena web, me ayudó mucho. Genial la atención al cliente y la opción de notificaciones.”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Robert Tapp</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img src="/images/testimonial/testimonial-04.png" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <p>“ Web segura donde comprar entradas”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Robert Tapp</h5>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Autoplay],
        }
    }
}
</script>