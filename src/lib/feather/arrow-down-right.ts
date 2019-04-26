import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-arrow-down-right',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-down-right">
    <line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>
  </svg>`
})
export class IconArrowDownRightComponent {}

@NgModule({
  declarations: [ IconArrowDownRightComponent ],
  entryComponents: [ IconArrowDownRightComponent ],
  exports: [ IconArrowDownRightComponent ]
})
export class IconArrowDownRight {}
