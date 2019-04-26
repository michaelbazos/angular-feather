import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-log-out',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-log-out">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>`
})
export class IconLogOutComponent {}

@NgModule({
  declarations: [ IconLogOutComponent ],
  entryComponents: [ IconLogOutComponent ],
  exports: [ IconLogOutComponent ]
})
export class IconLogOut {}
