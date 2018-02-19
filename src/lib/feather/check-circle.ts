import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-check-circle',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-check-circle">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>`
})
export class IconCheckCircleComponent {}

@NgModule({
  declarations: [ IconCheckCircleComponent ],
  exports: [ IconCheckCircleComponent ]
})
export class IconCheckCircle {}
