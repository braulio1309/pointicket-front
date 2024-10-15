<template>
    <ul class="mainmenu">
        <li><NuxtLink to="/">{{ $t('Menu.home') }}</NuxtLink></li>
        <li><NuxtLink to="/compra-entradas-de-futbol">Futbol</NuxtLink></li>
        <li><NuxtLink to="/tour-santiago-bernabeu">Tour Bernabeu</NuxtLink></li>
        <li><NuxtLink to="/comprar-entradas-de-baloncesto">Baloncesto</NuxtLink></li>
        <li><NuxtLink to="/comprar-entradas-de-conciertos">Conciertos</NuxtLink></li>
=        <li><NuxtLink to="/contacto">{{ $t('Menu.contact_us') }}</NuxtLink></li>
    </ul>
</template>