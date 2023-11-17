<template>
    <div class="testimonial-area-1 section-gap-equal">
        <div class="container">
            <div class="row g-lg-5">
                <div class="col-lg-5">
                    <div class="testimonial-heading-area">
                        <div class="section-title section-left" data-aos-delay="50" data-aos="fade-up"
                            data-aos-duration="800">
                            <span class="pre-title">Testimonios</span>
                            <h2 class="title">Opiniones de clientes</h2>
                            <span class="shape-line"><i class="icon-19"></i></span>
                            
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
                                <div class="content">
                                    <p>“Encontré entradas en el Bernabéu para el partido del Real Madrid contra el Barcelona en la fila 1, en la zona VIP, por solo 50 euros. El proceso de compra fue muy sencillo y rápido.”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Juan Pérez</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                
                                <div class="content">
                                    <p>“Vendí mis entradas para el partido del Real Madrid contra el Atlético de Madrid en menos de una hora. El equipo de Pointickets me ayudó a encontrar un comprador rápidamente y me pagaron el precio que pedía.”
                                    </p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">María Garcia</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="content">
                                    <p>“Siempre encuentro las entradas que busco en Pointickets. El catálogo es muy amplio y los precios son muy competitivos.”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Pedro Gómez</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="content">
                                    <p>“Pointickets es una empresa muy profesional. El servicio de atención al cliente es excelente y siempre responden a mis preguntas de forma rápida y clara.”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Ana Rodríguez</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                
                                <div class="content">
                                    <p>“Recomiendo Pointickets a todos los que quieran comprar o vender entradas para eventos deportivos. Es una empresa segura y fiable, con un excelente servicio al cliente.”.</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Luis Sánchez</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="content">
                                    <p>“Estaba desesperada porque no encontraba a nadie a quien vender mis entradas para el derbi madrileño. En Pointickets me ayudaron a encontrar un comprador en menos de una hora y me pagaron el precio que pedía. ¡Estoy muy contenta!”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Laura Mendez</h5>
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