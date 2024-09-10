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

                                <h3 class="title">{{ $t('legal.entity.title') }}</h3>
                                <p>{{ $t('legal.entity.text') }}</p>
                            </div>

                            <div class="text-block">
                                <h4 class="title">{{ $t('legal.participation.title') }}</h4>
                                <p>{{ $t('legal.participation.text') }}</p>
                            </div>

                            <div class="text-block">
                                <h4 class="title">{{ $t('legal.requirements.title') }}</h4>
                                <p>{{ $t('legal.requirements.text') }}</p>
                            </div>

                            <div class="text-block">
                                <ul>
                                    <h4 class="title">{{ $t('legal.duration.title') }}</h4>
                                </ul>
                                <p>{{ $t('legal.duration.text') }}</p>
                            </div>

                            <div class="text-block">
                                <h4 class="title">{{ $t('legal.prize.title') }}</h4>
                                <p>{{ $t('legal.prize.text') }}</p>
                            </div>

                            <div class="text-block">
                                <h4 class="title">{{ $t('legal.winner_selection.title') }}</h4>
                                <p>{{ $t('legal.winner_selection.text') }}</p>
                            </div>

                            <div class="text-block">
                                <h4 class="title">{{ $t('legal.winner_communication.title') }}</h4>
                                <p>{{ $t('legal.winner_communication.text') }}</p>
                            </div>

                            <div class="text-block">
                                <h4 class="title">{{ $t('legal.prize_delivery.title') }}</h4>
                                <p>{{ $t('legal.prize_delivery.text') }}</p>
                            </div>

                            <div class="text-block">
                                <h4 class="title">{{ $t('legal.data_protection.title') }}</h4>
                                <p>{{ $t('legal.data_protection.text') }}</p>
                            </div>

                            <div class="text-block">
                                <h4 class="title">{{ $t('legal.legal_acceptance.title') }}</h4>
                                <p>{{ $t('legal.legal_acceptance.text') }}</p>
                            </div>

                            <div class="text-block">
                                <h4 class="title">{{ $t('legal.disclaimer.title') }}</h4>
                                <p>{{ $t('legal.disclaimer.text') }}</p>
                            </div>

                            <div class="text-block">
                                <h4 class="title">{{ $t('legal.applicable_law.title') }}</h4>
                                <p>{{ $t('legal.applicable_law.text') }}</p>
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
    title: 'Bases legales | Pointickets',
    description: 'Bases legales concurso'
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