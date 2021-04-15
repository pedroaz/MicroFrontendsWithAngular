import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutageScreenComponent } from './outage-screen/outage-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    OutageScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents:[
    OutageScreenComponent
  ]
})
export class AppModule {
  constructor(private injector : Injector){

  }

  ngDoBootstrap(){
    const el = createCustomElement(OutageScreenComponent, {injector: this.injector})
    customElements.define('outage-screen', el);
  }
 }
