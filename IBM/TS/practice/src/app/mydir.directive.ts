import { Directive, ElementRef, HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appMydir]',
  standalone: true
})
export class MydirDirective {
  @Input() appMydir = '';
  constructor(private ele:ElementRef) { }

  @HostListener ("mouseenter") onMouseEnter()
  {
    // console.log('mouseeneter')
    this.changeSize(this.appMydir || "20px");
  
  }

  @HostListener ("mouseleave") onMouseLeave()
  {
    // console.log('mouseleave')
    this.changeSize("20px");

  }

  changeSize(size:string):void
  {
    this.ele.nativeElement.style.fontSize=size;
  }
}




