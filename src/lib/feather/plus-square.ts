import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-plus-square',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-plus-square">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>`
})
export class IconPlusSquareComponent {}

@NgModule({
  declarations: [ IconPlusSquareComponent ],
  entryComponents: [ IconPlusSquareComponent ],
  exports: [ IconPlusSquareComponent ]
})
export class IconPlusSquare {}
