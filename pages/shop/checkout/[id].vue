<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo :pageTitle="$t('Checkout.finish_pay')" :title="$t('Checkout.finish')" />

        <section class="checkout-page-area section-gap-equal" v-if="ticket">
            <div class="container">
                <div v-if="result" class="col-12">
                    <div class="alert alert-success" role="alert">
                        <h4 class="alert-heading">¡Compra exitosa!</h4>
                        <p>Te llegará un correo con los detalles de tu compra. </p>
                        <hr>
                        <p class="mb-0">Cualquier duda puedes contactarnos por los medios indicados.
                        </p>
                    </div>
                </div>
                <form>
                    <div class="row row--25">
                        <div class="col-lg-6">
                            <div class="checkout-billing">
                                <h3 class="title">{{ $t('Checkout.detail') }}</h3>
                                <div class="row g-lg-5">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label>{{ $t('Checkout.name') }}*</label>
                                            <input type="text" id="first-name" v-model="user.username" readonly>
                                        </div>
                                    </div>
                                </div>

                                <div class="row g-lg-5">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label>Email Address*</label>
                                            <input type="email" id="email" v-model="user.email" readonly>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label>{{ $t('Register.phone') }}*</label>
                                            <input type="tel" id="phone" v-model="user.phone" readonly>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-lg-6">
                                    <div class="col-lg-8">
                                        <div class="form-group">
                                            <label>{{ $t('Checkout.discount_coupon') }}</label>
                                            <input type="text" id="email" v-model="coupon">
                                            <p v-if="resultCouponAmount">{{ $t('Checkout.available_coupon') }} - €{{
                                                amountDiscount }}</p>
                                            <p v-if="resultCouponPercentage">{{ $t('Checkout.available_coupon') }} - {{
                                                percentageDiscount
                                                }}%
                                            </p>
                                            <p v-if="errorCoupon">{{ $t('Checkout.not_coupon') }}</p>

                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form-group" style="margin-top: 35px;">

                                            <button type="button" @click="verifyCoupon" class="edu-btn btn-small">{{
                                                $t('Checkout.verify') }}
                                                <i class="icon-4"></i></button>
                                        </div>

                                    </div>

                                </div>
                                <div class="form-group mt--50 mb-0">
                                    <label>{{ $t('Checkout.remarks') }}</label>
                                    <textarea id="notes" rows="4"
                                        placeholder="Notes about your order, e.g. speacial notes for delivery."></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="order-summery checkout-summery">
                                <div class="summery-table-wrap">
                                    <h4 class="title">{{ $t('Checkout.your_order') }} {{
                                        ticket.attributes.evento.data.attributes.title }}</h4>
                                    <table class="table summery-table">
                                        <tbody>
                                            <tr>
                                                <td> {{ ticket.attributes.Category }}, {{ $t('Checkout.type') }}: {{
                                                    this.ticket.attributes.type }}, {{ $t('Checkout.row') }}: {{
                                                    ticket.attributes.Fila }}</td>
                                                <td><span class="quantity">x {{ ticket.attributes.seat }}</span></td>
                                                <td> €{{ parseFloat(ticket.attributes.endPrice).toFixed(2) }}</td>
                                            </tr>

                                            <!-- <tr class="order-total">
                                                <td>IVA</td>
                                                <td>€{{ parseFloat(ticket.attributes.endPrice * 0.21).toFixed(2) }}</td>
                                            </tr>-->

                                            <tr v-if="resultCouponAmount || resultCouponPercentage" class="order-total">
                                                <td>{{ $t('Checkout.discount') }}</td>
                                                <td v-if="resultCouponAmount">€{{ amountDiscount }}</td>
                                                <td v-if="resultCouponPercentage">{{ percentageDiscount }} %</td>

                                            </tr>
                                            <tr v-if="ticket.attributes.type != 'Digital'" class="order-total">
                                                <td>{{ $t('Checkout.shipping_cost') }}</td>
                                                <td>€ 10</td>
                                            </tr>

                                            <tr class="order-total">
                                                <td>{{ $t('Checkout.management_fees') }}</td>
                                                <td>€ {{ fees }}</td>
                                            </tr>

                                            <tr class="order-total">
                                                <td>Total</td>
                                                <td>€{{ parseFloat((ticket.attributes.endPrice * ticket.attributes.seat
                                                    +
                                                    (0)) + fees + feeEnvio).toFixed(2) }}
                                                </td>
                                            </tr>



                                            <tr v-if="resultCouponAmount || resultCouponPercentage" class="order-total">
                                                <td>Total con descuento aplicado</td>

                                                <td v-if="resultCouponAmount">€{{
                                                    parseFloat(((ticket.attributes.endPrice *
                                                        ticket.attributes.seat +
                                                    (0)) -
                                                    amountDiscount) + fees + feeEnvio).toFixed(2)}}
                                                </td>
                                                <td v-if="resultCouponPercentage">€{{
                                                    parseFloat(((ticket.attributes.endPrice * ticket.attributes.seat +
                                                        (0)) -
                                                        ((percentageDiscount / 100) * (ticket.attributes.endPrice *
                                                    ticket.attributes.seat +
                                                    (0)))) + fees + feeEnvio).toFixed(2) }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="order-payment">
                                <div class="row justify-content-center">

                                    <!--<button type="button" class="edu-btn btn-medium" @click="customFunction()">{{ $t('Checkout.start_payment_process') }}</button>-->
                                    <stripe-checkout ref="checkoutRef" mode="payment" :pk="publishableKey"
                                        :line-items="lineItems" :success-url="'https://pointickets.com/exitoso/'+ticketId"
                                        :cancel-url="'https://pointickets.com/fallido/'+ticketId" @loading="v => loading = v" />
                                    <button type="button" @click="savePurchase" :disabled="isLoading"
                                        class="edu-btn btn-medium">Pagar <i class="icon-4"></i></button>

                                </div>
                                <br><br>
                                <div class="row justify-content-center">
                                    <br>
                                    <p class="text-center" style="font-size: 11px;">
                                        {{ $t('Checkout.pay_secure') }}<br>
                                        {{ $t('Checkout.your_transaction') }}<br>
                                        {{ $t('Checkout.we_use') }}
                                    </p>
                                    <div class="col-sm-4">
                                        <img src="../../../assets/images/pagos/mastercard.png">

                                    </div>
                                    <div class="col-sm-4">
                                        <img src="../../../assets/images/pagos/visa.png">
                                    </div>
                                    <div class="col-sm-4">
                                        <img src="../../../assets/images/pagos/american.png">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
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
import qs from 'qs';
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
            title: 'Pagar',
            ticketId: this.$route.params.id,
            ticket: null,
            user: '',
            result: false,
            isLoading: false,
            loading: false,
            coupon: null,
            couponVerify: false,
            resultCouponAmount: false,
            resultCouponPercentage: false,
            percentgeDiscount: 0,
            amountDiscount: 0,
            errorCoupon: false,
            lineItems: null,
            couponObject: null,
            fees: 5,
            feeEnvio: 0,
            lineItems: [
                {
                    price: 'price_1Q2E55GSfFvdyXFW5o2dg3EK', // The id of the one-time price you created in your Stripe dashboard
                    quantity: 1,
                },
            ],
            publishableKey: config.public.STRIPE_PUBLIC_KEY,
            successURL: 'http://localhost::3000/exitoso',
            cancelURL: 'http://localhost::3000/',
        }
    },
    head() {
        return {
            title: 'Finalizar pago'
        }
    },
    methods: {
        savePurchase() {
            // You will be redirected to Stripe's secure checkout page
            this.$refs.checkoutRef.redirectToCheckout();
        },
        async getEvent() {
            const config = useRuntimeConfig();
            let response = await axios
                .get(`${config.public.apiBase}tickets/` + this.ticketId + '?populate=*', {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                });
            this.ticket = response.data.data;
            this.lineItems = [{
                price: 'price_1Q2E55GSfFvdyXFW5o2dg3EK',
                quantity: 1,
            }];
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
                    this.couponObject = response.data.data[0];
                    localStorage.setItem('coupon', this.couponObject.id);
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
        userData() {
            const userData = window.localStorage.getItem('userData');
            this.user = JSON.parse(userData);
        },
        async customFunction() {
            let finalAmount = this.ticket.attributes.endPrice * this.ticket.attributes.seat + 0;
            //(this.ticket.attributes.endPrice * this.ticket.attributes.seat * 0.21);
            if (this.resultCouponPercentage) {
                finalAmount -= (this.percentageDiscount / 100) * finalAmount;
            }

            if (this.resultCouponAmount) {
                finalAmount -= this.amountDiscount;
            }

            finalAmount += this.fees;
            if (this.ticket.attributes.type != 'Digital')
                finalAmount += 10;
            localStorage.setItem('price', finalAmount);

            const url = `https://tpv.pointickets.com/?price=${parseFloat(finalAmount).toFixed(2)}`;

            window.location.href = url;
        }
    },
    async mounted() {
        localStorage.removeItem('tour');
        this.lineItems = [{
                price: 'price_1Q2E55GSfFvdyXFW5o2dg3EK',
                quantity: 1,
            }];

        if (window.localStorage.getItem('jwt') == null) {
            window.localStorage.setItem('notLogged', this.$t('login_now'));
            localStorage.setItem('lastRoute', 'checkout');
            this.$router.push('/login');
        } else {
            this.ticketId = this.$route.params.id;
            localStorage.setItem('ticketId', this.ticketId);
            await this.getEvent();
            this.userData();
            if (this.ticket.attributes.type === 'Física') {
                this.feeEnvio = 10
            }

        }

    },

}
</script>