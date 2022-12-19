import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
// import AppCard from '@/components/lectures/17/AppCard.vue';

const app = createApp(App);

// app.component('AppCard', AppCard);
app.provide('app-message', 'app meesage 입니다.');

app.config.globalProperties.msg = 'hello'; // vue2에서 전역으로 사용했던 방법

app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
