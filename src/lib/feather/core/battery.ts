import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-battery',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/battery.svg'
})
export class IconBatteryComponent {}

@NgModule({
  declarations: [ IconBatteryComponent ],
  exports: [ IconBatteryComponent ]
})
export class IconBattery {}
