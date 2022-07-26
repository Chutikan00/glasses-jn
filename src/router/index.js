import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Homepage.vue';
import Product from '@/views/Product.vue';
import Cart from '@/views/Cart.vue';
import Push from '@/views/Home.vue';
import Test from '@/views/Test.vue';
import About from '@/views/About.vue';
import Edit from '@/views/Edit.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/push',
    name: 'Push',
    component: Push,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
