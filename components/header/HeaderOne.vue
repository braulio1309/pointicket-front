<template>
    <header class="edu-header header-style-1 header-fullwidth no-topbar">
        <HeaderTopOne v-if="showHeaderTop" />
        <div class="header-mainmenu" :class="{ 'edu-sticky': isSticky }">
            <div class="container-fluid">
                <div class="header-navbar">
                    <div class="header-brand">
                        <div class="logo">
                            <NuxtLink to="/">
                                <img class="logo-light" src="/images/logo/logo-dark.png" alt="Dark Logo">
                                <img class="logo-dark" src="/images/logo/logo-white.png" alt="Light Logo">
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
                            <li class="search-bar">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search">
                                    <button class="search-btn" type="button"><i class="icon-2"></i></button>
                                </div>
                            </li>
                            <li class="header-btn">
                                <NuxtLink to="/event/sell" class="edu-btn btn-medium">VENDER ENTRADAS <i class="icon-4"></i>
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

<script>
import Navigation from './Navigation.vue'
import Category from './Category.vue'
import HeaderTopOne from './HeaderTopOne.vue'
import OffCanvasMobileMenuOne from './OffCanvasMobileMenuOne.vue'
import SearchPopUp from './SearchPopUp.vue'

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
            isSticky: false
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
        }
    }
}
</script>