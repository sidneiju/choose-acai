import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('toCurrency', function(value) {
  if (typeof value !== 'number') {
    return value
  }
  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })
  return formatter.format(value)
})

new Vue({
  render: h => h(App)
}).$mount('#app')
