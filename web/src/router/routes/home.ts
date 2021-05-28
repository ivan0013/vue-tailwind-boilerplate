import { RouteRecordRaw } from 'vue-router';

const home: RouteRecordRaw = {
  path: '/',
  name: 'home',
  component: () => import('@/views/Home.vue'),
};

export default home;
