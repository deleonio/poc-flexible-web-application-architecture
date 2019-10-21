export const APP_HTML_ELEMENT: HTMLElement = document.createElement('app');
export const STARTUP_TIMESTAMP: number = Date.now();
export const WEBPACK_MODE: string = '$$WEBPACK_MODE$$';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('service-worker.js', {
      scope: '/poc/'
    })
    .then((registration: any) => console.log(`Service worker successfully registered for ${registration.scope}`))
    .catch((err: any) => console.log(`Service worker registration failed: ${err}`));
}
