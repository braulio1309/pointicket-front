export default defineNuxtRouteMiddleware((to, from) => {
    if(window.localStorage.getItem('user') == ''){
        return navigateTo('/login');
    }
  })
  