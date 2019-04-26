import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-sidebar',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-sidebar">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>
  </svg>`
})
export class IconSidebarComponent {}

@NgModule({
  declarations: [ IconSidebarComponent ],
  entryComponents: [ IconSidebarComponent ],
  exports: [ IconSidebarComponent ]
})
export class IconSidebar {}
