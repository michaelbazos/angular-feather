import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-code',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-code">
    <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
  </svg>`
})
export class IconCodeComponent {}

@NgModule({
  declarations: [ IconCodeComponent ],
  exports: [ IconCodeComponent ]
})
export class IconCode {}
