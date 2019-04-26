import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-corner-right-up',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-corner-right-up">
    <polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
  </svg>`
})
export class IconCornerRightUpComponent {}

@NgModule({
  declarations: [ IconCornerRightUpComponent ],
  entryComponents: [ IconCornerRightUpComponent ],
  exports: [ IconCornerRightUpComponent ]
})
export class IconCornerRightUp {}
