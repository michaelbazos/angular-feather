import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-corner-left-up',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-left-up">
    <polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>
  </svg>`
})
export class IconCornerLeftUpComponent {}

@NgModule({
  declarations: [ IconCornerLeftUpComponent ],
  entryComponents: [ IconCornerLeftUpComponent ],
  exports: [ IconCornerLeftUpComponent ]
})
export class IconCornerLeftUp {}
