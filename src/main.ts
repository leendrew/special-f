import { createApp } from 'vue';
import App from '@/App.vue';
import { router } from '@/router';
import { MotionPlugin } from '@vueuse/motion';
import AppContainer from '@/components/ui/AppContainer.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppOverlay from '@/components/ui/AppOverlay.vue';
import '@/main.css';

createApp(App)
  .component('AppContainer', AppContainer)
  .component('AppButton', AppButton)
  .component('AppOverlay', AppOverlay)
  .use(router)
  .use(MotionPlugin)
  .mount('#app');
