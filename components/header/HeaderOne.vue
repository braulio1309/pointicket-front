<template>
    <header class="edu-header header-style-1 header-fullwidth no-topbar">
        <HeaderTopOne v-if="true" />
        <div class="header-mainmenu" :class="{ 'edu-sticky': isSticky }">
            <div class="container-fluid">
                <div class="header-navbar">
                    <div class="header-brand">
                        <div class="logo">
                            <NuxtLink to="/">
                                <img class="logo-light" style="width: 120px;" src="/images/logo/logo_poin.png"
                                    alt="pointickets Logo">
                                <img class="logo-dark" src="/images/logo/logo_poin.png" alt="Light Logo">
                            </NuxtLink>
                        </div>

                    </div>
                    <div class="header-mainnav">
                        <nav class="mainmenu-nav">
                            <Navigation />

                        </nav>
                    </div>
                    <div class="header-right">
                        <ul class="header-action">
                            <li>
                                <div class="custom-select">
                                    <div class="selected-option" @click="toggleDropdown">
                                        <img :src="getFlagImage(selectedLocale)" alt="flag" class="flag-icon">
                                        {{ getLocaleLabel(selectedLocale) }}
                                    </div>
                                    <ul v-if="dropdownOpen" class="dropdown-options">
                                        <li v-for="locale in locales" :key="locale.value"
                                            @click="changeLocale(locale.value)">
                                            <img :src="getFlagImage(locale.value)" alt="flag" class="flag-icon">
                                            {{ locale.label }}
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="header-btn">
                                <NuxtLink to="/vende-entradas-de-futbol" class="edu-btn btn-medium">{{
                                    $t('Menu.sell_tickets').toUpperCase() }} <i class="icon-4"></i>
                                </NuxtLink>
                            </li>
                            <li class="mobile-menu-bar d-block d-xl-none">
                                <button class="hamberger-button" @click="mobileMenuOpen('addClass', 'active')">
                                    <i class="icon-54"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <SearchPopUp />

        <OffCanvasMobileMenuOne />
    </header>
</template>

<style scoped>
.custom-select {
  position: relative;
  width: 150px;
}

.selected-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: #f0f0f0;
  cursor: pointer;
}

.dropdown-options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 10;
}

.dropdown-options li {
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
}

.dropdown-options li:hover {
  background-color: #f0f0f0;
}

.flag-icon {
  width: 20px;
  height: auto;
  margin-right: 10px;
}
</style>

<script>
import Navigation from './Navigation.vue'
import Category from './Category.vue'
import HeaderTopOne from './HeaderTopOne.vue'
import OffCanvasMobileMenuOne from './OffCanvasMobileMenuOne.vue'
import SearchPopUp from './SearchPopUp.vue'
import spainFlag from '../../assets/images/compra-entradas/spain.png';
import usaFlag from '../../assets/images/compra-entradas/united-states.png';

export default {
    components: {
        Navigation,
        Category,
        HeaderTopOne,
        OffCanvasMobileMenuOne,
        SearchPopUp
    },
    data() {
        return {
            isSticky: false,
            selectedLocale: 'es',  // idioma por defecto
            dropdownOpen: false,
            locales: [
                { value: 'es', label: 'Español' },
                { value: 'en', label: 'Inglés' }
            ]
        }
    },
    props: ['showHeaderTop'],
    mounted() {
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if (scrollPos >= 200) {
                this.isSticky = true
            } else {
                this.isSticky = false
            }
        })
    },
    methods: {
        // Off-canvas Mobile Menu Open
        mobileMenuOpen(addRemoveClass, className) {
            const el = document.querySelector('#offcanvas-menu');
            if (addRemoveClass === 'addClass') {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        },

        // search popup
        searchPopUpOpen(addRemoveClass, className) {
            const el = document.querySelector('#edu-search-popup');
            if (addRemoveClass === 'addClass') {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        },
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
        changeLocale(locale) {
            this.selectedLocale = locale;
            this.$i18n.locale = locale;  // Cambio de idioma con vue-i18n
            this.dropdownOpen = false;  // Cerrar el dropdown
        },
        getLocaleLabel(locale) {
            return this.locales.find(l => l.value === locale).label;
        },
        getFlagImage(locale) {
            if (locale === 'es') return spainFlag;  // Ruta a la imagen de la bandera de España
            if (locale === 'en') return usaFlag;
        }
    }
}
</script>