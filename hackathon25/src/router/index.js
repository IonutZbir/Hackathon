import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Gallery from '@/views/Gallery.vue';
import Create from '@/views/Create.vue';
import Teams from '@/views/Teams.vue';
import Info from '@/views/Info.vue';
import Join from '@/views/Join.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  { path: '/', alias: ['/home'], component: Home },
  { path: '/gallery', component: Gallery },
  { path: '/create', component: Create },
  { path: '/teams', component: Teams },
  { path: '/info', component: Info },
  { path: '/unisciti', component: Join},
  // {path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;