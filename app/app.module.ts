import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent } from './app.component';
@NgModule({
  imports: [
    BrowserModules
  ],
  declarations: [AppComponent,TesterComponent,SimpleList],
  bootstrap: [AppComponent]
})
export class AppModule {
    
}