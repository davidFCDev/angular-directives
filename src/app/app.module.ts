import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemploAttrComponent } from './component/ejemplo-attr/ejemplo-attr.component';
import { EjemploEstrucComponent } from './component/ejemplo-estruc/ejemplo-estruc.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploAttrComponent,
    EjemploEstrucComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
