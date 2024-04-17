<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo pageTitle='Pago exitoso' title='Éxito' />

        <section class="checkout-page-area section-gap-equal">
            <div class="container">
                <div class="col-12">
                    <div class="alert alert-success" role="alert">
                        <h4 class="alert-heading">¡Compra exitosa!</h4>
                        <p>Te llegará un correo con los detalles de tu compra. </p>
                        <hr>
                        <p class="mb-0">Cualquier duda puedes contactarnos por los medios indicados.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<script>
definePageMeta({
  title: 'Compra entradas del Real Madrid en el Bernabéu | Pointickets',
  description: 'Compra y vende tus entradas para los mejores partidos de fútbol en el Bernabéu con Pointickets, la plataforma líder en venta de entradas deportivas. '                
})
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';
import axios from 'axios';
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
    components: {
        HeaderOne,
        BreadCrumbTwo,
        FooterOne,
        ScrollToTop,
        StripeCheckout
    },
    data() {
        const config = useRuntimeConfig();

        return {
            variable: false,
            title: 'Pago exitoso',
            ticketId: this.$route.params.id,
            ticket: null,
            user: '',
            result: false,
            isLoading: false,
            coupon: '',
            couponVerify: false,
            resultCouponAmount: false,
            resultCouponPercentage: false,
            percentgeDiscount: 0,
            amountDiscount: 0,
            errorCoupon: false,
            lineItems: null,
            publishableKey: config.public.STRIPE_PUBLIC_KEY
        }
    },
    head() {
        return {
            title: 'pago exitoso'
        }
    },
    methods: {

        async getEvent() {
            const config = useRuntimeConfig();
            console.log(this.ticketId)
            let response = await axios
                .get(`${config.public.apiBase}tickets/` + this.ticketId + '?populate=*', {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                });
            this.ticket = response.data.data;
            console.log('ticket', this.ticket)
            this.lineItems = [{
                price: this.ticket.attributes.price_id,
                quantity: 1,
            }];
            console.log(this.lineItems);
        },
        async verifyCoupon() {
            const config = useRuntimeConfig();

            const currentDate = new Date().toISOString(); // Obtén la fecha y hora actual en formato ISO8601

            const query = qs.stringify({
                filters: {
                    $and: [
                        {
                            title: {
                                $eq: this.coupon,
                            },
                        },
                        {
                            startDate: {
                                $lte: currentDate, // Comprueba si startDate es menor o igual a la fecha actual
                            },
                        },
                        {
                            expirationDate: {
                                $gte: currentDate, // Comprueba si expirationDate es mayor o igual a la fecha actual
                            },
                        },
                    ],
                },
            }, {
                encodeValuesOnly: true, // prettify URL
            });

            axios
                .get(`${config.public.apiBase}coupons?${query}`, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                })
                .then((response) => {
                    let amount = response.data.data[0].attributes.amount;
                    let percentage = response.data.data[0].attributes.percentage;
                    this.errorCoupon = false;

                    if (amount) {
                        this.amountDiscount = amount;
                        this.resultCouponAmount = true;

                    }
                    if (percentage) {
                        this.percentageDiscount = percentage;
                        this.resultCouponPercentage = true;
                    }
                })
                .catch((error) => {
                    this.errorCoupon = true;
                    console.error('Error al buscar al evento', error);
                });
        },
        savePurchase() {
            const config = useRuntimeConfig();
            let data = {
                user: this.user,
                ticket: this.ticket,
                subtotal: this.ticket.attributes.endPrice * this.ticket.attributes.seat,
                total: this.ticket.attributes.endPrice * this.ticket.attributes.seat + (this.ticket.attributes.endPrice * this.ticket.attributes.seat * 0.21),
                taxes: this.ticket.attributes.endPrice * this.ticket.attributes.seat * 0.21,
            };

            axios
                .post(`${config.public.apiBase}purchases`, { data }, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                })
                .then((response) => {
                    this.message = response.data;
                    this.result = true;

                })
                .catch((error) => {
                    // Maneja los errores, por ejemplo, muestra un mensaje de error
                    console.error('Error al actualizar el usuario', error);
                });
        },
        userData() {
            const userData = window.localStorage.getItem('userData');
            this.user = JSON.parse(userData);
        },
    },
    async mounted() {
        this.ticketId = this.$route.params.id;
        await this.getEvent();
        this.userData();
        this.savePurchase();

    },

}
</script>