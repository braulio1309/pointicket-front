<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo title='Bases Legales' />

        <section class="privacy-policy-area terms-condition-area">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <div class="privacy-policy terms-condition">
                            <div class="text-block">
                                <h2 class="title">WANDERLUST DREAMS SL</h2>

                                <h3 class="title">1. Entidad Organizadora</h3>
                                <p>WANDERLUST DREAMS SL (en adelante, “la Empresa”), con domicilio en Avenida El Ferrol 4, 28029 Madrid, y NIF B56956220, organiza un concurso denominado "Sorteo del Partido Real Madrid vs Valladolid" (en adelante, “el Concurso”) que se llevará a cabo en la plataforma Instagram. </p>

                            </div>
                            <div class="text-block">
                                <h4 class="title">2. Participación</h4>
                                <p>Podrán participar en el Concurso todas las personas físicas mayores de 18 años, con residencia legal en España, que sean seguidores de la cuenta de Instagram de la Empresa y cumplan con las condiciones establecidas en estas bases legales.</p>
                            </div>
                            <div class="text-block">
                                <h4 class="title">3. Requisitos de Participación</h4>
                                <p>Para participar en el Concurso, los usuarios deberán cumplir con los siguientes requisitos:
Seguir la cuenta oficial de la Empresa en Instagram: @pointickets
Etiquetar a un amigo en los comentarios de la publicación del Concurso.
Cada participante podrá comentar tantas veces como desee, siempre y cuando etiquete a diferentes amigos en cada comentario. No se permitirán comentarios con cuentas de famosos, personajes públicos o cuentas falsas.</p>

                            </div>
                            <div class="text-block">
                                <ul>
                                    <h4 class="title">
                                        4. Duración del Concurso
                                    </h4>
                                </ul>

                                <p>El Concurso comenzará el 5 de agosto de 2024 a las 00:01 horas y finalizará el 20 de agosto de 2024 a las 23:59 horas.</p>
                            </div>
                            <div class="text-block">
                                <h4 class="title">5. Premio</h4>
                                <p>El premio consiste en dos entradas para dos personas para el partido entre Real Madrid y Valladolid que se celebrará el 25 de agosto de 2024 en el Estadio Santiago Bernabéu.
                                </p>
                            </div>
                            <div class="text-block">
                                <h4 class="title">6. Selección del Ganador</h4>
                                <p>El ganador será seleccionado de manera aleatoria mediante una herramienta de selección de comentarios el día 21 de agosto de 2024. El resultado del sorteo será anunciado el mismo día en la cuenta de Instagram de la Empresa.</p>
                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    7. Comunicación al Ganador
                                </h4>

                                <p>La Empresa se pondrá en contacto con el ganador a través de un mensaje directo en Instagram. Si el ganador no responde en un plazo de 48 horas, la Empresa se reserva el derecho de seleccionar a un nuevo ganador.
                                </p>
                            </div>
                            <div class="text-block">
                                <h4 class="title">
                                    8. Entrega del Premio
                                </h4>
                                <p>La entrega del premio se coordinará directamente con el ganador a través de los medios que la Empresa considere más adecuados. El premio es intransferible y no podrá ser canjeado por dinero en efectivo ni por ningún otro premio.</p> 


                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    9. Protección de Datos Personales
                                </h4>
                                <p>De conformidad con lo establecido en la normativa vigente en materia de protección de datos, la Empresa informa que los datos personales de los participantes serán tratados conforme a lo dispuesto en su Política de Privacidad, disponible en https://pointickets.com/.
                                </p>
                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    10. Aceptación de las Bases Legales
                                </h4>
                                <p>La participación en el Concurso implica la aceptación íntegra de las presentes bases legales. La Empresa se reserva el derecho de modificar las bases del Concurso, en cualquier momento y sin previo aviso, comprometiéndose a dar la debida publicidad a las nuevas bases y condiciones, si las hubiera.

                                </p>
                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    11. Exoneración de Responsabilidad
                                </h4>
                                <p>Instagram no patrocina, avala ni administra de modo alguno este Concurso, ni está asociado a él. Los participantes exoneran a Instagram de cualquier responsabilidad derivada del desarrollo de este Concurso.
                                </p>
                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    12. Ley Aplicable y Jurisdicción
                                </h4>
                                <p>
                                    El presente Concurso se regirá por la legislación española. Para la resolución de cualquier controversia o conflicto que pudiera surgir con motivo de este Concurso, las partes se someten a la jurisdicción de los Juzgados y Tribunales de la ciudad de Madrid.
Para cualquier duda sobre el Concurso, los participantes pueden contactar con la Empresa a través del teléfono +34 689 89 86 36 

                                </p>
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
            title: 'Terms & Condition'
        }
    },

}
</script>