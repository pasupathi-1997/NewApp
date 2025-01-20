import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private regex: RegExp = new RegExp('^[0-9]*$');

  constructor(private ele:ElementRef) { }
  @HostListener('keypress',['$event'])onKeyPress(event:KeyboardEvent){
    const inputValue: String = this.ele.nativeElement.value.concat(event.key);
    console.log(event.key);
    if(inputValue && !String(inputValue).match(this.regex)){
      event.preventDefault();
    }
    return;
  }
}
