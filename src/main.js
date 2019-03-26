import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueParticles from 'vue-particles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faYoutube,
  faVuejs,
  faAws,
  faBitbucket,
  faCss3Alt,
  faHtml5,
  faJira,
  faJsSquare,
  faLess,
  faMarkdown,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';

library.add(
  faTimes,
  faExternalLinkAlt,
  faGithub,
  faYoutube,
  faVuejs,
  faAws,
  faBitbucket,
  faCss3Alt,
  faHtml5,
  faJira,
  faJsSquare,
  faLess,
  faMarkdown,
  faNodeJs,
  faNpm,
  faReact,
  faSass,
);

Vue.use(VueParticles);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({ offset: 75 });
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app');
