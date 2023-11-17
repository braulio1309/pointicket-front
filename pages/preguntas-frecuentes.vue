<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo title='Preguntas frecuentes' />

        <section class="privacy-policy-area terms-condition-area">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <div class="privacy-policy terms-condition">
                            <div class="text-block">
                                <h2 class="title">Dudas sobre la compra de entradas:</h2>
                                <ul>

                                    <li><h3 class="title"><b>¿Mis asientos estaran juntos?</b></h3> <br>Sí, las entradas adquiridas del mismo
                                        anuncio estarán juntas, a menos que se especifique algo distinto durante el proceso
                                        de confirmación de compra.</li>

                                    <li><h3 class="title">¿En qué lugar estarán mis asientos?</h3><b></b> Todos los detalles disponibles sobre la
                                        localización de tu asiento se muestran en tu email de confirmación.

                                    </li>
                                    <br><br>
                                </ul>

                            </div>
                            <div class="text-block">
                                <h2 class="title">Dudas de como recibir mis entradas:</h2>
                                <ul>

                                    <li><h3 class="title"><b>¿Cuándo recibiré mis entradas?</b></h3><b></b> <br>
                                        Deberías recibir tus entradas, entradas electrónicas incluidas, en la semana
                                        anterior al evento, ya que los organizadores suelen emitir las entradas en fechas
                                        muy próximas al evento, a menudo en la misma semana.
                                        <br><br>
                                        Si compraste entradas electrónicas de Descarga instantánea, podrás imprimirlas casi
                                        de inmediato.<br><br>
                                        Puedes seguir el estado de tu pedido en el apartado Compras.<br><br>
                                        Formas de garantizar que recibirás tus entradas a tiempo:<br><br>
                                        <ul>
                                            <li>Asegúrate de que tu dirección de entrega es correcta. Comprueba tu dirección
                                                de entrega aquí.</li>
                                            <li>Asegúrate de elegir una dirección de entrega donde alguien pueda firmar la
                                                entrega, como, por ejemplo, en tu lugar de trabajo.</li>
                                            <li>Si viajas al evento, añade tu dirección de viaje y la fecha de comienzo del
                                                viaje cuanto antes y nos aseguraremos de que las entradas se envíen al lugar
                                                correcto.</li>
                                            <li>Asegúrate de que el número de teléfono que aparece en tu cuenta es correcto,
                                                por si tenemos que ponernos en contacto contigo.</li>


                                        </ul>

                                    </li>

                                    <li><h3 class="title"><b>¿Por qué el precio que aparece en la entrada es diferente del que pago yo?</b></h3>
                                        <br><br>
                                        Las entradas de Pointickets se venden a precios que pueden estar por encima, por
                                        debajo o igual que el valor nominal que aparece en la entrada.<br><br>
                                        El precio de las entradas para los eventos más populares puede ser más alto que el
                                        valor nominal debido a la alta demanda. En Pointickets muchas entradas se venden más
                                        baratas que el precio nominal.
                                    </li>
                                    <li><h3 class="title"><b>¿Por qué en mis entradas aparece el nombre de otra persona?</b></h3> <br><br>
                                        Pointickets permite que terceras partes, particulares incluidos, vendan entradas en
                                        su plataforma. En algunos casos, puede aparecer el nombre del comprador original en
                                        la entrada. La entrada sigue siendo válida. Tu nombre no tiene que ser el mismo que
                                        aparece en la entrada para que puedas acceder al evento.<br><br>
                                        Si fuera necesario personalizar la entrada con el nombre del asistente nuestro
                                        equipo de Atención al Cliente contactará contigo.
                                    </li>
                                    <br><br>
                                </ul>
                            </div>
                            <div class="text-block">
                                <h2 class="title">¿Puedo cancelar mi compra?</h2>
                                <p>
                                    La satisfacción de nuestros clientes es fundamental para nosotros, pero como plataforma
                                    de intercambio de entradas entre particulares, nuestras transacciones son finales, por
                                    lo que ni el comprador ni el vendedor pueden cancelar el pedido por su parte. Estas
                                    políticas vigentes aseguran la aplicación de la Garantía FanProtect para todos nuestros
                                    clientes.<br><br>
                                    No obstante si una vez realizada la compra tuvieras problemas para acudir al evento
                                    ponte en contacto con nuestro equipo de Atención al Cliente, donde intentaremos
                                    ofrecerte la mejor solución posible.
                                </p>
                            </div>
                            <div class="text-block">
                                <h2 class="title">¿Cómo me pongo en contacto con Pointickets?</h2>
                                <ul>
                                    <li>Mándanos un WhatsApp</li>
                                    <li>Llámanos</li>
                                    <li>Mándanos un mensaje.</li>
                                </ul>
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
<script setup lang="ts">
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>

<script>

import BreadCrumbTwo from '~~/components/common/BreadCrumbTwo.vue';
import HeaderOne from '~~/components/header/HeaderOne.vue';
import FooterOne from '~~/components/footer/FooterOne.vue';
import PageSidebarOne from '~~/components/sidebar/PageSidebarOne.vue';
import ScrollToTop from '~~/components/footer/ScrollToTop.vue';


export default {
    components: {
        HeaderOne,
        BreadCrumbTwo,
        FooterOne,
        PageSidebarOne,
        ScrollToTop
    },
     head() {
        return {
            title: 'Preguntas frecuentes',
            meta: [
                {
                    hid: 'Preguntas frecuentes | Pointickets',
                    name: 'Preguntas frecuentes | Pointickets',
                    content: 'Te respondemos a las preguntas más comunes.Te resolvemos todo para que no tengas dudas en comprar o vender entradas de tus eventos.'
                }
            ]
        }
    }

}
</script>

