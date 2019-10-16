import App from './components/app/component.svelte';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'Sverte',
  version: '3.12.1'
});
require('./shares/register');
require('./shares/routing');

export default new App({
  target: document.querySelector('div#svelte')
});
