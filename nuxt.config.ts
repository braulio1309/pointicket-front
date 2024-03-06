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
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      title: "Tickets",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/fav_pointickets.png" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Spartan:wght@400;500;600;700;800&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://sibforms.com/forms/end-form/build/sib-styles.css",
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2",
          crossorigin: "anonymous",
        },
        {
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5W3F2VFP');`,
          tagPriority: 'high'
        },
        { src: 'https://js.stripe.com/v3' }
      ],
      noscript: [
        {
          children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5W3F2VFP"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          tagPosition: 'bodyClose'
        }
      ]
    },
    modules: [
      '@nuxt/i18n',
    ],
    i18n: {
      vueI18n: './i18n.config.ts' // if you are using custom path, default 
    }
  },
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.API_BASE_URL || "/test",
      apiBaseImage: process.env.API_BASE_IMAGE || "/",
      STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,

    },
  },

});
