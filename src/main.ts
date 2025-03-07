import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import '~/assets/styles/index.css'
import router from '~/router/index.ts'
import App from './App.vue'
import 'primeicons/primeicons.css';

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: false,
      cssLayer: false
    }
  }
});
app.mount('#app')
