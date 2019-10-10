import React, { Component } from 'react';
import { InputController } from './controller';

export class InputComponent extends Component {
  public $ctrl: InputController;

  public constructor(props: any) {
    super(props);
    this.$ctrl = new InputController(props.props);
  }

  public render() {
    return (
      <div>
        <label>
          {this.$ctrl.props.label}
          <input
            defaultValue={this.$ctrl.props.value}
            onInput={(event: any) => {
              this.$ctrl.props.value = event.target.value;
              this.forceUpdate();
            }}
          />
        </label>
        <pre>{this.$ctrl.props.value}</pre>
      </div>
    );
  }
}