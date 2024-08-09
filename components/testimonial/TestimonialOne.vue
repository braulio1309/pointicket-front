<template>
    <div class="testimonial-area-1 section-gap-equal">
        <div class="container">
            <div class="row g-lg-5">
                <div class="col-lg-5">
                    <div class="testimonial-heading-area">
                        <div class="section-title section-left" data-aos-delay="50" data-aos="fade-up"
                            data-aos-duration="800">
                            <span class="pre-title">Testimonios</span>
                            <h3 class="title">Opiniones de clientes</h3>
                            <span class="shape-line"><i class="icon-19"></i></span>
                            <p>Nuestro objetivo es ofrecer a nuestros clientes una experiencia de compra sencilla y segura. Por eso, trabajamos con las principales entidades de pago online y contamos con un sistema de seguridad de última generación.</p>
                            
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
                                    <p>“Soy mexicano aficionado al Real Madrid.. en mi última experiencia Madrileña compramos los boletos para el clásico y para la Semifinal de la champions….
La experiencia fue excelente, Pointickets es una plataforma muy confiable y siempre estuvo al pendiente de que no hubiera problemas… Además de que me entregó los boletos puntualmente…
Definitivamente mi próxima compra la haré por esta web..”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Alberto</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                
                                <div class="content">
                                    <p>“Gracias a Pointickets por haberme permitido disfrutar de un partido de Champions.
Era la primera vez que compraba en la web y estaba nervioso al ver que no recibia las entradas, pero cumplieron con lo prometido y las recibi la semana anterior al partido.
Destacar la disponibilidad de su servicio de atencion al cliente a traves de whatsapp.”
                                    </p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Ali</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="content">
                                    <p>“Asistir a un partido del Real Madrid en la Champions League fue una experiencia inolvidable! :ojos_de_corazón: Desde el momento en que llegué al estadio, pude sentir la emoción en el aire. La multitud vestida con los colores del equipo, los cánticos que resonaban por todo el lugar y la majestuosidad del Santiago Bernabéu hicieron que mi corazón latiera más rápido. Cada jugada, cada gol y cada celebración eran pura magia. Ver a los jugadores en acción y ser parte de esa energía única fue algo que recordaré para siempre.”</p>
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
                                    <p>“Increíble experiencia para mi nieto y para mi!!! El contacto personal del equipo de ventas fue excepcional.
Todo se facilitó en un 100%.
Los asientos excelentes, trato profesional y amistoso, Los recomiendo y volvería a utilizarlo.
Gracias PT!!!!”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Ana</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                
                                <div class="content">
                                    <p>“I bought two tickets through Pointickets for the highly anticipated Real Madrid vs. Seville for the 2023-2024 season at the iconic Santiago Bernabéu stadium. Not only was the delivery fast, but my interactions with Pointickets were incredibly smooth and hassle-free. The pointickets team's willingness to help and their ability to suggest premium seating options at exceptionally competitive prices really enhanced my overall experience...”.</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Abdullah</h5>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="testimonial-grid">
                                <div class="content">
                                    <p>“Para nosotros encontrar una empresa que nos de confianza y garantía, es lo primordial.
En POINTICKETS, encontramos eso y más
Atención profesional, comunicación clara y fluída.
Conseguimos todo lo que busca un cliente
Precio justo para un producto y servicio.
Súper recomendados.”</p>
                                    <div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Maria Ortiz</h5>
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