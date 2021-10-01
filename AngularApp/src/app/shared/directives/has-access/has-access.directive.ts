import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { CheckAccessService } from '../../services/check-access/check-access.service';

@Directive({
  selector: '[appHasAccess]'
})
export class HasAccessDirective implements AfterViewInit {


  constructor(
    private checkAccessService: CheckAccessService,
    private elementRef: ElementRef<HTMLElement>
    ) { }
  ngAfterViewInit(): void
  {
    this.checkAccessService.checkAccess().subscribe(access => {
      if(!access) {
        this.elementRef.nativeElement.style.display = 'none'
      }
    })
  }

}
