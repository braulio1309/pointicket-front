<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo title='Pago exitoso' />

        <section class="checkout-page-area section-gap-equal">
            <div class="container">
                <div class="col-12">
                    <div class="alert alert-success" role="alert">
                        <h4 class="alert-heading">¡Compra exitosa!</h4>
                        <p>Te llegará un correo con los detalles de tu compra. </p>
                        Referencia: 0000{{ this.ticketId }}
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
            title: 'Pago exitoso',
            ticketId: null,
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
            data: null,
            validatePrice: {
                'Classic': 33,
                'Classic Hora Flexible': 40,
                'Premium': 50,
            }
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
            let response = await axios
                .get(`${config.public.apiBase}tickets/` + this.ticketId + '?populate=*', {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                });
            this.ticket = response.data.data;
        },

        async getCoupon(coupon) {
            const config = useRuntimeConfig();
            let response = await axios
                .get(`${config.public.apiBase}coupons/` + coupon, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                });
            return response.data.data;
        },
        async savePurchase() {
            const config = useRuntimeConfig();
            const urlParams = new URLSearchParams(window.location.search);
            const reference = urlParams.get('r');
            let data = {
                user: this.user,
                ticket: this.ticket,
                subtotal: this.ticket.attributes.endPrice * this.ticket.attributes.seat,
                total: parseFloat(localStorage.getItem('price')),
                taxes: this.ticket.attributes.endPrice * this.ticket.attributes.seat * 0.21,
                descuento: this.coupon,
                bankReference: reference
            };
            localStorage.removeItem('coupon');
            localStorage.removeItem('price');
            localStorage.removeItem('ticketId');
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
        async saveTour() {
            const config = useRuntimeConfig();
            const urlParams = new URLSearchParams(window.location.search);
            const reference = urlParams.get('r');
            let dataTour = JSON.parse(localStorage.getItem('tour'));
            dataTour.user = this.user;
            const tourCreated = await axios.post(`${config.public.apiBase}tours-santiago-bernabeu`, { data: dataTour }, {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                },
            });

            let dataPurchase = {
                user: this.user,
                tour: tourCreated.data.data,
                subtotal: this.validatePrice[this.data.type] * this.data.seat,
                total: this.validatePrice[this.data.type] * this.data.seat + (this.validatePrice[this.data.type] * this.data.seat * 0.21),
                taxes: this.validatePrice[this.data.type] * this.data.seat * 0.21,
                bankReference: reference
            };
            const purchase = await axios.post(`${config.public.apiBase}purchases`, { data: dataPurchase }, {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                },
            });
            this.message = response.data;
            this.result = true;
            localStorage.removeItem('tour');

        },
    },
    async mounted() {
        this.data = (localStorage.getItem('tour')) ? JSON.parse(localStorage.getItem('tour')) : null;
        this.userData();
        if (this.data) {
            this.ticketId = parseInt(localStorage.getItem('ticketId'));
            console.log('Entrada', this.ticketId)
            await this.getEvent();
            this.userData();
            this.savePurchase();
            if (localStorage.getItem('coupon'))
                this.coupon = await this.getCoupon(parseInt(localStorage.getItem('couponId')));
        } else {
            this.saveTour();
        }


    },

}
</script>