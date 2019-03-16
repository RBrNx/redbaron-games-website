import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueParticles from 'vue-particles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTimes, faExternalLinkAlt, faGithub, faYoutube);

Vue.use(VueParticles);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
