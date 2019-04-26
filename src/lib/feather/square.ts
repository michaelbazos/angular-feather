import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-square',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-square">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  </svg>`
})
export class IconSquareComponent {}

@NgModule({
  declarations: [ IconSquareComponent ],
  entryComponents: [ IconSquareComponent ],
  exports: [ IconSquareComponent ]
})
export class IconSquare {}
