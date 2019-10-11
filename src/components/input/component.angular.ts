import { Component, Input } from '@angular/core';

import { InputControl, InputController } from './controller';

@Component({
  selector: 'app-input',
  template: `
    <div class="form-group">
      <label for="{{ control.name }}">{{ control.label }}</label>
      <input class="form-control" id="{{ control.name }}" name="{{ control.name }}" [(ngModel)]="control.value" />
    </div>
  `
})
export class InputComponent extends InputController {
  @Input() public control: InputControl;
}
