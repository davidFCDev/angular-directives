import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AttrDirective {

  @Input () defaultColor = '';
  @Input ('appHighlight') highlightColor = '';

  constructor(private _elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this._setBackgroundColor(this.highlightColor || this.defaultColor || 'tomato');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._setBackgroundColor(null);
  }

  /**
   * Metodo para cambiar el color de fondo de un componente
   * @param color Color para el fondo del componente
   */

  private _setBackgroundColor(color: string | null) {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }
}
