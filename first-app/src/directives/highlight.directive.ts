import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  // el:ElementRef; 
  constructor(private el: ElementRef) { // The ElementRef is injected into the component
    // this.el = el;
  }

  @HostBinding('style.backgroundColor') bgColor: any; // is a decorator 
  @HostListener('mouseenter')
  onEnter() {
    this.bgColor = "red"
  }
  @HostListener('mouseleave')
  onOut() {
    this.bgColor = 'purple'
  }

  ngOnInit() {
    // this.el.nativeElement.style.backgroundColor = 'pink' 
    this.bgColor = 'blueviolet'
  }

}
