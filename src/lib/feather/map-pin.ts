import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-map-pin',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/map-pin.svg'
})
export class IconMapPinComponent {}

@NgModule({
  declarations: [ IconMapPinComponent ],
  exports: [ IconMapPinComponent ]
})
export class IconMapPin {}
