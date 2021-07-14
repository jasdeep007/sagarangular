import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[sagar]'
})
export class SagarDirective {

  constructor(private eleRef: ElementRef) { 
    eleRef.nativeElement.style.background = 'red';
  }

}
