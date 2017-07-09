import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-thermometer',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/thermometer.svg'
})
export class IconThermometerComponent {}

@NgModule({
  declarations: [ IconThermometerComponent ],
  exports: [ IconThermometerComponent ]
})
export class IconThermometer {}
