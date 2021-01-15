import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      needsUser: true,
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */'../views/Signup.vue')
  },
  {
    path: '/favourite',
    name: 'Favourite',
    component: () => import(/* webpackChunkName: "favourite" */'../views/Favourite.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */'../views/Profile.vue')
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import(/* webpackChunkName: "book" */'../views/Book.vue')
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: () => import(/* webpackChunkName: "addbook" */'../views/AddBook.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log("stara ruta", from.name, " ->", to.name, "korisnik", store.currentUser)
  
  const noUser = store.currentUser === null;

  if (noUser && to.meta.needsUser) {
    next('Login');
  }else{
    next();
  }

});

export default router
