<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo pageTitle='Finalizar pago' title='Finalizar' />

        <section class="checkout-page-area section-gap-equal" v-if="this.ticket">
            <div class="container">
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
                                                <td> {{ this.ticket.attributes.Category }}, {{ this.ticket.attributes.evento.data.attributes.title }}, Fila {{ this.ticket.attributes.Fila }}</td>
                                                <td><span class="quantity">x {{ this.ticket.attributes.seat }}</span></td>
                                                <td> €{{ this.ticket.attributes.endPrice }}</td>
                                            </tr>

                                            <tr class="order-total">
                                                <td>Iva</td>
                                                <td>€{{this.ticket.attributes.endPrice * 0.1}}</td>
                                            </tr>

                                            <tr class="order-total">
                                                <td>Total</td>
                                                <td>€{{this.ticket.attributes.endPrice * this.ticket.attributes.seat + (this.ticket.attributes.endPrice * this.ticket.attributes.seat * 0.1)}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="order-payment">
                                <div class="row justify-content-center">
                                    <button type="button" @click="savePurchase" class="edu-btn btn-medium">Pagar <i class="icon-4"></i></button>
                                </div>
                                <br><br>
                                <div class="row justify-content-center">
                                    <br>
                                    <p class="text-center" style="font-size: 11px;">
                                        Tu pago es 100% seguro<br>
                                        Tus transacciones están seguras gracias a nuestro sistema de pago 3D Secure. Esto
                                        quiere decir que cuando hayas pagado, la entidad de tu tarjeta bancaria te pedirá un
                                        código que llega por SMS en el que validarán que estas comprando correctamente.<br>
                                        Además usamos tecnología de seguridad SSL para proteger todos tus datos personales.
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
        return {
            variable: false,
            title: 'Pagar',
            ticketId: null,
            ticket: null,
            user: ''
            
        }
    },
    head() {
        return {
            title: 'Checkout Page'
        }
    },
    methods: {
        
        getEvent() {
            const config = useRuntimeConfig();
            axios
                .get(`${config.public.apiBase}tickets/` + this.ticketId + '?populate=*', {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                })
                .then((response) => {
                    this.ticket = response.data.data;
                })
                .catch((error) => {
                    console.error('Error al buscar al evento', error);
                });
        },
        savePurchase() {
            const config = useRuntimeConfig();
            let data = {
                user: this.user,
                ticket: this.ticket,
                subtotal: this.ticket.attributes.endPrice * this.ticket.attributes.seat,
                total: this.ticket.attributes.endPrice * this.ticket.attributes.seat + (this.ticket.attributes.endPrice * this.ticket.attributes.seat * 0.1),
                taxes: this.ticket.attributes.endPrice * this.ticket.attributes.seat * 0.1,
            };

            console.log(data)
            axios
                .post(`${config.public.apiBase}purchases`, { data }, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                })
                .then((response) => {
                   this.message = response.data; 
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
    mounted() {
        this.ticketId = this.$route.params.id;
        this.getEvent();
        this.userData();
    },

}
</script>