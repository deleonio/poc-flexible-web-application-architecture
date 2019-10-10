import { Component } from 'inferno';
import { InputController } from './controller';

export class InputComponent extends Component {
  public $ctrl: InputController;

  public constructor(props: any) {
    super(props);
    this.$ctrl = new InputController(props.control);
  }

  public render() {
    this.$ctrl.control = this.props.control;
    return (
      <div class="form-group">
        <label htmlFor={this.$ctrl.control.name}>{this.$ctrl.control.label}</label>
        <input
          className="form-control"
          id={this.$ctrl.control.name}
          name={this.$ctrl.control.name}
          value={this.$ctrl.control.value}
          onInput={(event: any) => {
            this.$ctrl.handleChange(event.target.value);
            this.forceUpdate();
          }}
        />
      </div>
    );
  }
}
