<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo pageTitle='Finalizar pago' title='Finalizar' />

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
                                <h3 class="title">Detalles</h3>
                                <div class="row g-lg-5">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label>Nombre*</label>
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
                                            <label>Phone*</label>
                                            <input type="tel" id="phone" v-model="user.phone" readonly>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-lg-6">
                                    <div class="col-lg-8">
                                        <div class="form-group">
                                            <label>Cupón de descuento</label>
                                            <input type="text" id="email" v-model="coupon">
                                            <p v-if="resultCouponAmount">Cupon disponible - €{{ amountDiscount }}</p>
                                            <p v-if="resultCouponPercentage">Cupon disponible - {{ percentageDiscount
                                                }}%
                                            </p>
                                            <p v-if="errorCoupon">Cupón no válido</p>

                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="form-group" style="margin-top: 35px;">

                                            <button type="button" @click="verifyCoupon"
                                                class="edu-btn btn-small">Verificar
                                                <i class="icon-4"></i></button>
                                        </div>

                                    </div>

                                </div>
                                <div class="form-group mt--50 mb-0">
                                    <label>Observaciones</label>
                                    <textarea id="notes" rows="4"
                                        placeholder="Notes about your order, e.g. speacial notes for delivery."></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="order-summery checkout-summery">
                                <div class="summery-table-wrap">
                                    <h4 class="title">Tu orden</h4>
                                    <table class="table summery-table">
                                        <tbody>
                                            <tr>
                                                <td> {{ ticket.attributes.Category }}, {{
            ticket.attributes.evento.data.attributes.title }}, Fila {{
            this.ticket.attributes.Fila }}</td>
                                                <td><span class="quantity">x {{ ticket.attributes.seat }}</span></td>
                                                <td> €{{ ticket.attributes.endPrice }}</td>
                                            </tr>

                                            <tr class="order-total">
                                                <td>Iva</td>
                                                <td>€{{ ticket.attributes.endPrice * 0.1 }}</td>
                                            </tr>

                                            <tr v-if="resultCouponAmount || resultCouponPercentage" class="order-total">
                                                <td>Descuento</td>
                                                <td v-if="resultCouponAmount">€{{ amountDiscount }}</td>
                                                <td v-if="resultCouponPercentage">{{ percentage }} %</td>

                                            </tr>

                                            <tr class="order-total">
                                                <td>Total</td>
                                                <td>€{{ ticket.attributes.endPrice * ticket.attributes.seat +
            (ticket.attributes.endPrice * ticket.attributes.seat * 0.1) }}
                                                </td>
                                            </tr>
                                            <tr v-if="resultCouponAmount || resultCouponPercentage" class="order-total">
                                                <td>Total con descuento aplicado</td>

                                                <td v-if="resultCouponAmount">€{{ (ticket.attributes.endPrice *
            ticket.attributes.seat +
            (ticket.attributes.endPrice * ticket.attributes.seat * 0.1)) -
            amountDiscount }}
                                                </td>
                                                <td v-if="resultCouponPercentage">€{{ (ticket.attributes.endPrice *
            ticket.attributes.seat +
            (ticket.attributes.endPrice * ticket.attributes.seat * 0.1)) -
            ((percentageDiscount / 100) * (ticket.attributes.endPrice *
                                                    ticket.attributes.seat +
                                                    (ticket.attributes.endPrice * ticket.attributes.seat * 0.1))) }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="order-payment">
                                <div class="row justify-content-center">
                                    <!--<stripe-checkout ref="checkoutRef" mode="payment" :pk="publishableKey"
                                        :line-items="lineItems" :success-url="'https://pointickets.com/exitoso/'+ticketId"
                                        :cancel-url="'https://pointickets.com/fallido/'+ticketId" @loading="v => loading = v" />
                                    <button type="button" @click="savePurchase" :disabled="isLoading"
                                        class="edu-btn btn-medium">Pagar <i class="icon-4"></i></button>-->
                                    <div class="container">
                                        <div class="row">
                                            <aside class="col-sm-6">
                                                <article class="card">
                                                    <div class="card-body p-5">
                                                       
                                                        <p class="alert alert-success">Some text success or error</p>

                                                        <form role="form" id="paycometPaymentForm"
                                                            @submit.prevent="customFunction()" method="POST">
                                                            <input type="hidden" name="amount" value="10">
                                                            <input type="hidden" data-paycomet="jetID"
                                                                value="MOjURkhgnIzm3fG8t6A5rwWxT4ZP9SLH">
                                                            <div class="form-group">
                                                                <label for="username">Full name (on the card)</label>
                                                                <div class="input-group">
                                                                    <div class="input-group-prepend">
                                                                        <span class="input-group-text"><i
                                                                                class="fa fa-user"></i></span>
                                                                    </div>
                                                                    <input type="text" class="form-control"
                                                                        name="username" data-paycomet="cardHolderName"
                                                                        placeholder="" required="">
                                                                </div> <!-- input-group.// -->
                                                            </div> <!-- form-group.// -->

                                                            <div class="form-group">
                                                                <label for="cardNumber">Card number</label>
                                                                <div class="input-group">
                                                                    <div class="input-group-prepend">
                                                                        <span class="input-group-text"><i
                                                                                class="fa fa-credit-card"></i></span>
                                                                    </div>
                                                                    <div id="paycomet-pan"
                                                                        style="padding:0px; height:36px;"></div>
                                                                    <input
                                                                        paycomet-style="width: 100%; height: 21px; font-size:14px; padding-left:7px; padding-top:8px; border:0px;"
                                                                        paycomet-name="pan"
                                                                        paycomet-placeholder="Introduce tu tarjeta..."
                                                                        v-model="cardNumber">
                                                                </div> <!-- input-group.// -->
                                                            </div> <!-- form-group.// -->

                                                            <div class="row">
                                                                <div class="col-sm-12">
                                                                    <div class="form-group">
                                                                        <label><span class="hidden-xs">Expiration</span>
                                                                        </label>
                                                                        <div class="form-inline">
                                                                            <select class="form-control"
                                                                                style="width:45%"
                                                                                data-paycomet="dateMonth" v-model="expiryMount">
                                                                                <option>MM</option>
                                                                                <option value="01">01 - January</option>
                                                                                <option value="02">02 - February
                                                                                </option>
                                                                                <option value="03">03 - March</option>
                                                                                <option value="04">04 - April</option>
                                                                                <option value="05">05 - May</option>
                                                                                <option value="06">06 - June</option>
                                                                                <option value="07">07 - July</option>
                                                                                <option value="08">08 - August</option>
                                                                                <option value="09">09 - September
                                                                                </option>
                                                                                <option value="10">10 - October</option>
                                                                                <option value="11">11 - November
                                                                                </option>
                                                                                <option value="12">12 - December
                                                                                </option>
                                                                            </select>
                                                                            <span style="width:10%; text-align: center">
                                                                                / </span>
                                                                            <select class="form-control"
                                                                                style="width:45%"
                                                                                data-paycomet="dateYear" v-model="expiryYear">
                                                                                <option>YY</option>
                                                                                <option value="20">2020</option>
                                                                                <option value="21">2021</option>
                                                                                <option value="22">2022</option>
                                                                                <option value="23">2023</option>
                                                                                <option value="24">2024</option>
                                                                                <option value="25">2025</option>
                                                                                <option value="26">2026</option>
                                                                                <option value="27">2027</option>
                                                                                <option value="28">2028</option>
                                                                                <option value="29">2029</option>
                                                                                <option value="30">2030</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-sm-12">
                                                                    <div class="form-group">
                                                                        <label data-toggle="tooltip" title=""
                                                                            data-original-title="3 digits code on back side of the card">CVV
                                                                            <i
                                                                                class="fa fa-question-circle"></i></label>
                                                                        <div id="paycomet-cvc2"
                                                                            style="height: 36px; padding:0px;"></div>
                                                                        <input paycomet-name="cvc2"
                                                                            paycomet-style="border:0px; width: 100%; height: 21px; font-size:12px; padding-left:7px; padding-tap:8px;"
                                                                            paycomet-placeholder="CVV2"
                                                                            class="form-control" required=""
                                                                            type="text"
                                                                            v-model="cvc2">
                                                                    </div> <!-- form-group.// -->
                                                                </div>

                                                            </div> <!-- row.// -->
                                                            <button class="subscribe btn btn-primary btn-block"
                                                                type="submit"> Confirm </button>
                                                        </form>
                                                        <div id="paymentErrorMsg">

                                                        </div>
                                                    </div> <!-- card-body.// -->
                                                </article> <!-- card.// -->
                                            </aside>
                                        </div>
                                    </div>
                                </div>
                                <br><br>
                                <div class="row justify-content-center">
                                    <br>
                                    <p class="text-center" style="font-size: 11px;">
                                        Tu pago es 100% seguro<br>
                                        Tus transacciones están seguras gracias a nuestro sistema de pago 3D Secure.
                                        Esto
                                        quiere decir que cuando hayas pagado, la entidad de tu tarjeta bancaria te
                                        pedirá un
                                        código que llega por SMS en el que validarán que estas comprando
                                        correctamente.<br>
                                        Además usamos tecnología de seguridad SSL para proteger todos tus datos
                                        personales.
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
            coupon: '',
            couponVerify: false,
            resultCouponAmount: false,
            resultCouponPercentage: false,
            percentgeDiscount: 0,
            amountDiscount: 0,
            errorCoupon: false,
            lineItems: null,
            publishableKey: config.public.STRIPE_PUBLIC_KEY,
            expiryMonth: '',
            expiryYear: '',
            cvc2: '',
            cardNumber: ''

        }
    },
    head() {
        return {
            title: 'Finalizar pago'
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
            this.$refs.checkoutRef.redirectToCheckout();
        },
        userData() {
            const userData = window.localStorage.getItem('userData');
            this.user = JSON.parse(userData);
        },
        async customFunction() {
            const body = {
                terminal: 68638,  // Reemplaza con el valor correcto
                cvc2: '123',
                jetToken: 'MOjURkhgnIzm3fG8t6A5rwWxT4ZP9SLH',
                expiryYear: '2025',
                expiryMonth: '05',
                pan: '5445288852200883',
                order: 'PAY987654321',
                productDescription: 'Random product',
                language: 'es',
                notify: 1,
                cardHolderName: 'Michael Scott',
            };

            // Cabeceras de la solicitud
            const headers = {
                'pAYCOMETAPITOKEN ': '9dfefc472fe9bdf8a6ee2939dfe93f8d11b3082a',
                'accept': 'application/json',
                'content-type': 'application/json',
            };

            try {
                // Realizar la solicitud POST con Axios
                const response = await axios.post('https://rest.paycomet.com/v1/cards', body, { headers });

                // Manejar la respuesta
                console.log('Respuesta:', response.data);
            } catch (error) {
                // Manejar errores
                console.error('Error:', error);
            }
        }
    },
    async mounted() {
        this.ticketId = this.$route.params.id;
        await this.getEvent();
        this.userData();

    },

}
</script>