import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-truck',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/truck.svg'
})
export class IconTruckComponent {}

@NgModule({
  declarations: [ IconTruckComponent ],
  exports: [ IconTruckComponent ]
})
export class IconTruck {}
