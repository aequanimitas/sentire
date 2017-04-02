import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
axios.post('http://localhost:4000/api/register', {
  user: {
    username: 'hta',
    password: 'curacha'
  }
}).then((res) => {
  console.log(res)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
