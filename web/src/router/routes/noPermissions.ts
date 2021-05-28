import { RouteRecordRaw } from 'vue-router';

const noPermission: RouteRecordRaw = {
  path: '/no-permission',
  name: 'no-permission',
  component: () => import(/* webpackChunkName: "no-permission" */ '@/views/NoPermission.vue'),
};

export default noPermission;
