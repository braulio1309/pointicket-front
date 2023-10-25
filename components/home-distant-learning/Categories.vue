<template>
    <div class="edu-categorie-area categorie-area-1 edu-section-gap">
        <div class="container">
            <SectionTitle alignment="section-center" preTitle='CATEGORIES' preTitleClass="pre-textsecondary"
                title='Online <span class="color-primary">Classes</span> For Remote Learning.'
                subTitle="Consectetur adipiscing elit sed do eiusmod tempor." />

            <div class="row g-5">
                <div class="col-lg-3 col-sm-6" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800">
                    <div class="categorie-grid categorie-style-1 color-primary-style edublink-svg-animate">
                        <div class="icon">
                            <CatIconOne />
                        </div>
                        <div class="content">
                            <NuxtLink to="/course/course-one">
                                <h5 class="title">Online Degree Programs</h5>
                            </NuxtLink>
                            <p>Lorem ipsum dolor consec tur elit adicing sed umod tempor.</p>
                            <div class="course-remain">7 Courses</div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6" data-aos-delay="200" data-aos="fade-up" data-aos-duration="800">
                    <div class="categorie-grid categorie-style-1 color-secondary-style edublink-svg-animate">
                        <div class="icon">
                            <CatIconTwo />
                        </div>
                        <div class="content">
                            <NuxtLink to="/course/course-one">
                                <h5 class="title">Non-Degree Programs</h5>
                            </NuxtLink>
                            <p>Lorem ipsum dolor consec tur elit adicing sed umod tempor.</p>
                            <div class="course-remain">4 Courses</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6" data-aos-delay="300" data-aos="fade-up" data-aos-duration="800">
                    <div class="categorie-grid categorie-style-1 color-extra08-style edublink-svg-animate">
                        <div class="icon">
                            <CatIconThree />
                        </div>
                        <div class="content">
                            <NuxtLink to="/course/course-one">
                                <h5 class="title">Off-Campus Programs</h5>
                            </NuxtLink>
                            <p>Lorem ipsum dolor consec tur elit adicing sed umod tempor.</p>
                            <div class="course-remain">8 Courses</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6" data-aos-delay="400" data-aos="fade-up" data-aos-duration="800">
                    <div class="categorie-grid categorie-style-1 color-extra05-style edublink-svg-animate">
                        <div class="icon">
                            <CatIconFour />
                        </div>
                        <div class="content">
                            <NuxtLink to="/course/course-one">
                                <h5 class="title">Hybrid Distance Programs</h5>
                            </NuxtLink>
                            <p>Lorem ipsum dolor consec tur elit adicing sed umod tempor.</p>
                            <div class="course-remain">8 Courses</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div></template>

<script>
import SectionTitle from '../common/SectionTitle.vue';
import CatIconOne from "../svg/CatIconOne.vue"
import CatIconTwo from "../svg/CatIconTwo.vue"
import CatIconThree from "../svg/CatIconThree.vue"
import CatIconFour from "../svg/CatIconFour.vue"

export default {
    components: {
        SectionTitle,
        CatIconOne,
        CatIconTwo,
        CatIconThree,
        CatIconFour
    }
}
</script>