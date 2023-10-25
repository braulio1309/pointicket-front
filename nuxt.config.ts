// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
      "bootstrap/scss/bootstrap.scss",
      "swiper/css/bundle",
      "vue3-carousel/dist/carousel.css",
      "~/assets/scss/app.scss",
    ],
    app: {
      head: {
        name: 'viewport', content: 'width=device-width, initial-scale=1',
        title: 'Tickets',
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Spartan:wght@400;500;600;700;800&display=swap"
        }
        ],
        script: [
          {
            src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
            integrity:
              "sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2",
            crossorigin: "anonymous",
          },
        ],
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5W3F2VFP');`,
      },
    },
    runtimeConfig: {
  
      // Public keys that are exposed to the client
      public: {
        apiBase: process.env.API_BASE_URL || '/localhost',
        apiBaseImage: process.env.API_BASE_IMAGE || '/localhost:1337'
      }
    }
    
  });
  