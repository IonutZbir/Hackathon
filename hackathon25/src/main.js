import { createApp } from 'vue';
import App from '../App.vue';
import router from './router';

import jQuery from 'jquery'
window.$ = jQuery

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faUser, faPlus, faUsers);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router); 
app.mount('#app');
