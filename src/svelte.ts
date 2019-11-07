import App from './components/app/component.svelte';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'Sverte',
  version: require('svelte/package.json').version
});
require('./shares/register');
require('./shares/routing');

export default new App({
  target: document.querySelector('div#svelte')
});
