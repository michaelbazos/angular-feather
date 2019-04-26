import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-x-circle',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-x-circle">
    <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>`
})
export class IconXCircleComponent {}

@NgModule({
  declarations: [ IconXCircleComponent ],
  entryComponents: [ IconXCircleComponent ],
  exports: [ IconXCircleComponent ]
})
export class IconXCircle {}
