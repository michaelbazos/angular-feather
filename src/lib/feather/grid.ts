import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-grid',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-grid">
    <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
  </svg>`
})
export class IconGridComponent {}

@NgModule({
  declarations: [ IconGridComponent ],
  entryComponents: [ IconGridComponent ],
  exports: [ IconGridComponent ]
})
export class IconGrid {}
