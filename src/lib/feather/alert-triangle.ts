import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-alert-triangle',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-alert-triangle">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line>
  </svg>`
})
export class IconAlertTriangleComponent {}

@NgModule({
  declarations: [ IconAlertTriangleComponent ],
  entryComponents: [ IconAlertTriangleComponent ],
  exports: [ IconAlertTriangleComponent ]
})
export class IconAlertTriangle {}
