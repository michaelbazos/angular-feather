import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-chevron-up',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevron-up">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>`
})
export class IconChevronUpComponent {}

@NgModule({
  declarations: [ IconChevronUpComponent ],
  entryComponents: [ IconChevronUpComponent ],
  exports: [ IconChevronUpComponent ]
})
export class IconChevronUp {}
