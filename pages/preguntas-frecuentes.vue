<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <section class="edu-section-gap faq-page-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="faq-page-nav">
                            <h3 class="title">Bienvenido</h3>
                            <p>{{ this.user.username }}</p>
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#rg-ques"
                                        type="button" role="tab" aria-selected="false">Comprar entradas</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#ad-ques" type="button"
                                        role="tab" aria-selected="false">Recibir entradas</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#com-policy" type="button"
                                        role="tab" aria-selected="false">¿Puedo cancelar mi compra?</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#pay-option" type="button"
                                        role="tab" aria-selected="false">¿Cómo me pongo en contacto con
                                        Pointickets?</button>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="tab-content faq-page-tab-content" id="faq-accordion">

                            <div class="tab-pane fade active" id="rg-ques" role="tabpanel">
                                <div class="faq-accordion">
                                    <div class="accordion">

                                        <div class="accordion-item">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#question-19"
                                                    aria-expanded="false">
                                                    ¿Mis asientos estarán juntos?
                                                </button>
                                            </h5>
                                            <div id="question-19" class="accordion-collapse collapse"
                                                data-bs-parent="#faq-accordion">
                                                <div class="accordion-body">
                                                    <p>Sí, las entradas adquiridas del mismo anuncio estarán juntas, a menos
                                                        que se especifique algo distinto durante el proceso de confirmación
                                                        de compra.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#question-20"
                                                    aria-expanded="false">
                                                    ¿En qué lugar estarán mis asientos?
                                                </button>
                                            </h5>
                                            <div id="question-20" class="accordion-collapse collapse"
                                                data-bs-parent="#faq-accordion">
                                                <div class="accordion-body">
                                                    <p>Todos los detalles disponibles sobre la localización de tu asiento se
                                                        muestran en tu email de confirmación.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="ad-ques" role="tabpanel">
                                <div class="faq-accordion">
                                    <div class="accordion">

                                        <div class="accordion-item">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#question-19"
                                                    aria-expanded="false">
                                                    ¿Cuándo recibiré mis entradas?
                                                </button>
                                            </h5>
                                            <div id="question-19" class="accordion-collapse collapse"
                                                data-bs-parent="#faq-accordion">
                                                <div class="accordion-body">
                                                    <p>Deberías recibir tus entradas, entradas electrónicas incluidas, en la
                                                        semana anterior al evento, ya que los organizadores suelen emitir
                                                        las entradas en fechas muy próximas al evento, a menudo en la misma
                                                        semana.<br><br>
                                                        Puedes seguir el estado de tu pedido en el apartado Compras.<br><br>
                                                        Formas de garantizar que recibirás tus entradas a tiempo: <br><br>
                                                        • Asegúrate de que tu dirección de entrega es correcta. Comprueba tu
                                                        dirección de entrega aquí. <br>
                                                        • Asegúrate de elegir una dirección de entrega donde alguien pueda
                                                        firmar la entrega, como, por ejemplo, en tu lugar de trabajo. <br>
                                                        • Si viajas al evento, añade tu dirección de viaje y la fecha de
                                                        comienzo del viaje cuanto antes y nos aseguraremos de que las
                                                        entradas se envíen al lugar correcto.<br>
                                                        • Asegúrate de que el número de teléfono que aparece en tu cuenta es
                                                        correcto, por si tenemos que ponernos en contacto contigo.

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#question-20"
                                                    aria-expanded="false">
                                                    ¿Por qué el precio que aparece en la entrada es diferente del que pago
                                                    yo?
                                                </button>
                                            </h5>
                                            <div id="question-20" class="accordion-collapse collapse"
                                                data-bs-parent="#faq-accordion">
                                                <div class="accordion-body">
                                                    <p>Las entradas de Pointickets se venden a precios que pueden estar por
                                                        encima, por debajo o igual que el valor nominal que aparece en la
                                                        entrada. <br><br>
                                                        El precio de las entradas para los eventos más populares puede ser
                                                        más alto que el valor nominal debido a la alta demanda. En
                                                        Pointickets muchas entradas se venden más baratas que el precio
                                                        nominal.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#question-21"
                                                    aria-expanded="false">
                                                    ¿Por qué en mis entradas aparece el nombre de otra persona?
                                                </button>
                                            </h5>
                                            <div id="question-21" class="accordion-collapse collapse"
                                                data-bs-parent="#faq-accordion">
                                                <div class="accordion-body">
                                                    <p>Pointickets permite que terceras partes, particulares incluidos,
                                                        vendan entradas en su plataforma. En algunos casos, puede aparecer
                                                        el nombre del comprador original en la entrada. La entrada sigue
                                                        siendo válida. Tu nombre no tiene que ser el mismo que aparece en la
                                                        entrada para que puedas acceder al evento. <br><br>
                                                        Si fuera necesario personalizar la entrada con el nombre del
                                                        asistente nuestro equipo de Atención al Cliente contactará contigo.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="com-policy" role="tabpanel">
                                <div class="faq-accordion">
                                    <div class="accordion">

                                        <div class="accordion-item">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#question-23"
                                                    aria-expanded="true">
                                                    ¿Puedo cancelar mi compra?
                                                </button>
                                            </h5>
                                            <div id="question-23" class="accordion-collapse collapse"
                                                data-bs-parent="#faq-accordion">
                                                <div class="accordion-body">
                                                    <p>La satisfacción de nuestros clientes es fundamental para nosotros,
                                                        pero como plataforma de intercambio de entradas entre particulares,
                                                        nuestras transacciones son finales, por lo que ni el comprador ni el
                                                        vendedor pueden cancelar el pedido por su parte. Estas políticas
                                                        vigentes aseguran la aplicación de la Garantía FanProtect para todos
                                                        nuestros clientes.<br><br>
                                                        No obstante si una vez realizada la compra tuvieras problemas para
                                                        acudir al evento ponte en contacto con nuestro equipo de Atención al
                                                        Cliente, donde intentaremos ofrecerte la mejor solución posible.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="pay-option" role="tabpanel">
                                <div class="faq-accordion">
                                    <div class="accordion">

                                        <div class="accordion-item">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#question-24"
                                                    aria-expanded="true">
                                                    ¿Cómo me pongo en contacto con Pointickets?
                                                </button>
                                            </h5>
                                            <div id="question-24" class="accordion-collapse collapse"
                                                data-bs-parent="#faq-accordion">
                                                <div class="accordion-body">
                                                    <p>Mandanos un Whatsapp. <br>
                                                        Llámanos. <br>
                                                        Mandanos un mensaje
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <CTAOne />

        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<script>
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import CTAOne from '~~/components/cta/CTAOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';
import axios from 'axios';
import qs from 'qs';

export default {
    components: {
        HeaderOne,
        BreadCrumbTwo,
        CTAOne,
        FooterOne,
        ScrollToTop
    },
    head() {
        return {
            title: 'Perfil'
        }
    },
    data() {
        return {
            user: '',
            logged: '',
            showResult: false,
            tickets: '',
            purchases: '',
            ticketsSells: ''
        }
    },
    mounted() {
        this.isLogged();
        this.getUserData();
        this.getTicketsSells();
        this.getTicketsBuy();
        this.getAllTickets();
    },
    methods: {
        isLogged() {

            const jwt = window.localStorage.getItem('jwt');
            const userData = window.localStorage.getItem('userData');
            console.log(jwt)

            // Si tanto el token como los datos del usuario existen, se considera que el usuario está logueado
            this.user = JSON.parse(userData);
            console.log(this.user);
            this.logged = !!jwt && !!userData;
        },
        updateUser() {
            const config = useRuntimeConfig();
            axios
                .put(`${config.public.apiBase}users/` + this.user.id, this.user, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                })
                .then((response) => {
                    // Maneja la respuesta exitosa, por ejemplo, muestra un mensaje de éxito
                    console.log('Usuario actualizado con éxito', response.data);

                    // También puedes actualizar los datos del usuario en tu componente Vue
                    this.user = response.data; // Actualiza "user" con los nuevos datos
                    this.showResult = true;
                    setTimeout(() => {
                        this.showResult = false;
                    }, 2000);
                    window.localStorage.setItem('userData', JSON.stringify(response.data))
                })
                .catch((error) => {
                    // Maneja los errores, por ejemplo, muestra un mensaje de error
                    console.error('Error al actualizar el usuario', error);
                });
        },
        getUserData() {
            const config = useRuntimeConfig();

            axios
                .get(`${config.public.apiBase}users/me?populate=*`, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                })
                .then((response) => {
                    console.log(response.data)
                    //this.tickets = response.data.tickets;
                    //this.purchases = response.data.compras;
                })
                .catch((error) => {
                    console.error('Error al actualizar el usuario', error);
                });
        },
        getTicketsSells() {
            const config = useRuntimeConfig();

            const query = qs.stringify({
                filters: {
                    user: {
                        id: {
                            $eq: this.user.id,
                        }
                    },
                    compra: {
                        id: {
                            $not: null,
                        }

                    },
                },
            }, {
                encodeValuesOnly: true, // prettify URL
            });
            axios
                .get(`${config.public.apiBase}tickets/?populate=*&${query}`, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                })
                .then((response) => {
                    console.log(response.data)
                    this.ticketsSells = response.data.data;
                })
                .catch((error) => {
                    console.error('Error al actualizar el usuario', error);
                });
        },
        getTicketsBuy() {
            const config = useRuntimeConfig();

            const query = qs.stringify({
                filters: {
                    compra: {
                        id: {
                            $not: this.user.id,
                        }

                    },
                },
            }, {
                encodeValuesOnly: true, // prettify URL
            });
            axios
                .get(`${config.public.apiBase}tickets/?populate=*&${query}`, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                })
                .then((response) => {
                    this.purchases = response.data.data;
                })
                .catch((error) => {
                    console.error('Error al actualizar el usuario', error);
                });
        },
        getAllTickets() {
            const config = useRuntimeConfig();

            const query = qs.stringify({
                filters: {
                    user: {
                        id: {
                            $eq: this.user.id,
                        }
                    },
                },
            }, {
                encodeValuesOnly: true, // prettify URL
            });
            axios
                .get(`${config.public.apiBase}tickets/?populate=*&${query}`, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                })
                .then((response) => {
                    this.tickets = response.data.data;
                })
                .catch((error) => {
                    console.error('Error al actualizar el usuario', error);
                });
        }
    }

}
</script>