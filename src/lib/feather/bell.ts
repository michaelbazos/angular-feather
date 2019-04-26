import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-bell',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-bell">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>`
})
export class IconBellComponent {}

@NgModule({
  declarations: [ IconBellComponent ],
  entryComponents: [ IconBellComponent ],
  exports: [ IconBellComponent ]
})
export class IconBell {}
