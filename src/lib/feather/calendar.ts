import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-calendar',
  templateUrl: '../../../node_modules/feather-icons/dist/icons/calendar.svg'
})
export class IconCalendarComponent {}

@NgModule({
  declarations: [ IconCalendarComponent ],
  exports: [ IconCalendarComponent ]
})
export class IconCalendar {}
