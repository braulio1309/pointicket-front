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
                                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#gn-ques"
                                        type="button" role="tab" aria-selected="true">Listado</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#rg-ques" type="button"
                                        role="tab" aria-selected="false">Vendidas</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#ad-ques" type="button"
                                        role="tab" aria-selected="false">Compradas</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#com-policy" type="button"
                                        role="tab" aria-selected="false">Pagos</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#pay-option" type="button"
                                        role="tab" aria-selected="false">Cuenta</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#terms-condition"
                                        type="button" role="tab" aria-selected="false">Direcciones</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#bank" type="button"
                                        role="tab" aria-selected="false">Datos bancarios</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#facturation"
                                        type="button" role="tab" aria-selected="false">Facturación</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="tab-content faq-page-tab-content" id="faq-accordion">
                            <div class="tab-pane fade show active" id="gn-ques" role="tabpanel">
                                <div class="row">
                                    <div class="col-sm-5" v-for="ticket in this.tickets">
                                        <div class="card">
                                            <div class="edu-course course-style-1 hover-button-bg-white">
                                                <div class="inner">
                                                    <div class="thumbnail">

                                                        <div class="time-top">
                                                            <span class="duration"><i class="icon-61"></i>{{ ticket.id
                                                            }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="title">
                                                            {{ ticket.attributes.evento.data.attributes.title }}
                                                        </h6>
                                                        <h6 class="title">
                                                            <NuxtLink to="/course/course-details">{{ ticket.attributes.Category }}
                                                            </NuxtLink>
                                                        </h6>
                                                        <h6 class="title">
                                                            <NuxtLink to="/course/course-details">{{ ticket.attributes.Sector }}
                                                            </NuxtLink>
                                                        </h6>
                                                        <h6 class="title">
                                                            <NuxtLink to="/course/course-details">{{ ticket.attributes.Fila }}
                                                            </NuxtLink>
                                                        </h6>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="tab-pane fade" id="rg-ques" role="tabpanel">
                                <div class="row">
                                    <div class="col-sm-5" v-for="ticket in this.ticketsSells">
                                        <div class="card">
                                            <div class="edu-course course-style-1 hover-button-bg-white">
                                                <div class="inner">
                                                    <div class="thumbnail">

                                                        <div class="time-top">
                                                            <span class="duration"><i class="icon-61"></i>{{ ticket.id
                                                            }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="title">
                                                            {{ ticket.attributes.evento.data.attributes.title }}
                                                        </h6>
                                                        <h6 class="title">
                                                            <NuxtLink to="/course/course-details">{{ ticket.attributes.Category }}
                                                            </NuxtLink>
                                                        </h6>
                                                        <h6 class="title">
                                                            <NuxtLink to="/course/course-details">{{ ticket.attributes.Sector }}
                                                            </NuxtLink>
                                                        </h6>
                                                        <h6 class="title">
                                                            <NuxtLink to="/course/course-details">{{ ticket.attributes.Fila }}
                                                            </NuxtLink>
                                                        </h6>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="ad-ques" role="tabpanel">
                                <div class="row">
                                    <div class="col-sm-5" v-for="ticket in this.purchases">
                                        <div class="card">
                                            <div class="edu-course course-style-1 hover-button-bg-white">
                                                <div class="inner">
                                                    <div class="thumbnail">

                                                        <div class="time-top">
                                                            <span class="duration"><i class="icon-61"></i>{{ ticket.id
                                                            }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="content">
                                                        <h6 class="title">
                                                            {{ ticket.attributes.evento.data.attributes.title }}
                                                        </h6>
                                                        <h6 class="title">
                                                            <NuxtLink to="/course/course-details">{{ ticket.attributes.Category }}
                                                            </NuxtLink>
                                                        </h6>
                                                        <h6 class="title">
                                                            <NuxtLink to="/course/course-details">{{ ticket.attributes.Sector }}
                                                            </NuxtLink>
                                                        </h6>
                                                        <h6 class="title">
                                                            <NuxtLink to="/course/course-details">{{ ticket.attributes.Fila }}
                                                            </NuxtLink>
                                                        </h6>
                                                    </div>
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
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#question-18" aria-expanded="true">
                                                    How to Change my Plan using PayPal?
                                                </button>
                                            </h5>
                                            <div id="question-18" class="accordion-collapse collapse show"
                                                data-bs-parent="#faq-accordion">
                                                <div class="accordion-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt labore et dolore magna aliqua enim ad
                                                        minim veniam quis nostrud exercitation ullamco qui laboris nis
                                                        aliquip commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#question-19"
                                                    aria-expanded="false">
                                                    How do I find a school where I want to study?
                                                </button>
                                            </h5>
                                            <div id="question-19" class="accordion-collapse collapse"
                                                data-bs-parent="#faq-accordion">
                                                <div class="accordion-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt labore et dolore magna aliqua enim ad
                                                        minim veniam quis nostrud exercitation ullamco qui laboris nis
                                                        aliquip commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#question-20"
                                                    aria-expanded="false">
                                                    Where should I study abroad?
                                                </button>
                                            </h5>
                                            <div id="question-20" class="accordion-collapse collapse"
                                                data-bs-parent="#faq-accordion">
                                                <div class="accordion-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt labore et dolore magna aliqua enim ad
                                                        minim veniam quis nostrud exercitation ullamco qui laboris nis
                                                        aliquip commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h5 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#question-21"
                                                    aria-expanded="false">
                                                    Where can I find information on private companies?
                                                </button>
                                            </h5>
                                            <div id="question-21" class="accordion-collapse collapse"
                                                data-bs-parent="#faq-accordion">
                                                <div class="accordion-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod tempor incididunt labore et dolore magna aliqua enim ad
                                                        minim veniam quis nostrud exercitation ullamco qui laboris nis
                                                        aliquip commodo consequat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pay-option" role="tabpanel">
                                <div class="login-form-box registration-form">
                                    <h3 class="title">Ingrese sus datos personales</h3>
                                    <form>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="reg-name">Nombre</label>
                                                        <input type="text" v-model="user.username"
                                                            placeholder="Razon social">
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="reg-name">Apellido</label>
                                                        <input type="text" v-model="user.username" placeholder="CIF">
                                                    </div>
                                                </div>
                                                
                                            </div>

                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="reg-name">Fecha de nacimiento</label>
                                                        <input type="date" v-model="user.birthday" placeholder="Fecha">
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="reg-name">email</label>
                                                        <input type="text" v-model="user.email" placeholder="VAT">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="reg-name">Contraseña</label>
                                                        <input type="password" placeholder="Provincia">
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="reg-name">Telefono</label>
                                                        <input type="text" v-model="user.phone" placeholder="Poblacion">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="form-group mt-4">
                                            <button type="button" class="edu-btn btn-medium" @click="updateUser()">Guardar
                                                <i class="icon-4"></i></button>
                                            <div v-if="showResult" class="col-12 success-msg">
                                                <p>{{ resultText }}</p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="terms-condition" role="tabpanel">
                                <div class="login-form-box registration-form">
                                    <h3 class="title">Ingrese su dirección</h3>
                                    <form>
                                        <div class="form-group">
                                            <label for="reg-name">Dirección*</label>
                                            <textarea class="form-control" v-model="user.address" cols="30" rows="4"
                                                placeholder="Ingresa tu dirección"></textarea>
                                        </div>

                                        <div class="form-group">
                                            <button @click="updateUser()" type="button" class="edu-btn btn-medium">Guardar
                                                <i class="icon-4"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="bank" role="tabpanel">
                                <div class="login-form-box registration-form">
                                    <h3 class="title">Ingrese sus datos bancarios</h3>
                                    <form>
                                        <div class="form-group">
                                            <label for="reg-name">Títular*</label>
                                            <input type="text" v-model="user.holder" placeholder="Nombre">
                                        </div>
                                        <div class="form-group">
                                            <label for="log-email">IBAN*</label>
                                            <input type="email" v-model="user.iban" placeholder="Email">
                                        </div>
                                        <div class="form-group">
                                            <label for="reg-name">Tipo de cuenta*</label>
                                            <input type="text" v-model="user.type_account" placeholder="Nombre">
                                        </div>

                                        <div class="form-group">
                                            <button @click="updateUser()" type="button" class="edu-btn btn-medium">Guardar
                                                <i class="icon-4"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="facturation" role="tabpanel">
                                <div class="login-form-box registration-form">
                                    <h3 class="title">Ingrese sus datos de facturación</h3>
                                    <form>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="reg-name">Razon social*</label>
                                                        <input type="text" v-model="user.social_reason"
                                                            placeholder="Razon social">
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="reg-name">CIF*</label>
                                                        <input type="text" v-model="user.cif" placeholder="CIF">
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="reg-name">Vat*</label>
                                                        <input type="text" v-model="user.vat" placeholder="VAT">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="reg-name">País*</label>
                                                        <input type="text" v-model="user.country" placeholder="Pais">
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="reg-name">Provincia*</label>
                                                        <input type="text" v-model="user.province" placeholder="Provincia">
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="reg-name">Poblacion*</label>
                                                        <input type="text" v-model="user.poblation" placeholder="Poblacion">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <label for="reg-name">Domicilio fiscal*</label>
                                                        <input type="text" v-model="user.tax_domicile"
                                                            placeholder="Domicilio">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div class="form-group">
                                            <button type="button" class="edu-btn btn-medium" @click="updateUser()">Guardar
                                                <i class="icon-4"></i></button>
                                            <div v-if="showResult" class="col-12 success-msg">
                                                <p>{{ resultText }}</p>
                                            </div>
                                        </div>
                                    </form>
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
        getAllTickets(){
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