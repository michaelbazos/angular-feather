import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-truck',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-truck">
    <rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>
  </svg>`
})
export class IconTruckComponent {}

@NgModule({
  declarations: [ IconTruckComponent ],
  entryComponents: [ IconTruckComponent ],
  exports: [ IconTruckComponent ]
})
export class IconTruck {}
