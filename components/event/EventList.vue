<template>
    <div class="edu-event-list event-list-2">
        <div class="">
            <div class="content">
                <div class="row">
                    <div class="col-sm-6">
                        <ul class="event-meta">
                            <li>{{ eventInfo.fullDate }}</li>
                        </ul>
                        <h6 class="title">
                            <NuxtLink to="/event/event-details">{{ eventInfo.title }}</NuxtLink>
                        </h6>
                    </div>
                    <div class="col-sm-6">
                        <div class="read-more-btn">
                            <NuxtLink class="edu-btn btn-medium btn-border" to="/event/event-details">Comprar <i
                                    class="icon-4"></i></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['eventInfo']
}
</script>