import Vue from 'vue'
import App from './App.vue'
import Form from './Form.vue'

import AppMessage from './components/Message.vue'
import AppQuestion from './components/Question.vue'
import AppResultScreen from './components/ResultScreen.vue'
import AppStartScreen from './components/StartScreen.vue'
import FormInput from './components/form/FormInput.vue'

Vue.component('AppMessage', AppMessage);
Vue.component('AppQuestion', AppQuestion);
Vue.component('AppResultScreen', AppResultScreen);
Vue.component('AppStartScreen', AppStartScreen);
Vue.component('FormInput', FormInput);

new Vue({
  el: '#form',
  render: h => h(Form)
});
