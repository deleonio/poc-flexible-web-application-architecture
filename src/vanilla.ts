import './components/app/component.vanilla';

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#vanilla');
const appElement: HTMLElement = document.createElement('wc-app');
htmlDivElement.appendChild(appElement);
