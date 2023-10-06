import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemploAttrComponent } from './component/ejemplo-attr/ejemplo-attr.component';
import { EjemploEstrucComponent } from './component/ejemplo-estruc/ejemplo-estruc.component';
import { AttrDirective } from './directives/attr.directive';

@NgModule({
  declarations: [
    AppComponent,
    EjemploAttrComponent,
    EjemploEstrucComponent,
    AttrDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
