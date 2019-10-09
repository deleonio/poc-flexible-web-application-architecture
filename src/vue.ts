import Vue from 'vue';

import VueCompositionApi from '@vue/composition-api';

import App from './components/app/component';
import { APP_HTML_DIV_ELEMENT } from './shares/constant';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'Vue',
  version: Vue.version
});
require('./shares/register');

Vue.use(VueCompositionApi);

// tslint:disable-next-line: no-unused-expression
new Vue({
  el: APP_HTML_DIV_ELEMENT,
  render: (h: any) => h(App)
});
