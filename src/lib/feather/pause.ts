import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-pause',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-pause">
    <rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>
  </svg>`
})
export class IconPauseComponent {}

@NgModule({
  declarations: [ IconPauseComponent ],
  entryComponents: [ IconPauseComponent ],
  exports: [ IconPauseComponent ]
})
export class IconPause {}
