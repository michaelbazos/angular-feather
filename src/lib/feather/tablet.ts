import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-tablet',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-tablet">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(180 12 12)"></rect><line x1="12" y1="18" x2="12" y2="18"></line>
  </svg>`
})
export class IconTabletComponent {}

@NgModule({
  declarations: [ IconTabletComponent ],
  exports: [ IconTabletComponent ]
})
export class IconTablet {}
