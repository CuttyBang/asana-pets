import "./main.scss";
import Vue from 'vue'
import App from './App.vue'
import VueImg from 'v-img';

Vue.use(VueImg);

new Vue({
  el: '#app',
  render: h => h(App),
});
