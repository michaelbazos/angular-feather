import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-check-square',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-check-square">
    <polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
  </svg>`
})
export class IconCheckSquareComponent {}

@NgModule({
  declarations: [ IconCheckSquareComponent ],
  entryComponents: [ IconCheckSquareComponent ],
  exports: [ IconCheckSquareComponent ]
})
export class IconCheckSquare {}
