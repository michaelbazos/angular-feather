import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-calendar',
  templateUrl: '../../../../node_modules/feather-icons/icons/core/calendar.svg'
})
export class IconCalendarComponent {}

@NgModule({
  declarations: [ IconCalendarComponent ],
  exports: [ IconCalendarComponent ]
})
export class IconCalendar {}
