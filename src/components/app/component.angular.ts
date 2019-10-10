import { Component } from '@angular/core';
import { AppController } from './controller';

@Component({
  selector: 'app',
  template: `
    <div>
      <h4>{{ $ctrl.helloWorld }}</h4>
      <small
        >{{ $ctrl.framework.name }} v{{ $ctrl.framework.version }} | {{ $ctrl.finishedRendering }} ms upcomming
        time</small
      >
      <list-serie></list-serie>
    </div>
  `
})
export class AppComponent {
  public $ctrl: AppController = new AppController();
}
