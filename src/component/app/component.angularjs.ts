import { ANGULARJS_MODULE } from '../../angularjs.module';
import { AppController } from './controller';

ANGULARJS_MODULE.component('app', {
  template: '<div>{{ this.$ctrl.helloWorld }}</div>',
  controller: AppController
});
