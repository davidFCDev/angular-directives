import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemploAttrComponent } from './component/ejemplo-attr/ejemplo-attr.component';
import { EjemploEstrucComponent } from './component/ejemplo-estruc/ejemplo-estruc.component';
import { AttrDirective } from './directives/attr.directive';
import { StrucDirective } from './directives/struc.directive';
import { LifeCycleDirective } from './directives/life-cycle.directive';
import { EjemploLifeCycleComponent } from './component/ejemplo-life-cycle/ejemplo-life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    EjemploAttrComponent,
    EjemploEstrucComponent,
    AttrDirective,
    StrucDirective,
    LifeCycleDirective,
    EjemploLifeCycleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
