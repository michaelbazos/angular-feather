import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-help-circle',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-help-circle">
    <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line>
  </svg>`
})
export class IconHelpCircleComponent {}

@NgModule({
  declarations: [ IconHelpCircleComponent ],
  exports: [ IconHelpCircleComponent ]
})
export class IconHelpCircle {}
