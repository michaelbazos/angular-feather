import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-skip-back',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-skip-back">
    <polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>
  </svg>`
})
export class IconSkipBackComponent {}

@NgModule({
  declarations: [ IconSkipBackComponent ],
  exports: [ IconSkipBackComponent ]
})
export class IconSkipBack {}
