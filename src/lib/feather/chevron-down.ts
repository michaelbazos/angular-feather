import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-chevron-down',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-chevron-down">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>`
})
export class IconChevronDownComponent {}

@NgModule({
  declarations: [ IconChevronDownComponent ],
  entryComponents: [ IconChevronDownComponent ],
  exports: [ IconChevronDownComponent ]
})
export class IconChevronDown {}
