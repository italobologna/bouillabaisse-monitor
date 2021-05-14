import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)
Vue.use(VueRouter)

const opts = {
    theme: {
        themes: {
            light: {
                background: '#EEEEEE'
            },
            dark: {
                background: '#121212'
            }
        }
    },
    options: {
        customProperties: true
    },
}

export default new Vuetify(opts)
