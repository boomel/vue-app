import Vue from 'vue'
import App from './App.vue'

import appMessage from './components/Message.vue'
import appQuestion from './components/Question.vue'
import appResult from './components/Result.vue'
import appStartScreen from './components/StartScreen.vue'


Vue.component('appMessage', appMessage);
Vue.component('appQuestion', appQuestion);
Vue.component('appResult', appResult);
Vue.component('appStartScreen', appStartScreen);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
