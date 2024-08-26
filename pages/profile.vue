<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <section v-if="show" class="edu-section-gap faq-page-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="faq-page-nav">
                            <h3 class="title">Bienvenido</h3>
                            <p>{{ user.fullname }}</p>
                            <ul class="nav nav-tabs" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#gn-ques"
                                        type="button" role="tab" aria-selected="true">Tus eventos</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#rg-ques"
                                        type="button" role="tab" aria-selected="false">Vendidas</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#ad-ques"
                                        type="button" role="tab" aria-selected="false">Compradas</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#com-policy"
                                        type="button" role="tab" aria-selected="false">Pagos</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#pay-option"
                                        type="button" role="tab" aria-selected="false">Cuenta</button>
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
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" type="button" @click="logout">Cerrar sesión</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="tab-content faq-page-tab-content" id="faq-accordion">
                            <div class="tab-pane fade show active" id="gn-ques" role="tabpanel">
                                <div class="row">

                                    <table v-if="tickets.length > 0" class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Evento</th>
                                                <th scope="col">Sector</th>
                                                <th scope="col">Categoría</th>
                                                <th scope="col">Fila</th>
                                                <th scope="col">Precio</th>
                                                <th scope="col">Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in tickets" :key="index">
                                                <td scope="row">{{ item.id }}</td>
                                                <td scope="row">{{ item.attributes.evento.data.attributes.title }}</td>
                                                <td scope="row">{{ item.attributes.Sector }}</td>
                                                <td scope="row">{{ item.attributes.Category }}</td>
                                                <td scope="row">{{ item.attributes.Fila }}</td>
                                                <td scope="row">{{ item.attributes.endPrice }} €</td>
                                                <td scope="row"><button :class='`btn btn-${(item.attributes.publishedAt)?"danger": "success"}`'
                                                        @click="StatusTicket(item.id, item.attributes.publishedAt)">{{ (item.attributes.publishedAt)? "Ocultar": "Publicar" }}</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div class="tab-pane fade" id="rg-ques" role="tabpanel">
                                <div class="row">
                                    <table v-if="ticketsSells.length > 0" class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Evento</th>
                                                <th scope="col">Sector</th>
                                                <th scope="col">Categoría</th>
                                                <th scope="col">Fila</th>
                                                <th scope="col">Precio</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in ticketsSells" :key="index">
                                                <td scope="row">{{ item.id }}</td>
                                                <td scope="row">{{ item.attributes.evento.data.attributes.title }}</td>
                                                <td scope="row">{{ item.attributes.Sector }}</td>
                                                <td scope="row">{{ item.attributes.Category }}</td>
                                                <td scope="row">{{ item.attributes.Fila }}</td>
                                                <td scope="row">{{ item.attributes.endPrice }} €</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="ad-ques" role="tabpanel">
                                <div class="row">
                                    <table v-if="purchases.length > 0" class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Evento</th>
                                                <th scope="col">Sector</th>
                                                <th scope="col">Categoría</th>
                                                <th scope="col">Fila</th>
                                                <th scope="col">Precio</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, index) in purchases" :key="index">
                                                <td scope="row">{{ item.id }}</td>
                                                <td scope="row">{{ item.attributes.evento.data.attributes.title }}</td>
                                                <td scope="row">{{ item.attributes.Sector }}</td>
                                                <td scope="row">{{ item.attributes.Category }}</td>
                                                <td scope="row">{{ item.attributes.Fila }}</td>
                                                <td scope="row">{{ item.attributes.endPrice }} €</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="com-policy" role="tabpanel">

                            </div>
                            <div class="tab-pane fade" id="pay-option" role="tabpanel">
                                <div class="login-form-box registration-form">

                                    <h3 class="title">Ingrese sus datos personales</h3>
                                    <div v-if="showResult" class="col-12">
                                        <div class="alert alert-success" role="alert">
                                            Se han guardado exitosamente
                                        </div>
                                    </div>
                                    <form>
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <label for="reg-name">Nombre y apellido</label>
                                                        <input type="text" v-model="user.fullname" placeholder="Nombre">
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
                                                        <label for="reg-name">Telefono</label>
                                                        <input type="text" v-model="user.phone" placeholder="Telefono">
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <label for="reg-name">email</label>
                                                        <input type="text" v-model="user.email" placeholder="Email">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="form-group mt-4">
                                            <button type="button" class="edu-btn btn-medium" @click="updateUser">Guardar
                                                <i class="icon-4"></i></button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="terms-condition" role="tabpanel">
                                <div class="login-form-box registration-form">
                                    <h3 class="title">Ingrese su dirección</h3>
                                    <div v-if="showResult" class="col-12">
                                        <div class="alert alert-success" role="alert">
                                            Se han guardado exitosamente
                                        </div>
                                    </div>
                                    <form>
                                        <div class="form-group">
                                            <label for="reg-name">Dirección*</label>
                                            <textarea class="form-control" v-model="user.address" cols="30" rows="4"
                                                placeholder="Ingresa tu dirección"></textarea>
                                        </div>

                                        <div class="form-group">
                                            <button @click="updateUser" type="button" class="edu-btn btn-medium">Guardar
                                                <i class="icon-4"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="bank" role="tabpanel">
                                <div class="login-form-box registration-form">
                                    <h3 class="title">Ingrese sus datos bancarios</h3>
                                    <div v-if="showResult" class="col-12">
                                        <div class="alert alert-success" role="alert">
                                            Se han guardado exitosamente
                                        </div>
                                    </div>
                                    <form>
                                        <div class="form-group">
                                            <label for="reg-name">Títular*</label>
                                            <input type="text" v-model="user.holder" placeholder="Titular">
                                        </div>
                                        <div class="form-group">
                                            <label for="log-email">IBAN*</label>
                                            <input type="email" v-model="user.iban" placeholder="IBAN">
                                        </div>
                                        <div class="form-group">
                                            <label for="reg-name">Tipo de cuenta*</label>
                                            <input type="text" v-model="user.type_account" placeholder="Tipo de cuenta">
                                        </div>

                                        <div class="form-group">
                                            <button @click="updateUser()" type="button"
                                                class="edu-btn btn-medium">Guardar
                                                <i class="icon-4"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="facturation" role="tabpanel">
                                <div class="login-form-box registration-form">
                                    <h3 class="title">Ingrese sus datos de facturación</h3>
                                    <div v-if="showResult" class="col-12">
                                        <div class="alert alert-success" role="alert">
                                            Se han guardado exitosamente
                                        </div>
                                    </div>
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
                                                        <input type="text" v-model="user.province"
                                                            placeholder="Provincia">
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group">
                                                        <label for="reg-name">Poblacion*</label>
                                                        <input type="text" v-model="user.poblation"
                                                            placeholder="Poblacion">
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
                                            <button type="button" class="edu-btn btn-medium"
                                                @click="updateUser()">Guardar
                                                <i class="icon-4"></i></button>

                                        </div>
                                    </form>
                                </div>
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

<script>
definePageMeta({
    title: 'Compra entradas del Real Madrid en el Bernabéu | Pointickets',
    description: 'Compra y vende tus entradas para los mejores partidos de fútbol en el Bernabéu con Pointickets, la plataforma líder en venta de entradas deportivas. '
})
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
            show: false,
            ticketsSells: '',
            items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' }
            ]
        }
    },
    mounted() {
        const config = useRuntimeConfig();

        axios
            .get(`${config.public.apiBase}users/me`, {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                },
            })
            .then((response) => {
                this.show = true;
                this.isLogged();
                this.getUserData();
                this.getTicketsSells();
                this.getTicketsBuy();
                this.getAllTickets();
            })
            .catch((error) => {
                window.localStorage.setItem('notLogged', 'Debes iniciar sesión para poder comprar o vender una entrada');
                localStorage.setItem('lastRoute', 'checkout');
                this.$router.push('/login');
            });

    },
    methods: {
        async StatusTicket(id, publishedAt) {
            const config = useRuntimeConfig();

            const now = new Date();

            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Los meses comienzan en 0
            const day = String(now.getDate()).padStart(2, '0');

            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            console.log(publishedAt)
            try {
                const response = await axios.put(
                    `${config.public.apiBase}tickets/${id}`,{
                        data: {
                            publishedAt: (publishedAt)? null: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
                        }
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${window.localStorage.getItem('jwt')}`
                        }
                    }
                );
                this.getAllTickets();
                console.log('Respuesta del servidor:', response.data);
            } catch (error) {
                console.error('Error al actualizar:', error);
            }
        },
        isLogged() {

            const jwt = window.localStorage.getItem('jwt');
            const userData = window.localStorage.getItem('userData');

            // Si tanto el token como los datos del usuario existen, se considera que el usuario está logueado
            this.user = JSON.parse(userData);
            console.log(this.user);
            this.logged = !!jwt && !!userData;
        },
        updateUser() {
            const config = useRuntimeConfig();
            axios
                .put(`${config.public.apiBase}users/${this.user.id}`, this.user, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                })
                .then((response) => {
                    // Maneja la respuesta exitosa, por ejemplo, muestra un mensaje de éxito
                    console.log('Usuario actualizado con éxito', response.data);

                    // También puedes actualizar los datos del usuario en tu componente Vue
                    this.showResult = true;
                    setTimeout(() => {
                        this.showResult = false;
                    }, 2000);
                    window.localStorage.setItem('userData', JSON.stringify(response.data));
                    this.isLogged();
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
        logout() {
            window.localStorage.removeItem('jwt');
            window.localStorage.removeItem('user');
            this.$router.push('/');
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
                        user: {
                            id: {
                                $eq: this.user.id,
                            }
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
                    console.log('compradas', this.purchases, response.data)
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
                .get(`${config.public.apiBase}tickets/?populate=*&${query}&publicationState=preview`, {
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