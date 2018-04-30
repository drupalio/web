import Vue from 'vue';
import VueRouter from 'vue-router';
import InstantSearch from 'vue-instantsearch';
import App from './App.vue';
import Search from './Search.vue';
import qs from 'qs';

Vue.use(InstantSearch);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/search', component: Search, props: route => ({ queryParameters: route.query }) },
    { path: '/', redirect: '/search' },
    { path: '/foo', redirect: '/search' }
  ],
  parseQuery(query) {
    return qs.parse(query);
  },
  stringifyQuery(query) {
    const result = qs.stringify(query);

    return result ? `?${result}` : '';
  },
});

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
