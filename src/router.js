/*jshint esversion: 6 */

import Vue from 'vue';
import Skills from './components/Skills.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/about/:name',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }

  ]
});
