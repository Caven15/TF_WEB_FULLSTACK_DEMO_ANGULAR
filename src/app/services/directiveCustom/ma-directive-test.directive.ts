import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[yellowColorOnPass]'
})
export class MaDirectiveTestDirective {

  constructor(private _elementRef : ElementRef) { }


  @HostListener('mouseenter') onMouseEnter(){
    this.couleurDeFond('Yellow')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.couleurDeFond(null)
  }

  private couleurDeFond(color){
    this._elementRef.nativeElement.style.backgroundColor = color
  }
}
