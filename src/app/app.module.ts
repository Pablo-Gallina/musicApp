import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // Se importan: componentes, directivas, pipes
    AppComponent
  ],
  imports: [ //Solo Se importan otros modulos
    BrowserModule,
    AppRoutingModule
  ],
  //export[AppComponent], solo se exporta lo que declaramos
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
