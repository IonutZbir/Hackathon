import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Requiments from '@/views/Requiments.vue';
import Register from '@/views/Register.vue';
import Gallery from '@/views/Gallery.vue';
import Create from '@/views/Create.vue';
import Access from '@/views/Access.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/requiments', component: Requiments },
  { path: '/gallery', component: Gallery },
  { path: '/create', component: Create },
  { path: '/access', component: Access },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
