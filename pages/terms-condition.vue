<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />
        
        <BreadCrumbTwo :pageTitle="$t('terms_condition.terms_condition')" :title="$t('terms_condition.terms_condition')"  />

        <section class="privacy-policy-area terms-condition-area">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <div class="privacy-policy terms-condition">
                            <div class="text-block">
                                <h3 class="title">{{ $t('terms_condition.intro') }}:</h3>
                                <p>{{ $t('terms_condition.introduction') }} </p>

                            </div>
                            <div class="text-block">
                                <h4 class="title">{{ $t('terms_condition.guarantee_title') }}</h4>
                                <p> {{ $t('terms_condition.guarantee_content') }}</p>
                            </div>
                            <div class="text-block">
                                <h4 class="title">{{ $t('terms_condition.contracting_title') }}:</h4>
                                <p>{{ $t('terms_condition.contracting_content') }}</p>

                            </div>
                            <div class="text-block">
                                <ul>
                                    <h4 class="title">
                                        1.- {{ $t('terms_condition.user_registration_title') }}:
                                    </h4>
                                </ul>
                                <h4 class="title">{{ $t('terms_condition.user_obligation') }}:</h4>
                                <p>{{ $t('terms_condition.user_registration_obligations') }}</p>
                            </div>
                            <div class="text-block">
                                <h4 class="title">{{ $t('terms_condition.username_password') }}:</h4>
                                <p>{{ $t('terms_condition.veracity_of_information_content') }}
                                    <br><br>
                                    {{ $t('terms_condition.username_suspicion') }}
                                </p>
                            </div>
                            <div class="text-block">
                                <h4 class="title">{{ $t('terms_condition.veracity_of_information') }}:</h4>
                                <p>{{ $t('terms_condition.veracity_of_information_content2') }}</p>
                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    2.- {{ $t('terms_condition.ticket_sale_title') }}
                                </h4>

                                <p>{{ $t('terms_condition.ticket_sale_obligations') }}<br><br>
                                    {{ $t('terms_condition.ticket_sale_obligations_second') }}<br><br>
                                    {{ $t('terms_condition.seller_guarantee') }}<br><br>
                                    {{ $t('terms_condition.seller_guarantee_not') }}
                                </p>
                            </div>
                            <div class="text-block">
                                <h4 class="title">
                                    3.- {{ $t('terms_condition.seller_noncompliance_title') }}
                                </h4>
                                <p>{{ $t('terms_condition.seller_noncompliance_cases') }}</p> <br><br>

                                <p>{{ $t('terms_condition.nocompliance') }}</p>

                                <ul>

                                    <li>{{ $t('terms_condition.nocompliance') }}</li>
                                    <li>{{ $t('terms_condition.nocompliance1') }}</li>
                                    <li>{{ $t('terms_condition.nocompliance2') }}</li>
                                    <li>{{ $t('terms_condition.nocompliance3') }}</li>
                                    <li>{{ $t('terms_condition.nocompliance4') }}</li><br><br>
                                </ul>
                                <p>{{ $t('terms_condition.nocompliance_text') }}</p>

                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    4.- {{ $t('terms_condition.buyer_obligations_title') }}
                                </h4>
                                <p>{{ $t('terms_condition.buyer_obligations_content') }}
                                    <br><br>
                                    {{ $t('terms_condition.buyer_obligations_content2') }}<br><br>
                                    {{ $t('terms_condition.buyer_obligations_content3') }}<br><br>
                                    {{ $t('terms_condition.buyer_obligations_content4') }}<br><br>
                                     {{ $t('terms_condition.buyer_obligations_content5') }}<br><br>

                                    {{ $t('terms_condition.buyer_obligations_content6') }} <br><br>

                                    <u>4.1 {{ $t('terms_condition.season_ticket_return_title') }}:</u> <br><br>
                                    {{ $t('terms_condition.season_ticket_return_content') }} <br><br>

                                    {{ $t('terms_condition.season_ticket_return_content2') }} <br><br>
                                    {{ $t('terms_condition.season_ticket_return_content3') }}
                                </p>
                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    5.- {{ $t('terms_condition.product_responsibility_title') }}
                                </h4>
                                <p>{{ $t('terms_condition.product_responsibility_content') }} <br><br>
                                    {{ $t('terms_condition.product_responsibility_content2') }} <br><br>
                                    {{ $t('terms_condition.product_responsibility_content3') }}
                                    <br><br>
                                    {{ $t('terms_condition.product_responsibility_content4') }} <br><br>
                                    {{ $t('terms_condition.product_responsibility_content5') }} <br><br>
                                    {{ $t('terms_condition.product_responsibility_content6') }}
                                </p>
                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    6.- {{ $t('terms_condition.event_changes_title') }}:
                                </h4>
                                <p>{{ $t('terms_condition.event_changes_content') }}<br><br>
                                    {{ $t('terms_condition.event_changes_content2') }}
                                </p>
                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    7.- {{ $t('terms_condition.returns_title') }}:
                                </h4>
                                <p>
                                    {{ $t('terms_condition.returns_content') }}
                                </p>
                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    8.- {{ $t('terms_condition.intellectual_property_title') }}:
                                </h4>
                                <p>{{ $t('terms_condition.intellectual_property_content') }}<br><br>
                                    {{ $t('terms_condition.intellectual_property_content2') }}
                                </p>
                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    9.- {{ $t('terms_condition.jurisdiction_title') }}:
                                </h4>
                                <p>
                                    {{ $t('terms_condition.jurisdiction_content') }}
                                </p>
                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    {{ $t('terms_condition.name_company') }} Platinumtickets SL
                                </h4>
                                <p>
                                    {{ $t('Register.phone') }}: 655941059 <br>
                                    URL: https://pointickets.com/ <br>
                                    {{ $t('terms_condition.billing_data') }}: Villa de Marín 4  28029,  B10526994<br>
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
definePageMeta({
  title: 'Terminos y condiciones | Pointickets',
  description: 'Políticas de privacidad'                
})
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