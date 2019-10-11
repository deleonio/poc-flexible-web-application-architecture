import { ANGULARJS_MODULE } from '../../angularjs.module';
import { InputController } from './controller';

ANGULARJS_MODULE.component('appInput', {
  bindings: {
    control: '<'
  },
  controller: InputController,
  template: `
  <div class="form-group">
    <label for="{{$ctrl.control.name}}">{{$ctrl.control.label}}</label>
    <input
      class="form-control"
      id="{{$ctrl.control.name}}"
      name="{{$ctrl.control.name}}"
      ng-model="$ctrl.control.value"
    />
  </div>
`
});
