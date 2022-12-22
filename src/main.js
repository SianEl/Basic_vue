import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
// import AppCard from '@/components/lectures/17/AppCard.vue';
import router from './router';

const app = createApp(App).use(router);

// app.component('AppCard', AppCard);
app.provide('app-message', 'app meesage 입니다.');

app.config.globalProperties.msg = 'hello'; // vue2에서 전역으로 사용했던 방법

app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

console.log('MODE', import.meta.env.MODE); // vite.config.js에서 설정 가능 default로 development.
console.log('BASE_URL', import.meta.env.BASE_URL);
console.log('PROD', import.meta.env.PROD);
console.log('DEV', import.meta.env.DEV);
console.log('VITE_APP_API_URL', import.meta.env.VITE_APP_API_URL);
