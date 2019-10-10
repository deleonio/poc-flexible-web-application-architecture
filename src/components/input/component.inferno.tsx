import { Component } from 'inferno';
import { InputController } from './controller';

export class InputComponent extends Component {
  public $ctrl: InputController;

  public constructor(props: any) {
    super(props);
    console.log(props);
    this.$ctrl = new InputController(props.control);
  }

  public render() {
    console.log(this.$ctrl.control);
    return (
      <div>
        <label>
          {this.$ctrl.control.label}
          <input
            defaultValue={this.$ctrl.control.value}
            onInput={(event: any) => {
              this.$ctrl.handleChange(event.target.value);
              this.forceUpdate();
            }}
          />
        </label>
        <pre>{this.$ctrl.control.value}</pre>
      </div>
    );
  }
}
