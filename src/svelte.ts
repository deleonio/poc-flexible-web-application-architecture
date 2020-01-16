import App from './components/app/component.svelte';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'Svelte',
  version: require('svelte/package.json').version
});
require('./shares/register');
require('./shares/routing');

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#svelte');
htmlDivElement.style.display = 'inline';
export default new App({
  target: htmlDivElement
});
