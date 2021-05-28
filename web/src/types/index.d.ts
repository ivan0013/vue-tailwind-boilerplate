import { ToastStore } from '../store';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: ToastStore;
  }
}
