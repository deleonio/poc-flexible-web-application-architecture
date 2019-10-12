// Polyfills
import 'core-js/features/reflect';
import 'zone.js/dist/zone';

import { NgModule, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './components/app/component.angular';
import { InputComponent } from './components/input/component.angular';
import { CreateSerieComponent } from './components/series/create/component.angular';
import { EditSerieComponent } from './components/series/edit/component.angular';
import { EditorSerieComponent } from './components/series/editor/component.angular';
import { ListSerieComponent } from './components/series/list/component.angular';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'Angular',
  version: VERSION.full
});
require('./shares/register');

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    InputComponent,
    CreateSerieComponent,
    EditSerieComponent,
    EditorSerieComponent,
    ListSerieComponent
  ],
  imports: [BrowserModule, FormsModule]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
