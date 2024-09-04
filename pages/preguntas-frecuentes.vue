<template>
    <div id="main-wrapper" class="main-wrapper">
        <HeaderOne />

        <BreadCrumbTwo :title="$t('purchase_questions.faq')" />

        <section class="privacy-policy-area terms-condition-area">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <div class="privacy-policy terms-condition">
                            <div class="text-block">
                                <h2 class="title">{{ $t('purchase_questions.title') }}</h2>
                                <ul>
                                    <li class="lista">
                                        <h3 class="title"><b>{{ $t('purchase_questions.seats_together_title') }}</b></h3>
                                        {{ $t('purchase_questions.seats_together_text') }}
                                    </li>

                                    <li class="lista">
                                        <h3 class="title">{{ $t('purchase_questions.seat_location_title') }}</h3>
                                        {{ $t('purchase_questions.seat_location_text') }}
                                    </li>
                                </ul>
                            </div>
                            <div class="text-block">
                                <h2 class="title">{{ $t('delivery_questions.title') }}</h2>
                                <ul>
                                    <li class="lista">
                                        <h3 class="title"><b>{{ $t('delivery_questions.when_receive_tickets_title') }}</b></h3>
                                        {{ $t('delivery_questions.when_receive_tickets_text') }}
                                        <br><br>
                                        {{ $t('delivery_questions.instant_download_tickets_text') }}
                                        <br><br>
                                        {{ $t('delivery_questions.track_order_status_text') }}
                                        <br><br>
                                        {{ $t('delivery_questions.ensure_receive_on_time_title') }}
                                        <br><br>
                                        <ul>
                                            <li>{{ $t('delivery_questions.ensure_receive_on_time_text_1') }}</li>
                                            <li>{{ $t('delivery_questions.ensure_receive_on_time_text_2') }}</li>
                                            <li>{{ $t('delivery_questions.ensure_receive_on_time_text_3') }}</li>
                                            <li>{{ $t('delivery_questions.ensure_receive_on_time_text_4') }}</li>
                                        </ul>
                                    </li>
                                    <li class="lista">
                                        <h3 class="title"><b>{{ $t('pricing_questions.price_difference_title') }}</b></h3>
                                        {{ $t('pricing_questions.price_difference_text') }}
                                        <br><br>
                                        {{ $t('pricing_questions.price_demand_text') }}
                                    </li>
                                    <li class="lista">
                                        <h3 class="title"><b>{{ $t('name_on_ticket_questions.different_name_title') }}</b></h3>
                                        {{ $t('name_on_ticket_questions.different_name_text') }}
                                        <br><br>
                                        {{ $t('name_on_ticket_questions.personalize_ticket_text') }}
                                    </li>
                                </ul>
                            </div>
                            <div class="text-block">
                                <h2 class="title">{{ $t('cancellation_questions.cancel_purchase_title') }}</h2>
                                <p>
                                    {{ $t('cancellation_questions.cancel_purchase_text') }}
                                    <br><br>
                                    {{ $t('cancellation_questions.customer_service_text') }}
                                </p>
                            </div>
                            <div class="text-block">
                                <h2 class="title">{{ $t('contact_questions.contact_us_title') }}</h2>
                                <ul>
                                    <li>
                                        <a href="/contacto" style="text-decoration: underline;">
                                            {{ $t('contact_questions.contact_us_text') }}
                                        </a>
                                    </li>
                                    <li>
                                        {{ $t('contact_questions.email_us_text') }}
                                    </li>
                                    <li>
                                        <a href="https://wa.link/5sd3xh" style="text-decoration: underline;">
                                            {{ $t('contact_questions.whatsapp_text') }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterOne />
        <ScrollToTop />
    </div>
</template>


<style>
.privacy-policy ul .lista:after {
    content: none;
    /* Esto elimina el contenido generado por ::before */
    list-style-type: none !important;
    /* Esto elimina la viñeta del elemento */
}
</style>
<script>
definePageMeta({
  title: 'Preguntas frecuentes | Pointickets',
  description: 'Te respondemos a las preguntas más comunes.Te resolvemos todo para que no tengas dudas en comprar o vender entradas de tus eventos.'                
})
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import PageSidebarOne from '~~/components/sidebar/PageSidebarOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';

export default {
    components: {
        HeaderOne,
        BreadCrumbTwo,
        FooterOne,
        PageSidebarOne,
        ScrollToTop
    },
    head() {
        return {
            title: 'Preguntas frecuentes',
            meta: [
                {
                    hid: 'Preguntas frecuentes | Pointickets',
                    name: 'Preguntas frecuentes | Pointickets',
                    content: 'Te respondemos a las preguntas más comunes.Te resolvemos todo para que no tengas dudas en comprar o vender entradas de tus eventos.'
                }
            ]
        }
    }

}
</script>

