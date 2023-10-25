<template>
    <div ref="CounterUp1" class="counterup-area-7 section-gap-equal">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-5">
                    <div class="counterup-content">
                        <SectionTitle preTitle='Fun Facts'
                            title='The Learge <span class="color-secondary">Number</span> of Counting'
                            subTitle='Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.'
                            alignment='section-left' />
                    </div>
                </div>

                <div class="col-lg-7">
                    <div class="counterup-box-wrap">
                        <div class="counterup-box counterup-box-1">
                            <div class="edu-counterup counterup-style-2">
                                <h2 class="counter-item count-number primary-color">
                                    <span>19.3</span>
                                    <span class="edu-vue-count-suffix">K</span>
                                </h2>
                                <h6 class="title">Student Enrolled</h6>
                            </div>
                            <div class="edu-counterup counterup-style-2">
                                <h2 class="counter-item count-number secondary-color">
                                    <span>12.4</span>
                                    <span class="edu-vue-count-suffix">K</span>
                                </h2>
                                <h6 class="title">Class Completed</h6>
                            </div>
                        </div>
                        <div class="counterup-box counterup-box-2">
                            <div class="edu-counterup counterup-style-2">
                                <h2 class="counter-item count-number extra05-color">
                                    <span>300</span>
                                    <span class="edu-vue-count-suffix">+</span>
                                </h2>
                                <h6 class="title">Top Instructors</h6>
                            </div>
                            <div class="edu-counterup counterup-style-2">
                                <h2 class="counter-item count-number extra02-color">
                                    <span>100</span>
                                    <span class="edu-vue-count-suffix">%</span>
                                </h2>
                                <h6 class="title">Satisfaction Rate</h6>
                            </div>
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth="-1.6" data-aos-delay="100" data-aos="fade"
                                data-aos-duration="100" imgSrc="/images/about/shape-13.png" />
                            <MouseMove addClassName="shape-3" dataDepth="1.6" data-aos-delay="100" data-aos="fade"
                                data-aos-duration="100" imgSrc="/images/counterup/shape-04.png" />
                            <MouseMove addClassName="shape-4" dataDepth="-1.6" data-aos-delay="100" data-aos="fade"
                                data-aos-duration="100" imgSrc="images/counterup/shape-05.png" />
                            <li class="shape-2">
                                <img class="rotateit" src="/images/counterup/shape-02.png" alt="Shape">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from '../common/SectionTitle.vue';
import MouseMove from '../animation/MouseMove.vue';
export default {
    components: {
        MouseMove,
        SectionTitle
    },
}
</script>