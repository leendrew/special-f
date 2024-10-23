import { createApp } from 'vue';
import App from '@/App.vue';
import { router } from '@/router';
import { MotionPlugin } from '@vueuse/motion';
import AppContainer from '@/components/ui/AppContainer.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppOverlay from '@/components/ui/AppOverlay.vue';
import AppModal from '@/components/ui/AppModal.vue';
import '@/main.css';

createApp(App)
  .component('AppContainer', AppContainer)
  .component('AppButton', AppButton)
  .component('AppOverlay', AppOverlay)
  .component('AppModal', AppModal)
  .use(router)
  .use(MotionPlugin)
  .mount('#app');
