import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-zoom-out',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-zoom-out">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>
  </svg>`
})
export class IconZoomOutComponent {}

@NgModule({
  declarations: [ IconZoomOutComponent ],
  exports: [ IconZoomOutComponent ]
})
export class IconZoomOut {}
