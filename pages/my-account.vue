<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo pageTitle='My Account' title='Account' />

        <section class="account-page-area section-gap-equal">
            <div class="container position-relative">
                <div class="row g-5 justify-content-center">
                    <div class="col-lg-5">
                        <div class="login-form-box">
                            <h3 class="title">Iniciar sesión</h3>
                            <p>¿No tienes cuenta? <a href="#">Registrate</a></p>
                            <form>
                                <div class="form-group">
                                    <label for="current-log-email">Email*</label>
                                    <input type="email" name="current-log-email" id="current-log-email"
                                        placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <label for="current-log-password">Contraseña*</label>
                                    <input type="password" name="current-log-password" id="current-log-password"
                                        placeholder="Contraseña">
                                    <span class="password-show"><i class="icon-76"></i></span>
                                </div>
                                <div class="form-group chekbox-area">
                                    <div class="edu-form-check">
                                        <input type="checkbox" id="remember-me">
                                        <label for="remember-me">Recuerdame</label>
                                    </div>
                                    <a href="#" class="password-reset">Perdiste tu contraseña?</a>
                                </div>
                                <div class="form-group">
                                    <button type="button" class="edu-btn btn-medium">Iniciar sesión <i class="icon-4"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="login-form-box registration-form">
                            <h3 class="title">Registrarse</h3>
                            <p>Tienes una cuenta? <a href="#">Inicia sesión</a></p>
                            <form>
                                <div class="form-group">
                                    <label for="reg-name">Nombre*</label>
                                    <input type="text" name="reg-name" id="reg-name" placeholder="Nombre">
                                </div>
                                <div class="form-group">
                                    <label for="log-email">Email*</label>
                                    <input type="email" name="log-email" id="log-email" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <label for="log-password">Contraseña*</label>
                                    <input type="password" name="log-password" id="log-password" placeholder="Contraseña">
                                    <span class="password-show"><i class="icon-76"></i></span>
                                </div>
                                <div class="form-group">
                                    <label for="log-password">Telefono*</label>
                                    <input type="text" name="reg-name" id="reg-name" placeholder="123465">
                                    <span class="password-show"><i class="icon-76"></i></span>
                                </div>
                                <div class="form-group chekbox-area">
                                    <div class="edu-form-check">
                                        <input type="checkbox" id="terms-condition">
                                        <label for="terms-condition">Estoy de acuerdo con los 
                                            <NuxtLink to="/terms-condition">Terminos y condiciones</NuxtLink>
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="button" class="edu-btn btn-medium">Crear cuenta <i
                                            class="icon-4"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <ul class="shape-group">
                    <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-07.png" />
                    <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
                    <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/counterup/shape-02.png" />
                </ul>
            </div>
        </section>

        <FooterOne />
        <ScrollToTop />
    </div>
</template>

<script>
import MouseMove from '~~/components/animation/MouseMove.vue';
import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';


export default {
    components: {
    HeaderOne,
    BreadCrumbTwo,
    FooterOne,
    MouseMove,
    ScrollToTop
},
    head() {
        return {
            title: 'Terms & Condition'
        }
    },
    
}
</script>