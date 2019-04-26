import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-info',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-info">
    <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line>
  </svg>`
})
export class IconInfoComponent {}

@NgModule({
  declarations: [ IconInfoComponent ],
  entryComponents: [ IconInfoComponent ],
  exports: [ IconInfoComponent ]
})
export class IconInfo {}
