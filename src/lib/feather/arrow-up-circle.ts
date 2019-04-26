import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-arrow-up-circle',
  styles: [`
    :host {
      display: inline-block;
      width: 24px;
      height: 24px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `],
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-up-circle">
    <circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>
  </svg>`
})
export class IconArrowUpCircleComponent {}

@NgModule({
  declarations: [ IconArrowUpCircleComponent ],
  entryComponents: [ IconArrowUpCircleComponent ],
  exports: [ IconArrowUpCircleComponent ]
})
export class IconArrowUpCircle {}
