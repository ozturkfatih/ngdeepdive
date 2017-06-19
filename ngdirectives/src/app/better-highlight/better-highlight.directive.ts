import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string='transparent';
  @Input('appBetterHighlight') highlightColor:string='blue';
  @HostBinding('style.backgroundColor') backgroundColor:string;
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    //this.backgroundColor='blue';
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    //this.backgroundColor='transparent';
    this.backgroundColor=this.defaultColor;
  }
  ngOnInit() {
    this.backgroundColor=this.defaultColor;
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}
