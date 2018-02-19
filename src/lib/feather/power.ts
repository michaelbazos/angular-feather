import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-power',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-power">
    <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>
  </svg>`
})
export class IconPowerComponent {}

@NgModule({
  declarations: [ IconPowerComponent ],
  exports: [ IconPowerComponent ]
})
export class IconPower {}
