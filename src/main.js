import Vue from 'vue'
import App from './App.vue'
import Multiselect from './Multiselect'
import multiselectMixin from './multiselectMixin'
import pointerMixin from './pointerMixin'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

export { Multiselect, multiselectMixin, pointerMixin }