import { RouteRecordRaw } from 'vue-router';

const notFound: RouteRecordRaw = {
  path: '/:catchAll(.*)',
  name: 'not-found',
  component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue'),
  meta: {
    isPublic: true,
  },
};

export default notFound;
