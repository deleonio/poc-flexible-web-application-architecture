import { createRef, h } from 'preact';

import { MDCSlider } from '@material/slider';

import { PreactComponent } from '../../component.preact';
import { SliderController } from './controller';

export class SliderComponent extends PreactComponent {
  private ref = createRef();

  private constructor(props: any) {
    super(props, new SliderController());
  }

  protected componentDidMount() {
    const slider = new MDCSlider(this.ref.current);
    slider.listen('MDCSlider:input', () => console.log(`Value input to ${slider.value}`));
    slider.listen('MDCSlider:change', () => console.log(`Value changed to ${slider.value}`));
  }

  public render() {
    return (
      <div
        ref={this.ref}
        class="mdc-slider mdc-slider--discrete mdc-slider--display-markers"
        tabindex="0"
        role="slider"
        data-step="15"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="0"
        aria-label="Select Value"
      >
        <div class="mdc-slider__track-container">
          <div class="mdc-slider__track"></div>
          <div class="mdc-slider__track-marker-container"></div>
        </div>
        <div class="mdc-slider__thumb-container">
          <div class="mdc-slider__pin">
            <span class="mdc-slider__pin-value-marker"></span>
          </div>
          <svg class="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875"></circle>
          </svg>
          <div class="mdc-slider__focus-ring"></div>
        </div>
      </div>
    );
  }
}
