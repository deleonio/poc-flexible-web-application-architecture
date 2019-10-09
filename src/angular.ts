import 'core-js';
import 'zone.js';
import { FormsModule } from '@angular/forms';
import { NgModule, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './components/app/component.angular';
import { InputComponent } from './components/input/component.angular';
import { DI } from './shares/injector';

DI.register('Framework', {
  name: 'Angular',
  version: VERSION.full
});
require('./shares/register');

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, InputComponent],
  imports: [BrowserModule, FormsModule]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
