import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-tv',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-tv">
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>
  </svg>`
})
export class IconTvComponent {}

@NgModule({
  declarations: [ IconTvComponent ],
  entryComponents: [ IconTvComponent ],
  exports: [ IconTvComponent ]
})
export class IconTv {}
