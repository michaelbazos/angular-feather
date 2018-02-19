import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-corner-down-right',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-down-right">
    <polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
  </svg>`
})
export class IconCornerDownRightComponent {}

@NgModule({
  declarations: [ IconCornerDownRightComponent ],
  exports: [ IconCornerDownRightComponent ]
})
export class IconCornerDownRight {}
