<template>
    <footer class="edu-footer footer-lighten bg-image footer-style-1">
        <div class="footer-top">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <div class="edu-footer-widget">
                            <div class="logo">
                                <NuxtLink to="/">
                                    <img class="logo-light" src="/images/logo/logo_poin.png" style="width:100px;"
                                        alt="Light Logo">
                                </NuxtLink>
                            </div>
                            <p class="description">Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor
                                incidid unt labore dolore.</p>
                            <div class="widget-information">
                                <ul class="information-list">
                                    <li><span>Ubicación:</span>España</li>
                                    <li><span>Llama:</span><a href="tel:+011235641231">+01 123 5641 231</a></li>
                                    <li><span>Email:</span><a href="mailto:info@pointicket.com"
                                            target="_blank">info@pointicket.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="edu-footer-widget explore-widget">
                            <h4 class="widget-title">Entradas</h4>
                            <div class="inner">
                                <ul class="footer-link link-hover">
                                    <li>
                                        <NuxtLink to="/event/buy">Eventos</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/event/sell">Vender entradas</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <div class="edu-footer-widget quick-link-widget">
                            <h4 class="widget-title">Links</h4>
                            <div class="inner">
                                <ul class="footer-link link-hover">
                                    <li>
                                        <NuxtLink to="/preguntas-frecuentes">Preguntas frecuentes</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/privacy-policy">Politicas de privacidad</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/terms-condition">Terminos y condiciones</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/profile">Mi perfil</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/contacto">Contacto</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="edu-footer-widget">
                            <h4 class="widget-title">Contacto</h4>
                            <div class="inner">
                                <p class="description">Ingresa tu email para obtener un descuento</p>
                                <div class="input-group footer-subscription-form">
                                    <input type="email" class="form-control" placeholder="Correo">
                                    <button class="edu-btn btn-medium" type="button">Suscribete <i
                                            class="icon-4"></i></button>
                                </div>
                                <ul class="social-share icon-transparent">
                                    <li><a href="https://facebook.com/" target="_blank" class="color-fb"><i
                                                class="icon-facebook"></i></a></li>
                                    <li><a href="https://linkedin.com/" target="_blank" class="color-linkd"><i
                                                class="icon-linkedin2"></i></a></li>
                                    <li><a href="https://instagram.com/" target="_blank" class="color-ig"><i
                                                class="icon-instagram"></i></a></li>
                                    <li><a href="https://twitter.com/" target="_blank" class="color-twitter"><i
                                                class="icon-twitter"></i></a></li>
                                    <li><a href="https://youtube.com/" target="_blank" class="color-yt"><i
                                                class="icon-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner text-center">
                            <p>Copyright {{ new Date().getFullYear() }} <a href="#">Pointickets</a>. Derechos reservados</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>