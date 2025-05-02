import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
// import About from '@/views/About.vue';
// import Requiments from '@/views/Requiments.vue';
import Register from '@/views/Register.vue';
import Gallery from '@/views/Gallery.vue';
import Create from '@/views/Create.vue';
import Teams from '@/views/Teams.vue';
import Info from '@/views/Info.vue';

const routes = [
  { path: '/', component: Home },
  // { path: '/about', component: About },
  // { path: '/requiments', component: Requiments },
  { path: '/gallery', component: Gallery },
  { path: '/create', component: Create },
  { path: '/teams', component: Teams },
  { path: '/info', component: Info },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
