import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-plus',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-plus">
    <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>`
})
export class IconPlusComponent {}

@NgModule({
  declarations: [ IconPlusComponent ],
  exports: [ IconPlusComponent ]
})
export class IconPlus {}
