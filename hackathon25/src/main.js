import { createApp } from 'vue';
import App from '../App.vue';
import router from './router';

import jQuery from 'jquery'
window.$ = jQuery

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa Bootstrap JS

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faPlus, faUsers, faLocationDot, faEnvelope, faGlobe, faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faUser, faPlus, faUsers, faLocationDot, faEnvelope, faInstagram, faGithub, faTelegram, faGraduationCap, faGlobe);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router); 
app.mount('#app');
