import Vue from 'vue';

import VueCompositionApi from '@vue/composition-api';

import { APP_HTML_DIV_ELEMENT } from './constants';

Vue.use(VueCompositionApi);

new Vue({
  el: APP_HTML_DIV_ELEMENT
});
