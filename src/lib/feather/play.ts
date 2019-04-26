import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-play',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-play">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>`
})
export class IconPlayComponent {}

@NgModule({
  declarations: [ IconPlayComponent ],
  entryComponents: [ IconPlayComponent ],
  exports: [ IconPlayComponent ]
})
export class IconPlay {}
