import { Component } from '@angular/core';
import { AppController } from './controller';

@Component({
  selector: 'app',
  template: `
    <div id="app">
      <h4>{{ framework.name }} v{{ framework.version }}</h4>
      <small>{{ finishedRendering }} ms upcomming time</small>
      <list-serie></list-serie>
    </div>
  `
})
export class AppComponent extends AppController {}
