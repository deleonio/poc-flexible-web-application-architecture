import { Component, Input, OnInit } from '@angular/core';

import { InputController, InputProps } from './controller';

@Component({
  selector: 'app-input',
  template: `
    <div>
      <label>
        {{ $ctrl.props.label }}
        <input [(ngModel)]="$ctrl.props.value" />
      </label>
      <pre>{{ $ctrl.props.value }}</pre>
    </div>
  `
})
export class InputComponent implements OnInit {
  public $ctrl: InputController;
  @Input() public props: InputProps;

  public ngOnInit() {
    this.$ctrl = new InputController(this.props);
  }
}
