import { createRef, h } from 'preact';

import { MDCTextField } from '@material/textfield';

import { PreactComponent } from '../../component.preact';
import { TextFieldController } from './controller';

export class TextFieldComponent extends PreactComponent {
  private ref = createRef();

  private constructor(props: any) {
    super(props, new TextFieldController());
  }

  protected componentDidMount() {
    const slider = new MDCTextField(this.ref.current);
    slider.listen('MDCTextField:input', () => console.log(`Value input to ${slider.value}`));
    slider.listen('MDCTextField:change', () => console.log(`Value changed to ${slider.value}`));
  }

  public render() {
    return (
      <div class="mdc-text-field" ref={this.ref}>
        <input type="text" id="my-text-field" class="mdc-text-field__input"></input>
        <label class="mdc-floating-label" htmlFor="my-text-field">
          Hint text
        </label>
        <div class="mdc-line-ripple"></div>
      </div>
    );
  }
}
