import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-chevron-right',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevron-right">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>`
})
export class IconChevronRightComponent {}

@NgModule({
  declarations: [ IconChevronRightComponent ],
  entryComponents: [ IconChevronRightComponent ],
  exports: [ IconChevronRightComponent ]
})
export class IconChevronRight {}
