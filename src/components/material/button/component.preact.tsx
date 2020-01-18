import { createRef, h } from 'preact';

import { MDCRipple } from '@material/ripple';

import { PreactComponent } from '../../component.preact';
import { ButtonController } from './controller';

export class ButtonComponent extends PreactComponent {
  private ref = createRef();

  private constructor(props: any) {
    super(props, new ButtonController());
  }

  protected componentDidMount() {
    const element = new MDCRipple(this.ref.current);
    element.listen('MDCRipple:input', () => console.log(`Value input to ${element.value}`));
    element.listen('MDCRipple:change', () => console.log(`Value changed to ${element.value}`));
  }

  public render() {
    return (
      <button class="mdc-button">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">Button</span>
      </button>
    );
  }
}
