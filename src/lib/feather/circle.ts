import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-circle',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-circle">
    <circle cx="12" cy="12" r="10"></circle>
  </svg>`
})
export class IconCircleComponent {}

@NgModule({
  declarations: [ IconCircleComponent ],
  entryComponents: [ IconCircleComponent ],
  exports: [ IconCircleComponent ]
})
export class IconCircle {}
