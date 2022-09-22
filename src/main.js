import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import AotterUI, { chakraConfig } from '@aotter/aotter-ui'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'
import {JsonForms} from "@jsonforms/vue2";

Vue.config.productionTip = false

Vue.use(VueCompositionApi)
Vue.use(Chakra, chakraConfig)
Vue.use(AotterUI, { global: true })
Vue.use(JsonForms)

new Vue({
  render: h => h(CThemeProvider, [h(CReset), h(App)])
}).$mount('#app')