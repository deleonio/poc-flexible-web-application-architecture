import { h } from 'preact';

import { PreactComponent } from '../preact.component';

export class InputComponent extends PreactComponent {
  public render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.control.id}>{this.props.control.label}</label>
        <input
          className="form-control"
          id={this.props.control.id}
          name={this.props.control.name}
          value={this.props.control.value}
          onChange={(event: Event) => {
            this.props.control.value = event.target.value;
            this.forceUpdate();
          }}
        />
      </div>
    );
  }
}
