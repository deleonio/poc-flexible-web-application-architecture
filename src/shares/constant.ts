export const STARTUP_TIMESTAMP: number = Date.now();

export const APP_HTML_DIV_ELEMENT: HTMLElement = document.createElement('app');
document.querySelector('div#app').appendChild(APP_HTML_DIV_ELEMENT);
