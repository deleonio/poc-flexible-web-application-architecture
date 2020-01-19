import Vue from 'vue';

import { DI } from '@leanup/features/injector';
import VueCompositionApi from '@vue/composition-api';

import App from './components/app/component.vue';
import { APP_HTML_ELEMENT } from './shares/constant';

// https://github.com/vuejs/vue-devtools
Vue.config.devtools = process.env.NODE_ENV === 'development';

DI.register('Framework', {
  name: 'Vue',
  version: Vue.version
});
require('./shares/register');
require('./shares/routing');

Vue.use(VueCompositionApi);

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#vue');
if (htmlDivElement instanceof HTMLDivElement) {
  htmlDivElement.style.display = 'inline';
  htmlDivElement.appendChild(APP_HTML_ELEMENT);
  // tslint:disable-next-line: no-unused-expression
  new Vue({
    el: APP_HTML_ELEMENT,
    render: (h: any) => h(App)
  });
}
