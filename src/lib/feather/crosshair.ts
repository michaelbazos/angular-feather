import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-crosshair',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-crosshair">
    <circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>
  </svg>`
})
export class IconCrosshairComponent {}

@NgModule({
  declarations: [ IconCrosshairComponent ],
  exports: [ IconCrosshairComponent ]
})
export class IconCrosshair {}
