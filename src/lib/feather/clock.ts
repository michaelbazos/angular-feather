import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-clock',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/clock.svg'
})
export class IconClockComponent {}

@NgModule({
  declarations: [ IconClockComponent ],
  exports: [ IconClockComponent ]
})
export class IconClock {}
