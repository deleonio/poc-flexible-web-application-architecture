import { ANGULARJS_MODULE } from '../../angularjs.module';
import { AppController } from './controller';

ANGULARJS_MODULE.component('app', {
  controller: AppController,
  template: `
  <div>
    <h4>{{ $ctrl.helloWorld }}</h4>
    <small
      >{{ $ctrl.framework.name }} v{{ $ctrl.framework.version }} | {{ $ctrl.finishedRendering }} ms
      upcomming time</small
    >
  </div>
`
});
