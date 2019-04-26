import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-percent',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-percent">
    <line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>
  </svg>`
})
export class IconPercentComponent {}

@NgModule({
  declarations: [ IconPercentComponent ],
  entryComponents: [ IconPercentComponent ],
  exports: [ IconPercentComponent ]
})
export class IconPercent {}
