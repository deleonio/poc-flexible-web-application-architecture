import { InfernoComponent } from '../inferno.component';
import { InputController } from './controller';

export class InputComponent extends InfernoComponent {
  public constructor(props: any) {
    super(props, new InputController(props.control));
  }

  public render() {
    this.$ctrl.control = this.props.control;
    return (
      <div className="form-group">
        <label htmlFor={this.$ctrl.control.name}>{this.$ctrl.control.label}</label>
        <input
          className="form-control"
          id={this.$ctrl.control.name}
          name={this.$ctrl.control.name}
          value={this.$ctrl.control.value}
          onChange={(event: any) => {
            this.$ctrl.handleChange(event.target.value);
            this.forceUpdate();
          }}
        />
      </div>
    );
  }
}
