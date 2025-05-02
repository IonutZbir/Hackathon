import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Gallery from '@/views/Gallery.vue';
import Create from '@/views/Create.vue';
import Teams from '@/views/Teams.vue';
import Info from '@/views/Info.vue';
import Join from '@/views/Join.vue';

const routes = [
  { path: '/', component: Home },
  // { path: '/about', component: About },
  // { path: '/requiments', component: Requiments },
  { path: '/gallery', component: Gallery },
  { path: '/create', component: Create },
  { path: '/teams', component: Teams },
  { path: '/info', component: Info },
  { path: '/unisciti', component: Join},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;