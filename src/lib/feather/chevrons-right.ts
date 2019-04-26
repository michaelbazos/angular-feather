import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-chevrons-right',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevrons-right">
    <polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>
  </svg>`
})
export class IconChevronsRightComponent {}

@NgModule({
  declarations: [ IconChevronsRightComponent ],
  entryComponents: [ IconChevronsRightComponent ],
  exports: [ IconChevronsRightComponent ]
})
export class IconChevronsRight {}
