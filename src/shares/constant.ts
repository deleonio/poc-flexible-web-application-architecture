import '../style.sass';

import { register } from 'register-service-worker';

export const APP_HTML_ELEMENT: HTMLElement = document.createElement('app');
export const STARTUP_TIMESTAMP: number = Date.now();

register(`sw.js`, {
  ready() {
    console.log(
      'App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB'
    );
  },
  registered() {
    console.log('Service worker has been registered.');
  },
  cached() {
    console.log('Content has been cached for offline use.');
  },
  updatefound() {
    console.log('New content is downloading.');
  },
  updated() {
    console.log('New content is available; please refresh.');
  },
  offline() {
    console.log('No internet connection found. App is running in offline mode.');
  },
  error(error) {
    console.error('Error during service worker registration:', error);
  }
});
window.addEventListener('beforeinstallprompt', e => {
  // Prevent Chrome 76 and later from showing the mini-infobar
  e.preventDefault();
  // Stash the event so it can be triggered later.
  alert('installer');
});
