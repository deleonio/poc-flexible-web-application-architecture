import { Component } from '@angular/core';
import { AppController } from './controller';

@Component({
  selector: 'app',
  template: `
    <div>
      <h4>{{ helloWorld }}</h4>
      <small>{{ framework.name }} v{{ framework.version }} | {{ finishedRendering }} ms upcomming time</small>
      <list-serie></list-serie>
    </div>
  `
})
export class AppComponent extends AppController {}
