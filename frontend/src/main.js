import { createApp } from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import App from './App.vue'

createApp(App)
  .use(Vuesax)
  .mount('#app')


