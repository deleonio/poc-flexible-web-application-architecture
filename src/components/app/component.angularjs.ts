import { ANGULARJS_MODULE } from '../../angularjs.module';
import { AppController } from './controller';

ANGULARJS_MODULE.component('app', {
  controller: AppController,
  template: `
  <div id="app">
    <h4>{{ $ctrl.framework.name }} v{{ $ctrl.framework.version }}</h4>
    <small>{{ $ctrl.finishedRendering }} ms upcomming time</small>
    <list-serie></list-serie>
  </div>
`
});
