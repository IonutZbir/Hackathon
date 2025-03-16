import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Services from '@/views/Services.vue';
import Why from '@/views/Why.vue';
import Team from '@/views/Team.vue';
import Login from '@/views/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/why', component: Why },
  { path: '/team', component: Team },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
