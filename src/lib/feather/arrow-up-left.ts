import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-arrow-up-left',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-up-left">
    <line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>
  </svg>`
})
export class IconArrowUpLeftComponent {}

@NgModule({
  declarations: [ IconArrowUpLeftComponent ],
  entryComponents: [ IconArrowUpLeftComponent ],
  exports: [ IconArrowUpLeftComponent ]
})
export class IconArrowUpLeft {}
