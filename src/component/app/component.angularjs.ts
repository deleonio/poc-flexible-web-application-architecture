import * as angular from 'angular';
import { ANGULARJS_MODULE } from '../../angularjs.module';
import { AppController } from './controller';

ANGULARJS_MODULE.component('app', {
  controller: AppController,
  template: `
  <div>
    <h4>{{ this.$ctrl.helloWorld }}</h4>
    <small>AngularJS v${angular.version.full} | {{ this.$ctrl.finishedRendering }} ms upcomming time</small>
  </div>
`
});
