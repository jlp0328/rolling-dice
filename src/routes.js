import Vue from 'vue';
import Router from 'vue-router';
import Welcome from '@/components/Welcome';
import Main from '@/components/Main';
import Winner from '@/components/Winner';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/play',
      name: 'main',
      component: Main
    },
    {
      path: '/winner',
      name: 'winner',
      component: Winner
    }
  ]
});
