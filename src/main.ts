import { createApp } from 'vue';
import App from '@/App.vue';
import { router } from '@/router';
import { MotionPlugin } from '@vueuse/motion';
import AppContainer from '@/components/ui/AppContainer.vue';
import AppButton from '@/components/ui/AppButton.vue';
import '@/main.css';

createApp(App)
  .component('AppContainer', AppContainer)
  .component('AppButton', AppButton)
  .use(router)
  .use(MotionPlugin)
  .mount('#app');
