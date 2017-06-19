import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
    constructor(private elementRef: ElementRef) {

    }
}