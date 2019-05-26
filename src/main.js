import Vue from 'vue'
import App from './components/App/App.vue'
import Multiselect from './components/Multiselect/Multiselect.vue'
import multiselectMixin from './components/Multiselect/multiselectMixin'
import pointerMixin from './components/Multiselect/pointerMixin'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

export { Multiselect, multiselectMixin, pointerMixin }