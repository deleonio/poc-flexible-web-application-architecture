import { InputControl } from '../../input/controller';

export class FormControl {
  public name: string = null;

  constructor(name: string, properties: any = {}) {
    this.name = name;
    // tslint:disable-next-line: no-empty
    if (properties) {
    }
  }
}

export class EditorForm extends FormControl {
  public readonly titleInput: InputControl = new InputControl('title', {
    label: 'Title',
    value: null
  });
  public readonly unitInput: InputControl = new InputControl('unit', {
    label: 'Unit',
    value: null
  });
}
