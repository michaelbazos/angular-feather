import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-trending-down',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-trending-down">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>
  </svg>`
})
export class IconTrendingDownComponent {}

@NgModule({
  declarations: [ IconTrendingDownComponent ],
  entryComponents: [ IconTrendingDownComponent ],
  exports: [ IconTrendingDownComponent ]
})
export class IconTrendingDown {}
