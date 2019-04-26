import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-arrow-right',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-right">
    <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
  </svg>`
})
export class IconArrowRightComponent {}

@NgModule({
  declarations: [ IconArrowRightComponent ],
  entryComponents: [ IconArrowRightComponent ],
  exports: [ IconArrowRightComponent ]
})
export class IconArrowRight {}
