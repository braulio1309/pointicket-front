<template>
    <ul class="mainmenu">
        <li><NuxtLink to="/">{{ $t('Menu.home') }}</NuxtLink></li>
        <li><NuxtLink to="/compra-entradas-de-futbol">{{ $t('Menu.futbol') }}</NuxtLink></li>
        <li><NuxtLink to="/tour-santiago-bernabeu">Tour Bernabeu</NuxtLink></li>
        <li><NuxtLink to="/comprar-entradas-de-baloncesto">{{ $t('Menu.baloncesto') }}</NuxtLink></li>
        <li><NuxtLink to="/comprar-entradas-de-conciertos">{{ $t('Menu.conciertos') }}</NuxtLink></li>
=        <li><NuxtLink to="/contacto">{{ $t('Menu.contact_us') }}</NuxtLink></li>
    </ul>
</template>