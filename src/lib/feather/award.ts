import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-award',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-award">
    <circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>`
})
export class IconAwardComponent {}

@NgModule({
  declarations: [ IconAwardComponent ],
  entryComponents: [ IconAwardComponent ],
  exports: [ IconAwardComponent ]
})
export class IconAward {}
