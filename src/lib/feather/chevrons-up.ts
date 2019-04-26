import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-chevrons-up',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevrons-up">
    <polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>
  </svg>`
})
export class IconChevronsUpComponent {}

@NgModule({
  declarations: [ IconChevronsUpComponent ],
  entryComponents: [ IconChevronsUpComponent ],
  exports: [ IconChevronsUpComponent ]
})
export class IconChevronsUp {}
