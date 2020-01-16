import '@material/mwc-slider';

import { createRef, h } from 'preact';

import { MDCSlider } from '@material/slider';

import { RouterService } from '../../services/router/service';
import { PreactComponent } from '../component.preact';
import { CreateSerieComponent } from '../series/create/component.preact';
import { EditSerieComponent } from '../series/edit/component.preact';
import { ListSerieComponent } from '../series/list/component.preact';
import { AppController } from './controller';

export class AppComponent extends PreactComponent {
  private resolvedRoute: any = {
    url: 'series'
  };
  public ref = createRef();

  public constructor(props: any) {
    super(props, new AppController());
    RouterService.subscribe((route: any, params: any, query: any) => {
      this.resolvedRoute = {
        params,
        query,
        url: route.url
      };
      this.forceUpdate();
    });
  }

  public componentDidMount() {
    const slider = new MDCSlider(this.ref.current);
    slider.listen('MDCSlider:input', () => console.log(`Value input to ${slider.value}`));
    slider.listen('MDCSlider:change', () => console.log(`Value changed to ${slider.value}`));
  }

  public render() {
    return (
      <div id="app">
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
        <mwc-slider pin markers max="50" value="10" step="5"></mwc-slider>
        <h4>
          {this.$ctrl.framework.name} v{this.$ctrl.framework.version}
        </h4>
        <small>{this.$ctrl.finishedRendering} ms upcomming time</small>
        {this.resolvedRoute.url === 'series' && <ListSerieComponent />}
        {this.resolvedRoute.url === 'series/create' && <CreateSerieComponent />}
        {this.resolvedRoute.url === 'series/:id/edit' && <EditSerieComponent resolvedRoute={this.resolvedRoute} />}
        <small>
          Used filters: {this.$ctrl.filters.date(this.$ctrl.dummies.date)} |{' '}
          {this.$ctrl.filters.currency(this.$ctrl.dummies.price)} €
        </small>
      </div>
    );
  }
}
