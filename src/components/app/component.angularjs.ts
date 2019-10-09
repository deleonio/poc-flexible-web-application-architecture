import { ANGULARJS_MODULE } from '../../angularjs.module';
import { AppController } from './controller';

ANGULARJS_MODULE.component('app', {
  controller: AppController,
  template: `
  <div>
    <h4>{{ this.$ctrl.helloWorld }}</h4>
    <small
      >{{ this.$ctrl.framework.name }} v{{ this.$ctrl.framework.version }} | {{ this.$ctrl.finishedRendering }} ms
      upcomming time</small
    >
  </div>
`
});
