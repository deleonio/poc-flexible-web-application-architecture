import VueCompositionApi from '@vue/composition-api';

import Vue from 'vue';

import { APP_HTML_DIV_ELEMENT } from './constants';

import App from './components/app/component';

Vue.use(VueCompositionApi);

// tslint:disable-next-line: no-unused-expression
new Vue({
  el: APP_HTML_DIV_ELEMENT,
  render: (h: any) => h(App)
});
