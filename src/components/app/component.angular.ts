import { Component } from '@angular/core';
import { AppController } from './controller';

@Component({
  selector: 'app',
  template: `
    <div>
      <h4>{{ this.$ctrl.helloWorld }}</h4>
      <small
        >{{ this.$ctrl.framework.name }} v{{ this.$ctrl.framework.version }} | {{ this.$ctrl.finishedRendering }} ms
        upcomming time</small
      >
    </div>
  `
})
export class AppComponent {
  public $ctrl: Object = new AppController();
}
