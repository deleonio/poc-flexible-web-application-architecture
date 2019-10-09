import { ANGULARJS_MODULE } from '../../angularjs.module';
import { InputController, InputProps } from './controller';

ANGULARJS_MODULE.component('appInput', {
  bindings: {
    props: '<'
  },
  controller: class InputComponent {
    public $ctrl: InputController;
    public props: InputProps;

    public $onInit() {
      this.$ctrl = new InputController(this.props);
    }
  },
  template: `
    <div>
      <label>
        {{$ctrl.props.label}}
        <input ng-model="$ctrl.props.value">
      </label>
      <pre>{{$ctrl.props.value}}</pre>
    </div>
`
});
