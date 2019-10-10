import { Component, Input } from '@angular/core';

import { InputControl, InputController } from './controller';

@Component({
  selector: 'app-input',
  template: `
    <div class="form-group">
      <label for="{{ this.control.name }}">{{ this.control.label }}</label>
      <input
        class="form-control"
        id="{{ this.control.name }}"
        name="{{ this.control.name }}"
        [(ngModel)]="this.control.value"
      />
    </div>
  `
})
export class InputComponent {
  public $ctrl: InputController = new InputController();
  @Input() public control: InputControl;
}
