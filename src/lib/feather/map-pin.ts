import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-map-pin',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-map-pin">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
  </svg>`
})
export class IconMapPinComponent {}

@NgModule({
  declarations: [ IconMapPinComponent ],
  exports: [ IconMapPinComponent ]
})
export class IconMapPin {}
