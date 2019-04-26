import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-trending-up',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-trending-up">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>
  </svg>`
})
export class IconTrendingUpComponent {}

@NgModule({
  declarations: [ IconTrendingUpComponent ],
  entryComponents: [ IconTrendingUpComponent ],
  exports: [ IconTrendingUpComponent ]
})
export class IconTrendingUp {}
