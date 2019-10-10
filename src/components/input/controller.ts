export class InputControl {
  public label: string = null;
  public name: string = null;
  public value: any = null;

  constructor(name: string, properties: any = {}) {
    this.name = name;
    if (properties) {
      this.label = properties.label;
      this.value = properties.value;
    }
  }
}

export class InputController {
  public control: InputControl = new InputControl('unnamed');

  constructor(control: InputControl) {
    this.control = control;
  }

  public handleChange(value: any) {
    this.control.value = value;
  }
}
