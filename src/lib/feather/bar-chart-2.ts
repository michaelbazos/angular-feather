import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-bar-chart-2',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bar-chart-2">
    <line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>`
})
export class IconBarChart2Component {}

@NgModule({
  declarations: [ IconBarChart2Component ],
  exports: [ IconBarChart2Component ]
})
export class IconBarChart2 {}
