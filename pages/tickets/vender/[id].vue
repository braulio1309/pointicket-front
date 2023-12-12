<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />
        <section class="">
            <div class="container">

                <div class="edu-course-area course-area-3">
                    <div v-if="finish" class="col-12 mt--50 mb--50">
                        <div class="alert alert-success" role="alert">
                            <h4 class="alert-heading">¡Entrada registrada exitosamente!</h4>
                            <p>Tu entrada está en una etapa de aprobación, te llegará un correo en el momento de la
                                aprobación.</p>
                            <hr>
                            <p class="mb-0">Cualquier duda puedes contactarnos por los medios indicados.
                            </p>
                        </div>
                    </div>
                    <div class="container" v-if="!finish">
                        <div class="isotope-wrapper" style="margin-top: 100px;">
                            <div class="isotop-button isotop-filter nav">
                                <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#undergraduate"
                                    role="tab">Tipo de entrada</button>
                                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#graduate" role="tab"
                                    :disabled="!type || !sector || !category || !row">Precio
                                    de venta</button>
                                <button v-if="this.type == 'Electrónica'" class="nav-link" data-bs-toggle="pill"
                                    data-bs-target="#file" role="tab" :disabled="!startPrice || !newPrice">Carga la
                                    entrada</button>
                                <button v-if="!this.userCopy.iban || !this.userCopy.holder || !this.userCopy.type_account"
                                    class="nav-link" data-bs-toggle="pill" :disabled="!startPrice || !newPrice"
                                    data-bs-target="#bank" role="tab">Datos
                                    bancarios</button>

                            </div>
                            <div class="tab-content" v-if="this.event">
                                <div class="tab-pane fade show active" id="undergraduate" role="tabpanel">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12">

                                            <div class="row row--30">
                                                <div class="col-lg-6 edu-blog-sidebar">
                                                    <div class="privacy-policy purchase-guide">
                                                        <div class="text-block text-center">
                                                            <img
                                                                src="../../../assets/images/compra-entradas/distribucion.png">
                                                        </div>

                                                        <div class="text-block">
                                                            <h4 class="title">{{ this.event.data.attributes.title }}</h4>
                                                            <p>{{ this.event.data.attributes.description }}</p>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="edu-blog-sidebar">
                                                        <div class="col-lg-12 order-lg-1 login-form-box">

                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <label>Tipo de entrada</label>
                                                                        <select class="edu-select" v-model="type">
                                                                            <option value="Papel">Papel</option>
                                                                            <option value="Electrónica">Electrónica</option>
                                                                            <option value="Móvil">Móvil</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <label>Categoria</label>
                                                                        <select class="edu-select" v-model="category">
                                                                            <option value="VIP PREMIUM">VIP PREMIUM</option>
                                                                            <option value="VIP">VIP</option>
                                                                            <option value="Segundo Anfiteatro Lateral">
                                                                                Segundo Anfiteatro Lateral</option>
                                                                            <option value="Tercer Anfiteatro Lateral">Tercer
                                                                                Anfiteatro Lateral</option>
                                                                            <option value="Cuarto Anfiteatro Lateral">Cuarto
                                                                                Anfiteatro Lateral</option>
                                                                            <option value="Grada De Fondo">Grada De Fondo
                                                                            </option>
                                                                            <option value="Tribuna de Fondo">Tribuna de
                                                                                Fondo</option>
                                                                            <option value="Primer Anfiteatro de Fondo">
                                                                                Primer Anfiteatro de Fondo</option>
                                                                            <option value="Segundo Anfiteatro de Fondo">
                                                                                Segundo Anfiteatro de Fondo</option>
                                                                            <option value="Tercer Anfiteatro de Fondo">
                                                                                Tercer Anfiteatro de Fondo</option>
                                                                            <option value="Cuarto Anfiteatro de Fondo">
                                                                                Cuarto Anfiteatro de Fondo</option>
                                                                        </select>

                                                                    </div>

                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <label>Sector</label>
                                                                        <select class="edu-select" v-model="sector">
                                                                            <option value="Lateral Oeste">Lateral Oeste
                                                                            </option>
                                                                            <option value="Lateral Este">Lateral Este
                                                                            </option>
                                                                            <option value="Fondo Norte">Fondo Norte</option>
                                                                            <option value="Fondo Sur">Fondo Sur</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <label>Fila</label>
                                                                        <input type="text" class="form-control"
                                                                            placeholder="Fila" v-model="row">
                                                                    </div>

                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <label>Cantidad de asientos</label>
                                                                        <input type="number" class="form-control"
                                                                            placeholder="Asientos" v-model="seat" max="4"
                                                                            min="1">
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <button v-if="type && sector && category && row" @click="nextTab" class="edu-btn btn-medium mt--50">Siguiente</button>
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
                                <div class="tab-pane fade" id="graduate" role="tabpanel">
                                    <div class="row ">
                                        <div class="col-md-12 col-lg-12" style="padding: 100px;">
                                            <div class="col-lg-12 order-lg-1 col-pr--35 login-form-box">

                                                <div class="row">
                                                    <div class="col-12 mb--50">
                                                        <div class="form-group">
                                                            <label>¿Qué precio tiene la entrada originalmente?</label>
                                                            <input type="number" class="form-control"
                                                                placeholder="Precio de adquisición" v-model="startPrice">
                                                        </div>

                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <label>¿Cuanto quieres cobrar por la entrada?</label>
                                                            <input type="number" class="form-control"
                                                                placeholder="Precio de venta" v-model="newPrice">
                                                        </div>

                                                    </div>

                                                    <div class="col-12 text-center" style="margin-top:20px;">
                                                        <div class="form-group">
                                                            <h5>El precio de cada entrada será de {{ lastPrice() }}</h5>
                                                        </div>

                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <button v-if="startPrice && newPrice && type == 'Electrónica'" @click="nextTab" class="edu-btn btn-medium mt--50">Siguiente</button>
                                                            <button v-if="startPrice && newPrice && type != 'Electrónica'" @click="saveTicket" class="edu-btn btn-medium mt--50">Guardar</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="file" role="tabpanel">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12">
                                            <div class="row ">
                                                <div class="col-md-12 col-lg-12">
                                                    <div class="col-lg-12 order-lg-1 col-pr--35 login-form-box">

                                                        <div class="row">
                                                            <div class="col-12 mb--50" style="padding: 100px;">
                                                                <div class="form-group">
                                                                    <label>Carga tu entrada</label>
                                                                    <input type="file" class="form-control"
                                                                        @change="handleFileUpload">
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <button v-if="this.user.holder && this.user.iban && this.user.type_account && this.selectedFile" type="button" @click="saveTicket"
                                                                class="edu-btn btn-medium" :disabled="isLoading">Guardar
                                                                <i class="icon-4"></i></button>
                                                        </div>
                                                        <div class="form-group">
                                                            <button v-if="(!this.user.holder || !this.user.iban || !this.user.type_account) && this.selectedFile" type="button" @click="nextTab"
                                                                class="edu-btn btn-medium" :disabled="isLoading">Siguiente
                                                                <i class="icon-4"></i></button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="bank" role="tabpanel">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12">
                                            <div class="row ">
                                                <div class="col-md-12 col-lg-12">
                                                    <div class="login-form-box registration-form">
                                                        <h3 class="title">Ingrese sus datos bancarios</h3>
                                                        <form>
                                                            <div class="form-group">
                                                                <label for="reg-name">Títular*</label>
                                                                <input type="text" name="reg-name" id="reg-name"
                                                                    placeholder="Nombre" v-model="this.user.holder">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="log-email">IBAN*</label>
                                                                <input type="text" name="log-email" id="log-email"
                                                                    placeholder="Iban" v-model="this.user.iban">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="reg-name">Tipo de cuenta*</label>
                                                                <input type="text" name="reg-name" id="reg-name"
                                                                    placeholder="Nombre" v-model="this.user.type_account">
                                                            </div>

                                                            <div class="form-group">
                                                                <button v-if="this.user.holder && this.user.iban && this.user.type_account" type="button" @click="saveTicket"
                                                                    class="edu-btn btn-medium" :disabled="isLoading">Guardar
                                                                    <i class="icon-4"></i></button>
                                                            </div>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="shape-group">
                        <li class="shape-1">
                            <img src="/images/others/map-shape-3.png" alt="Shape">
                        </li>
                        <li class="shape-2">
                            <img src="/images/others/map-shape-3.png" alt="Shape">
                        </li>
                    </ul>
                </div>

            </div>
        </section>
        <Events />
        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<style lang="scss">
.course-area-3 {
    .isotop-button {
        button {

            &:hover,
            &.active {
                background-color: var(--color-secondary);
                color: var(--color-white);
            }

            &.active:after {
                bottom: -10px;
                visibility: visible;
                opacity: 1;
            }
        }
    }
}

.dark-mode {
    .course-area-3 {
        .isotop-button {
            button {

                &:hover,
                &.active {
                    background-color: var(--color-secondary);
                    color: var(--color-white);
                }
            }
        }
    }
}
</style>

<script>
definePageMeta({
  title: 'Compra entradas del Real Madrid en el Bernabéu | Pointickets',
  meta: [
    { name: 'Compra y vende tus entradas para los mejores partidos de fútbol en el Bernabéu con Pointickets, la plataforma líder en venta de entradas deportivas.' }
  ],
})
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import PageSidebarOne from '~~/components/sidebar/PageSidebarOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';
import Events from "~~/components/Home/Events.vue";
import Auth from '~~/components/modals/Auth.vue';
import axios from 'axios';

export default {
    components: {
        HeaderOne,
        BreadCrumbTwo,
        PageSidebarOne,
        FooterOne,
        ScrollToTop,
        Events,
        Auth
    },
    data() {
        return {
            type: '', // Variable para almacenar el valor seleccionado
            title: 'Comprar entrada',
            filterData: [],
            selectedCategory: 'all',
            row: '',
            sector: '',
            category: '',
            startPrice: 0,
            newPrice: 0,
            user: '',
            eventId: '',
            event: null,
            message: '',
            selectedFile: '',
            finish: false,
            isLoading: false,
            seat: 1,
            userCopy: ''
        }
    },
    computed: {
        filterCategory() {
            return ['all', ...new Set(this.items.map((elem) => elem.category).flat())]
        }
    },
    methods: {
        filterHandler(cat) {
            this.selectedCategory = cat;
            if (this.selectedCategory === 'all') {
                this.filterData = this.items
            } else {
                this.filterData = this.items.filter((item) => item.category.includes(cat));
            }
        },
        handleImagePopup(indexNum) {
            this.$refs.image_popup.showImg(indexNum);
        },
        handleLinkClick(value) {
            this.type = value; // Guarda el valor seleccionado en la variable
        },
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
            console.log(this.selectedFile)
        },
        lastPrice() {
            if (this.newPrice === '')
                return 0;
            return (this.newPrice + this.newPrice * 0.1).toFixed(2);
        },
        userData() {
            const userData = window.localStorage.getItem('userData');
            this.user = JSON.parse(userData);
            this.userCopy = this.user;
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
        getEvent() {
            const config = useRuntimeConfig();

            axios
                .get(`${config.public.apiBase}events/` + this.eventId, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                })
                .then((response) => {
                    console.log(response.data)
                    this.event = response.data;
                })
                .catch((error) => {
                    // Maneja los errores, por ejemplo, muestra un mensaje de error
                    console.error(error);
                });
        },
        nextTab() {
            // Encuentra la pestaña actualmente activa
            const activeTab = document.querySelector(".nav-link.active");
            if (activeTab) {
                // Encuentra el índice de la pestaña activa
                const activeTabIndex = Array.from(document.querySelectorAll(".nav-link")).indexOf(activeTab);
                console.log(activeTabIndex)

                // Calcula el índice de la siguiente pestaña
                const nextTabIndex = (activeTabIndex + 1) % document.querySelectorAll(".nav-link").length;

                // Activa la siguiente pestaña y desactiva la actual
                activeTab.classList.remove("active");
                Array.from(document.querySelectorAll(".nav-link"))[nextTabIndex].classList.add("active");
                // Activa el contenido de la siguiente pestaña y desactiva el contenido de la actual
                document.querySelector(activeTab.getAttribute("data-bs-target")).classList.remove("show", "active");
                document.querySelector(document.querySelectorAll(".nav-link")[nextTabIndex].getAttribute("data-bs-target")).classList.add("show", "active");
            }
        },
        async saveTicket() {
            const config = useRuntimeConfig();
            this.isLoading = true;
            this.updateUser();
            let file = null;
            if (this.selectedFile) {
                const form = new FormData();

                form.append('files', this.selectedFile);

                const response = await fetch(`${config.public.apiBase}upload`, {
                    method: 'post',
                    body: form,
                });
                file = await response.json();
            }

            let data = {
                user: this.user,
                Category: this.category,
                Sector: this.sector,
                Fila: this.row,
                startPrice: this.startPrice,
                newPrice: this.newPrice,
                endPrice: this.lastPrice(this.newPrice),
                evento: this.eventId,
                type: this.type,
                ticket: (this.selectedFile) ? file[0] : null,
                seat: this.seat
            }
            axios
                .post(`${config.public.apiBase}tickets`, { data }, {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('jwt')}`, // Asegúrate de incluir un token JWT válido aquí
                    },
                })
                .then((response) => {
                    console.log(response.data)
                    this.message = response.data;
                    this.finish = true;
                })
                .catch((error) => {
                    // Maneja los errores, por ejemplo, muestra un mensaje de error
                    console.error('Error al actualizar el usuario', error);
                });
        }
    },
    mounted() {
        if(window.localStorage.getItem('jwt') == null) {
            window.localStorage.setItem('notLogged', 'Debes iniciar sesión para poder vender una entrada');
            this.$router.push('/login');
        }else {
            this.filterData = this.items
            this.userData();
            this.eventId = this.$route.params.id;
            this.getEvent();
        }
        
    },

}
</script>