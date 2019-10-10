import { ANGULARJS_MODULE } from '../../angularjs.module';
import { InputController } from './controller';

ANGULARJS_MODULE.component('appInput', {
  bindings: {
    control: '<'
  },
  controller: InputController,
  template: `
  <div class="form-group">
    <label for="{{this.$ctrl.control.name}}">{{this.$ctrl.control.label}}</label>
    <input
      class="form-control"
      id="{{this.$ctrl.control.name}}"
      name="{{this.$ctrl.control.name}}"
      ng-model="$ctrl.control.value"
    />
  </div>
`
});
