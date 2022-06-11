import {Directive, Input, ElementRef, Renderer2,HostListener} from '@angular/core';

// <tr [setColor]="VALUE-FROM-UI"></tr>

@Directive({
  selector: '[setColor]'
})
export class ColorDirective {

  // a property that will map with the directive
  // when the value is passed to the directive, it will be
  // set to the public property e.g. setColor public property
  @Input('setColor')setColor:string;

  // Inject ElementRef and Renderer2, instances of these classes
  // will be resolved using 'BrowserModule' while rendering takes place
  constructor(private element:ElementRef, private renderer:Renderer2){
    this.setColor = '';
  }

  // Lets write the logic
  // THis Logic method will be accessed using events on HTML element
  // Where the Directive is applied
  private applyColor(color:string):void {
    // lets apply the color to HTML Element on which the directive is applied
    // Change the Background Style of the HTML element on which
    // the Directive is applied. THis HTML Element will be referred using
    //  this.element.nativeElement
    // backgroundColorChange the BackgroundColor Style
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', color);
  }

  // LOgic will be called when MouseEnter EVent is raised on HTML Element
  // where the Directive is applied
  @HostListener('mouseenter')
  onmouseenter():void {
    // default color will be blue
    this.applyColor(this.setColor || 'grey');
  }
   // LOgic will be called when MouseLeave EVent is raised  on HTML Element
  // where the Directive is applied
  @HostListener('mouseleave')
  onmouneleave():void {
    this.applyColor('');
  }
}
