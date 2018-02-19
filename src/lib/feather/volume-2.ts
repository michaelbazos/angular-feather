import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-volume-2',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-volume-2">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>`
})
export class IconVolume2Component {}

@NgModule({
  declarations: [ IconVolume2Component ],
  exports: [ IconVolume2Component ]
})
export class IconVolume2 {}
