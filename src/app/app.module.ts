import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemploAttrComponent } from './component/ejemplo-attr/ejemplo-attr.component';
import { EjemploEstrucComponent } from './component/ejemplo-estruc/ejemplo-estruc.component';
import { AttrDirective } from './directives/attr.directive';
import { EjemploLifeCycleComponent } from './components/ejemplo-life-cycle/ejemplo-life-cycle.component';
import { StrucDirective } from './directives/struc.directive';
import { LifeCycleDirective } from './directives/life-cycle.directive';

@NgModule({
  declarations: [
    AppComponent,
    EjemploAttrComponent,
    EjemploEstrucComponent,
    EjemploLifeCycleComponent,
    AttrDirective,
    StrucDirective,
    LifeCycleDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
