import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-layout',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-layout">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>`
})
export class IconLayoutComponent {}

@NgModule({
  declarations: [ IconLayoutComponent ],
  entryComponents: [ IconLayoutComponent ],
  exports: [ IconLayoutComponent ]
})
export class IconLayout {}
