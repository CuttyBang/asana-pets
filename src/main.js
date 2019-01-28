import "./main.scss";
import Vue from 'vue'
import App from './App.vue'
//native Vue lightbox plugin
import VueImg from 'v-img'
//Show alt tag as 'title'
const vueImgConfig = {altAsTitle: true}
//Envoke plugin
Vue.use(VueImg, vueImgConfig);

new Vue({
  el: '#app',
  render: h => h(App),
});
