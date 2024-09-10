<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo title='Políticas de privacidad' />

        <section class="privacy-policy-area terms-condition-area">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-12">
                        <div class="privacy-policy terms-condition">
                            <div class="text-block">
                                <p>{{ $t('privacy_policy.intro.text') }}
                                </p>

                            </div>
                            <div class="text-block">
                                <h4 class="title">1.- {{ $t('privacy_policy.personal_data.title') }}:</h4>
                                <p>{{ $t('privacy_policy.personal_data.text') }}</p>
                            </div>
                            <div class="text-block">
                                <h4 class="title">2.- {{ $t('privacy_policy.data_collection.title') }}:</h4>
                                <p> {{ $t('privacy_policy.data_collection.text') }}<br><br>
                                    {{ $t('privacy_policy.data_collection.text2') }}<br><br>
                                    {{ $t('privacy_policy.data_collection.text3') }}
                                    </p>

                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    {{ $t('privacy_policy.data_usage.title') }}
                                </h4>

                                <h4 class="title"><u>{{ $t('privacy_policy.data_usage.text') }}</u></h4>

                                <ul>
                                    <li>{{ $t('privacy_policy.data_usage.text1') }}</li>
                                    <li>{{ $t('privacy_policy.data_usage.text2') }}</li>
                                    <li>{{ $t('privacy_policy.data_usage.text3') }}</li>
                                    <li>{{ $t('privacy_policy.data_usage.text4') }}</li>
                                    <li>{{ $t('privacy_policy.data_usage.text5') }}</li>
                                </ul>
                            </div>
                            <div class="text-block">
                                <h4 class="title"><u>{{ $t('privacy_policy.comunicate.title') }}</u></h4>

                                <ul>
                                    <li>{{ $t('privacy_policy.comunicate.text1') }}</li>
                                    <li>{{ $t('privacy_policy.comunicate.text2') }}</li>
                                    <li>{{ $t('privacy_policy.comunicate.text3') }}
                                    </li>
                                    <li>{{ $t('privacy_policy.comunicate.text4') }}
                                    </li>
                                    <li>{{ $t('privacy_policy.comunicate.text5') }}
                                    </li>
                                </ul>
                                <p>{{ $t('privacy_policy.comunicate.text6') }}</p>

                            </div>
                            <div class="text-block">
                                <h4 class="title"><u>{{ $t('privacy_policy.business_purposes.text') }}</u></h4>
                                <ul>
                                    <li>{{ $t('privacy_policy.business_purposes.text1') }}</li>
                                    <li>{{ $t('privacy_policy.business_purposes.text2') }}</li>
                                </ul>
                                <p>{{ $t('privacy_policy.business_purposes.text3') }}</p>
                            </div>
                            <div class="text-block">
                                <h4 class="title"><u>{{ $t('privacy_policy.premio.title') }}</u>
                                </h4>
                                <ul>
                                    <li>{{ $t('privacy_policy.premio.text1') }}</li>
                                    <li>{{ $t('privacy_policy.premio.text2') }}</li>

                                </ul>

                            </div>
                            <div class="text-block">
                                <h4 class="title"><u>{{ $t('privacy_policy.comercial.title') }}</u></h4>
                                <ul>
                                    <li>{{ $t('privacy_policy.comercial.text1') }}</li>
                                    <li>{{ $t('privacy_policy.comercial.text2') }}</li>
                                    <li>{{ $t('privacy_policy.comercial.text3') }}</li>
                                    <li>{{ $t('privacy_policy.comercial.text4') }}</li>
                                    <li>{{ $t('privacy_policy.comercial.text5') }}</li>
                                    <li>{{ $t('privacy_policy.comercial.text6') }}</li>
                                    <li>{{ $t('privacy_policy.comercial.text7') }}</li>
                                    <li>{{ $t('privacy_policy.comercial.text8') }}</li>
                                </ul>
                                <p>{{ $t('privacy_policy.comercial.conclusion') }}</p>

                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    3.- {{ $t('privacy_policy.data_transfer.title') }}
                                </h4>

                                <p>{{ $t('privacy_policy.data_transfer.text') }} <br><br>
                                    {{ $t('privacy_policy.data_transfer.text1') }}
                                </p>
                            </div>
                            <div class="text-block">
                                <h4 class="title">
                                    4.- {{ $t('privacy_policy.data_retention.title') }}:
                                </h4>
                                <p>{{ $t('privacy_policy.data_retention.text') }} <br><br>
                                    {{ $t('privacy_policy.data_retention.text1') }} <br><br>
                                    {{ $t('privacy_policy.data_retention.text2') }} <br><br>
                                    <b>{{ $t('privacy_policy.data_retention.text3') }}</b>
                                </p>



                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    5.- {{ $t('privacy_policy.data_storage.title') }}:
                                </h4>
                                <p>{{ $t('privacy_policy.data_storage.text') }} <br><br>
                                    {{ $t('privacy_policy.data_storage.text2') }}
                                </p>
                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    6.- {{ $t('privacy_policy.privacy_rights.title') }}:
                                </h4>
                                <p>{{ $t('privacy_policy.privacy_rights.text') }}
                                </p>
                            </div>
                            <div class="text-block">

                                <h4 class="title">
                                    7.- {{ $t('privacy_policy.contact.title') }}:
                                </h4>
                                <p>{{ $t('privacy_policy.contact.text') }}
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
  title: 'Políticas de privacidad | Pointickets',
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
            title: 'Politicas de privacidad'
        }
    },

}
</script>