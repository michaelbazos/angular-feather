import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-clock',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-clock">
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
  </svg>`
})
export class IconClockComponent {}

@NgModule({
  declarations: [ IconClockComponent ],
  entryComponents: [ IconClockComponent ],
  exports: [ IconClockComponent ]
})
export class IconClock {}
