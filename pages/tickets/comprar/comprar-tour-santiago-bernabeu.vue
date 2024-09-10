<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />
        <section class="">
            <div class="container">

                <div class="edu-course-area course-area-3">
                    <div v-if="finish" class="col-12 mt--50 mb--50">
                        <div class="alert alert-success" role="alert">
                            <h4 class="alert-heading">{{ $t('Sell.good_save') }}</h4>
                            <p>{{ $t('Sell.text_save') }}</p>
                            <hr>
                            <p class="mb-0">{{ $t('Sell.contact') }}
                            </p>
                        </div>
                    </div>
                    <div class="container" v-if="!finish">
                        <div class="isotope-wrapper" style="margin-top: 100px;">
                            <div class="isotop-button isotop-filter nav">
                                <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#undergraduate"
                                    role="tab">{{ $t('Tour.ticket') }}</button>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="undergraduate" role="tabpanel">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-12">

                                            <div class="row row--30">
                                                <div class="col-lg-6 edu-blog-sidebar">
                                                    <div class="privacy-policy purchase-guide">
                                                        <div class="text-block text-center">
                                                            <img
                                                                src="../../../assets/images/compra-entradas/bernabeu.jpeg">
                                                        </div>

                                                        <div class="text-block">
                                                            <h4 class="title">Tour Santiago Bernabeu</h4>
                                                            <p>{{ text[data.type] }}</p>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="edu-blog-sidebar">
                                                        <div class="col-lg-12 order-lg-1 login-form-box">

                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <label>{{ $t('Sell.type') }}</label>
                                                                        <select class="edu-select" v-model="data.type">
                                                                            <option value="Classic">Classic</option>
                                                                            <option value="Classic Hora Flexible">Classic Hora Flexible</option>
                                                                            <option value="Premium">Premium</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <label>{{ $t('Tour.date') }}</label>
                                                                        <input type="date" style="font-size: 1.1em;" v-model="data.date" class="form-control" :min="today">

                                                                    </div>

                                                                    <div class="form-group">
                                                                        <label>{{ $t('Tour.hour') }}</label>
                                                                        <select v-model="data.hour" class="form-control" style="font-size: 1.1em;">
                                                                            <option v-for="time in generateTimes()" :key="time" :value="time">{{ time }}</option>
                                                                        </select>
                                                                    </div>


                                                                </div>

                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <label>{{ $t('Tour.count') }}</label>
                                                                        <input type="number" class="form-control"
                                                                            placeholder="Asientos" style="font-size: 1.1em;" v-model="data.seat"
                                                                            min="1">
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="form-group">
                                                                        <button @click="checkout" class="edu-btn btn-medium mt--50">{{ $t('Checkout.start_payment_process') }}</button>
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
  description: 'Compra y vende tus entradas para los mejores partidos de fútbol en el Bernabéu con Pointickets, la plataforma líder en venta de entradas deportivas. '                
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
            title: 'Comprar Tour Santiago Bernabeu',
            filterData: [],
            selectedCategory: 'all',
            row: 0,
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
            userCopy: '',
            validateSector: null,
            data: {
                type: 'Classic',
                seat: 0,
                date: null,
                hour: null
            },
            today: new Date().toISOString().split('T')[0],
            text: {
                'Classic': `Museo del Real Madrid C.F,
Vista panorámica del Estadio,
Recorrido (reducido por obras)`,
                'Classic Hora Flexible': `Entrada Classic,
Hora abierta en la fecha seleccionada,
Recorrido reducido por obras`,
                'Premium': `Entrada Classic,
Servicio Guía,
Recorrido reducido por obras`
            },
            valueColor: {
                'CAT 3 - sectores 633 a 611 / sectores 634 a 612': 'morado',
                'CAT 2 - fondo': 'rojo',
                'CAT 2 Lateral - sectores 609 a 610 / sectores 701 a 702 y 635 a 636': 'verde',
                'CAT 1 - Alta': 'amarillo',
                'CAT 1': 'azul',
                'CAT 1 Premium': 'naranja'
            },
            valueSector: {
                'CAT 3 - sectores 633 a 611 / sectores 634 a 612': [
                    {min: 611, max: 633}
                ],
                'CAT 2 - fondo': [
                    {min:109, max: 128},
                    {min:207, max: 228},
                    {min:309, max: 326},
                    {min:409, max: 434},
                    {min:513, max: 534},
                ],
                'CAT 2 Lateral - sectores 609 a 610 / sectores 701 a 702 y 635 a 636': [
                    {min: 609, max: 610},
                    {min: 701, max: 702},
                    {min: 635, max: 636}
                ],
                'CAT 1 - Alta': [
                    {min:501, max:507},
                    {min:509, max:512},
                    {min:518, max:518},
                    {min:535, max:544},
                ],
                'CAT 1': [
                    {min:107, max:108},
                    {min:205, max:208},
                    {min:307, max:310},
                    {min:405, max:410},
                    {min:227, max:230},
                    {min:325, max:330},
                    {min:433, max:438},
                ],
                'CAT 1 Premium': [
                    {min:101, max:106},
                    {min:200, max:204},
                    {min:301, max:306},
                    {min:401, max:404},
                    {min:129, max:134},
                    {min:231, max:234},
                    {min:332, max:336},
                    {min:439, max:444},
                ]
            },
            color: null
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
        handleChange(){
            this.color = this.valueColor[this.category];
        },
        checkout(){
            this.data.hour += `:00`
            localStorage.setItem('tour', JSON.stringify(this.data));
            this.$router.push('/shop/checkout/tour-santiago-bernabeu');
        },
        validateRange() {
            let number = parseInt(this.row);
            if (this.valueSector[this.category] instanceof Array) {
                for (let i = 0; i < this.valueSector[this.category].length; i++) {
                    let range = this.valueSector[this.category][i];
                    if (number >= range.min && number <= range.max) {
                        this.validateSector = true;
                        break;
                    }else {
                        this.validateSector = false;
                    }
                }
            }
        },
        generateTimes() {
            const times = [];
            let start = 9.5; // 9:30 AM
            const end = 18.5; // 6:30 PM
            
            while (start <= end) {
                let hour = Math.floor(start);
                let minutes = (start - hour) * 60;
                let formattedTime = `${hour.toString().padStart(2, '0')}:${minutes === 0 ? '00' : '30'}`;
                times.push(formattedTime);
                start += 0.5;
            }
            
            return times;
        },
        handleImagePopup(indexNum) {
            this.$refs.image_popup.showImg(indexNum);
        },
        handleLinkClick(value) {
            this.type = value; // Guarda el valor seleccionado en la variable
        },
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
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
            window.localStorage.setItem('notLogged', 'Debes iniciar sesión para poder comprar o vender una entrada');
            this.$router.push('/login');
        }else {
            this.filterData = this.items;
        }
        
    },

}
</script>