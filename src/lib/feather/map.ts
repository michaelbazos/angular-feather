import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-map',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/map.svg'
})
export class IconMapComponent {}

@NgModule({
  declarations: [ IconMapComponent ],
  exports: [ IconMapComponent ]
})
export class IconMap {}
