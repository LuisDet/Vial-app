export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'guatemala-app',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
  target: 'static',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.snow.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/vue-quill-editor.js', ssr: false },
    '~plugins/vue-js-modal.js',
    '~plugins/uuid.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
  ],

  firebase: {
    config: {
      apiKey: 'AIzaSyCuyDi4FPv_Wv-gK6torivoxIj_B9iYHcY',
      authDomain: 'guatemala-28e6f.firebaseapp.com',
      projectId: 'guatemala-28e6f',
      storageBucket: 'guatemala-28e6f.appspot.com',
      messagingSenderId: '666560792719',
      appId: '1:666560792719:web:a96bd1852a3db3ce5508fa',
    },
    services: {
      auth: true,
      firestore: true,
    },
  },
  auth: {
    persistence: 'session', // default
    initialize: {
      onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
      onAuthStateChangedAction: 'onAuthStateChangedAction',
      subscribeManually: false,
    },
    ssr: false, // default
    emulatorPort: 9099,
    emulatorHost: 'http://localhost',
  },
  firestore: {
    memoryOnly: false, // default
    chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
    enablePersistence: true,
    emulatorPort: 3000,
    emulatorHost: 'localhost',
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  serverMiddleware: ['~/api/index.js'],
}
