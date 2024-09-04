import { createRouter, createWebHistory } from 'vue-router';
import mainView from '../view/mainView.vue';


// Define your routes here
const routes = [
  {
    path: '/',
    name: 'Main',
    component: mainView,
  },
];

// Create the router instance and pass the routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
