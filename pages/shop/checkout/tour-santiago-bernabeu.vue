<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo pageTitle='Finalizar pago' title='Finalizar' />

        <section class="checkout-page-area section-gap-equal" v-if="data">
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
                                    <h4 class="title">Tu orden para Tour del Santiago Bernabeu</h4>
                                    <table class="table summery-table">
                                        <tbody>
                                            <tr>
                                                <td> Tipo: {{
            data.type }}, Fecha: {{ data.date }}, {{ data.hour }}</td>
                                                <td><span class="quantity">x {{ data.seat }}</span></td>
                                                <td> €{{ parseFloat(validatePrice[data.type]).toFixed(2) }}</td>
                                            </tr>

                                            <tr class="order-total">
                                                <td>Subtotal:</td>
                                                <td>€{{ parseFloat(validatePrice[data.type] * data.seat).toFixed(2) }}</td>
                                            </tr>

                                            <tr class="order-total">
                                                <td>Iva</td>
                                                <td>€{{ parseFloat(validatePrice[data.type] * 0.21 * data.seat).toFixed(2) }}</td>
                                            </tr>

                                            <tr v-if="resultCouponAmount || resultCouponPercentage" class="order-total">
                                                <td>Descuento</td>
                                                <td v-if="resultCouponAmount">€{{ amountDiscount }}</td>
                                                <td v-if="resultCouponPercentage">{{ percentageDiscount }} %</td>

                                            </tr>

                                            <tr class="order-total">
                                                <td>Gastos de gestión</td>
                                                <td >€ {{fees}}</td>
                                            </tr>

                                            <tr class="order-total">
                                                <td>Total</td>
                                                <td >€{{ parseFloat((validatePrice[data.type] * data.seat +
            (validatePrice[data.type] * data.seat * 0.21)) + fees).toFixed(2) }}
                                                </td>
                                            </tr>

                                            

                                            <tr v-if="resultCouponAmount || resultCouponPercentage" class="order-total">
                                                <td>Total con descuento aplicado</td>

                                                <td v-if="resultCouponAmount">€{{ parseFloat(((validatePrice[data.type] * data.seat +
            (validatePrice[data.type] * data.seat * 0.21)) -
            amountDiscount) + fees).toFixed(2)}}
                                                </td>
                                                <td v-if="resultCouponPercentage">€{{ parseFloat(((validatePrice[data.type] * data.seat +
            (validatePrice[data.type] * data.seat * 0.21)) -
            ((percentageDiscount / 100) * (validatePrice[data.type] * data.seat +
                                                    (validatePrice[data.type] * data.seat * 0.21)))) + fees).toFixed(2) }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="order-payment">
                                <div class="row justify-content-center">
                                    
                                    <button type="button" class="edu-btn btn-medium" @click="customFunction()">Iniciar proceso de pago</button>

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

export default {
    components: {
        HeaderOne,
        BreadCrumbTwo,
        FooterOne,
        ScrollToTop
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
            data: null,
            validatePrice: {
                'Classic': 35,
                'Classic Hora Flexible': 50,
                'Premium': 65,
            }
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
            let response = await axios
                .get(`${config.public.apiBase}tickets/` + this.ticketId + '?populate=*', {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                });
            this.ticket = response.data.data;
            this.lineItems = [{
                price: this.ticket.attributes.price_id,
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
            console.log(this.data)
            let finalAmount = (this.validatePrice[this.data.type] * this.data.seat +
            (this.validatePrice[this.data.type] * this.data.seat * 0.21)) + this.fees;
            if(this.resultCouponPercentage){
                finalAmount -= (this.percentageDiscount / 100) * finalAmount;
            }

            if(this.resultCouponAmount){
                finalAmount -= this.amountDiscount;
            }

            finalAmount += this.fees;
            localStorage.setItem('price', finalAmount);

            const url = `https://tpv.pointickets.com/?price=${parseFloat(finalAmount).toFixed(2)}`;

            window.location.href = url;
        }
    },
    mounted() {
        this.data = JSON.parse(localStorage.getItem('tour'));
        console.log(this.data);
        this.userData();
    }
}
</script>