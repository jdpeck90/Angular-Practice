import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "yellow";
  @Input() highlightColor: string = "blue";
  @Input() defaultFontColor: string "black";
  @Input() highlightFontColor: string "white";
  @HostBinding("style.backgroundColor") backgroundColor: string = this
    .defaultColor;
  @HostBinding("style.color") fontColor: string = this.defaultFontColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    this.fontColor = this.defaultFontColor;
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue",
    //   false,
    //   false
    // );
    // this.backgroundColor = "blue";
    this.color = this.highlightFontColor;
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.color = this.defaultFontColor;
    this.backgroundColor = this.defaultColor;
  }
}
