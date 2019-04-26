import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-anchor',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-anchor">
    <circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
  </svg>`
})
export class IconAnchorComponent {}

@NgModule({
  declarations: [ IconAnchorComponent ],
  entryComponents: [ IconAnchorComponent ],
  exports: [ IconAnchorComponent ]
})
export class IconAnchor {}
