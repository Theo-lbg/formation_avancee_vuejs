import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'unfonts.css'

import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(createPinia()).use(router).use(vuetify).mount('#app')
