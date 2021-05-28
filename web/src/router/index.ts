import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import notFound from '@/router/routes/notFound.ts';
import noPermission from '@/router/routes/noPermissions.ts';
import home from '@/router/routes/home.ts';

const routes: Array<RouteRecordRaw> = [home, notFound, noPermission];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
