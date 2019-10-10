import React from 'react';

import { ReactComponent } from '../react.component';
import { InputController } from './controller';

export class InputComponent extends ReactComponent {
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
          defaultValue={this.$ctrl.control.value}
          onInput={(event: any) => {
            this.$ctrl.handleChange(event.target.value);
            this.forceUpdate();
          }}
        />
      </div>
    );
  }
}
