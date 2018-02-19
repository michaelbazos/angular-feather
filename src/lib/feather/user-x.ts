import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'i-user-x',
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
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-user-x">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>
  </svg>`
})
export class IconUserXComponent {}

@NgModule({
  declarations: [ IconUserXComponent ],
  exports: [ IconUserXComponent ]
})
export class IconUserX {}
