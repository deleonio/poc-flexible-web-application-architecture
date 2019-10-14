import Vue from 'vue';

import VueCompositionApi from '@vue/composition-api';

import App from './components/app/component.vue';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'Vue',
  version: Vue.version
});
require('./shares/register');

Vue.use(VueCompositionApi);

// tslint:disable-next-line: no-unused-expression
new Vue({
  el: document.querySelector('div#vue'),
  render: (h: any) => h(App)
});
