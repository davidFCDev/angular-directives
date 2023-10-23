import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[rolCorrecto]',
})
export class StrucDirective {
  private _mostrando: boolean = false;

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) {}

  @Input() set rolCorrecto(condicion: boolean) {
    if (condicion && !this._mostrando) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
      this._mostrando = true;
    } else {
      this._viewContainerRef.clear();
      this._mostrando = false;
    }
  }
}
