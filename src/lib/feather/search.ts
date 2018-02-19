import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-search',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-search">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>`
})
export class IconSearchComponent {}

@NgModule({
  declarations: [ IconSearchComponent ],
  exports: [ IconSearchComponent ]
})
export class IconSearch {}
