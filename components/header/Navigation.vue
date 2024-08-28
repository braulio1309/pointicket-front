<template>
    <ul class="mainmenu">
        <li><NuxtLink to="/">{{ $t('Menu.home') }}</NuxtLink></li>
        <li><NuxtLink to="/compra-entradas-de-futbol">{{ $t('Menu.buy_tickets') }}</NuxtLink></li>
        <li><NuxtLink to="/preguntas-frecuentes">FAQs</NuxtLink></li>
        <li><NuxtLink to="/tour-santiago-bernabeu">Tour Santiago Bernabeu</NuxtLink></li>
        <li><NuxtLink to="/contacto">{{ $t('Menu.contact_us') }}</NuxtLink></li>
    </ul>
</template>