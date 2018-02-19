import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-zap',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-zap">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>`
})
export class IconZapComponent {}

@NgModule({
  declarations: [ IconZapComponent ],
  exports: [ IconZapComponent ]
})
export class IconZap {}
